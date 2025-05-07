import htmlCourseImg from "../assets/html-course.jpg";
import cssCourseImg from "../assets/css-course.jpg";
import javascriptCourseImg from "../assets/java-script-course.jpg";
import reactJsCourseImg from "../assets/react-js-course.jpg";

const userData = {
    id: "c001",
    name: "Hajar Zain El-Abidin",
    email: "hajarzain222@gmail.com",
    role: "Student",
    enrolledCourses: [
    {
        id: "c101",
        title: "HTML5 Fundamentals",
        image: htmlCourseImg,
        progress: 100,
        feedback: ""
    },
    {
        id: "c102",
        title: "CSS3 Essentials",
        image: cssCourseImg,
        progress: 60,
        feedback: ""
    },
    {
        id: "c103",
        title: "JavaScript Basics",
        image: javascriptCourseImg,
        progress: 55,
        feedback: ""
    },
    {
        id: "c104",
        title: "React JS for Beginners",
        image: reactJsCourseImg,
        progress: 40,
        feedback: "Loved the course!"
    }
    ]
};

export default userData;
