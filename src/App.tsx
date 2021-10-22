import React, { useEffect, useState } from "react";
import "./App.css";
import CoursesItems from "./components/CoursesItems";
import NewCourseForm from "./components/NewCourseForm";

import { Courses } from "./interfaces/Courses";
import { fetchCourses } from "./services/coursesService";

const App = () => {
  const [courses, setCourses] = useState<Courses[]>([]);

  const handleNewCourseCreate = () => {
    fetchCourses().then((course) => {
      setCourses(course);
    });
  };

  useEffect(() => {
    fetchCourses().then((course) => {
      setCourses(course);
    });
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
