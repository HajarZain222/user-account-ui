import React, { useState } from "react";
import userData from "../../../src/data/mockUserData";
import "./AccountPage.css";

// TODO: Replace mock data with GET /api/enrollments/user/{userId} once backend is ready

const AccountPage = () => {
    const [courses, setCourses] = useState(
        userData.enrolledCourses.map(course => ({
            ...course,
            rating: course.rating || 0,
            feedback: course.feedback || ""
        }))
    );

    const [originalCourses, setOriginalCourses] = useState(
        userData.enrolledCourses.map(course => ({
            id: course.id,
            rating: course.rating || 0,
            feedback: course.feedback || "",
            progress: course.progress || 0
        }))
    );

    const handleFeedbackChange = (id, value) => {
        const updated = courses.map(course =>
            course.id === id ? { ...course, feedback: value } : course
        );
        setCourses(updated);
    };

    const handleSaveFeedback = id => {
        const course = courses.find(c => c.id === id);
        alert(`Saved feedback for "${course.title}": ${course.feedback}`);
        setOriginalCourses(prev =>
            prev.map(c =>
                c.id === id ? { ...c, feedback: course.feedback } : c
            )
        );
    };

    const handleProgressChange = (id, value) => {
        const newValue = Math.max(0, Math.min(100, Number(value))); // Clamp 0-100
        const updated = courses.map(course =>
            course.id === id ? { ...course, progress: newValue } : course
        );
        setCourses(updated);
    };

    const handleSaveProgress = id => {
        const course = courses.find(c => c.id === id);
        alert(`Saved progress for "${course.title}": ${course.progress}%`);
        setOriginalCourses(prev => prev.map(c =>
            c.id === id ? { ...c, progress: course.progress } : c
        ));
    };

    const handleRatingChange = (id, value) => {
        const newValue = Math.max(1, Math.min(5, Number(value))); // Clamp 1–5
        const updated = courses.map(course =>
            course.id === id ? { ...course, rating: newValue } : course
        );
        setCourses(updated);
    };
    
    const handleSaveRating = id => {
        const course = courses.find(c => c.id === id);
        alert(`Saved rating for "${course.title}": ${course.rating}/5`);
        setOriginalCourses(prev => 
            prev.map(c =>
                c.id === id ? { ...c, rating: course.rating } : c
        ));
    };

    const isFeedbackChanged = (id) => {
        const current = courses.find(c => c.id === id);
        const original = originalCourses.find(c => c.id === id);
        return current.feedback !== original.feedback;
    };

    const isProgressChanged = (id) => {
        const current = courses.find(c => c.id === id);
        const original = originalCourses.find(c => c.id === id);
        return current && original && current.progress !== original.progress;
    };

    const isRatingChanged = (id) => {
        const current = courses.find(c => c.id === id);
        const original = originalCourses.find(c => c.id === id);
        return current.rating !== original.rating;
    };

    return (
        <div className="account-container">
            <h2>Welcome, {userData.name} 👋</h2>

            <section className="user-info">
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Role:</strong> {userData.role}</p>
                <button className="edit-btn" disabled>Edit Profile (Coming Soon)</button>
            </section>

            <section className="courses">
                <h3 className="courses-title">Enrolled Courses</h3>
                <div className="courses-grid">
                    {courses.map(course => (
                        <div key={course.id} className="course-card">
                            <img src={course.image} alt={course.title} className="course-image" />
                            <p><strong>{course.title}</strong></p>
                            <div className="progress-bar">
                                <div
                                    className="progress"
                                    style={{ width: `${course.progress}%` }}
                                ></div>
                            </div>
                            <p>{course.progress}% complete</p>

                            {/* Edit progress */}
                            <div className="progress-control">
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={course.progress}
                                    onChange={(e) => handleProgressChange(course.id, e.target.value)}
                                    className="progress-slider"
                                />
                            </div>

                            <button 
                                onClick={() => handleSaveProgress(course.id)}
                                disabled={!isProgressChanged(course.id)}>
                                Save Progress
                            </button>

                            {/* Feedback form */}
                            <textarea
                                placeholder="Leave feedback..."
                                value={course.feedback}
                                onChange={(e) => handleFeedbackChange(course.id, e.target.value)}
                            />
                            <button 
                                onClick={() => handleSaveFeedback(course.id)}
                                disabled={!isFeedbackChanged(course.id)}>
                                Save Feedback
                            </button>

                            {/* Rating (if course is completed) */}
                            {course.progress === 100 && (
                                <div className="rating-section">
                                    <div className="rating-row">
                                        <span className="rating-label">Your Rating:</span>
                                        <div className="star-rating">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <svg
                                                    key={star}
                                                    onClick={() => handleRatingChange(course.id, star)}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill={star <= course.rating ? "#facc15" : "none"}
                                                    stroke="#facc15"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="star"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.7 5.8 21 7 14.1 2 9.3 9 8.5 12 2" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => handleSaveRating(course.id)}
                                        disabled={!isRatingChanged(course.id)}>
                                        Save Rating
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AccountPage;

