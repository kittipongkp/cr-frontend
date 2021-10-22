import React, { useEffect, useState } from "react";

import "./App.css";
import CoursesItems from "./components/CoursesItems";
import NewCourseForm from "./components/NewCourseForm";

import { Courses } from "./interfaces/Courses";

const App = () => {
  const [courses, setCourses] = useState<Courses[]>([]);

  const fetchCourses = () => {
    try {
      fetch("http://localhost:5000/courses")
        .then((res) => res.json())
        .then((courses) => {
          console.log(courses);
          setCourses(courses);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewCourseCreate = (course: Courses) => {
    fetchCourses();
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="App">
      <ul>
        {courses.map((course) => (
          <CoursesItems key={course.id} course={course} />
        ))}
      </ul>
      <NewCourseForm onNewCourseCreate={handleNewCourseCreate} />
    </div>
  );
};

export default App;
