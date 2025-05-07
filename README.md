# Account Page - React UI Component

This project implements a user **Account Page** for an e-learning platform using React.  
The page displays user information, enrolled courses, progress tracking, feedback submission, and course rating features.  
It is currently based on **mock data** and ready to be integrated with a real `.NET` backend when available.

---

## 🔗 Route

Accessible via: `/account`

---

## 🚀 Features

- ✅ Display email, and role (Student/Instructor).
- ✅ Placeholder button for future **Edit Profile** feature.
- ✅ List of enrolled courses in responsive grid layout:
  - Course image and title
  - Progress bar showing course completion %
  - Slider to update progress
  - Save button (enabled only when a change is made)
- ✅ Feedback form for each course (textarea + save button)
- ✅ Rating system (1–5 stars) appears **only when course is 100% completed**
  - Save button enabled only on change

---

## 📦 Data

- Using mock user data stored in `mockUserData.js`.
- Supports future integration with:  GET /api/enrollments/user/{userId}


---

## 💡 How to Use

1. Clone the repo:
 git clone https://github.com/HajarZain222/user-account-ui.git

2. Navigate to the folder:
 cd user-account-ui

3.Install dependencies:
 npm install

4.Start the development server:
npm start


## Future Integration Notes

Replace mock data with actual data from .NET backend.

Use GET /api/enrollments/user/{userId} to fetch user’s enrolled courses and progress.

Handle submission of feedback and ratings via backend endpoints when available.

🧑‍💻 Developer
Hajar Zain
React Frontend Web Developer





  
