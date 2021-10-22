import React, { useState } from "react";
import { createCourse } from "../services/coursesService";

type CoursesItemProps = {
  onNewCourseCreate?: any;
};

const NewCoursesForm = (props: CoursesItemProps) => {
  const [formVisible, setFormVisible] = useState<boolean>(false);

  const [newCourseNumber, setNewCourseNumber] = useState<string>("");
  const [newCourseTitle, setNewCourseTitle] = useState<string>("");

  const handleNewCourseNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewCourseNumber(e.target.value);
  };

  const handleSave = async () => {
    //alert(`${newCourseNumber} : ${newCourseTitle}`);
    const newCourse = {
      number: newCourseNumber,
      title: newCourseTitle,
    };

    await createCourse(newCourse);

    props.onNewCourseCreate();

    setFormVisible(false);

    // try {
    //   fetch("http://localhost:5000/courses", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(newCourse),
    //   })
    //     .then((res) => res.json())
    //     .then((saveNewCourse) => {
    //       if (saveNewCourse.id !== undefined) {
    //         if (props.onNewCourseCreate !== undefined) {
    //           props.onNewCourseCreate(saveNewCourse);
    //           setFormVisible(false);
    //         }
    //       } else {
    //         alert("Save error");
    //       }
    //     });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div>
      <button onClick={() => setFormVisible(!formVisible)}>New Course</button>
      {formVisible ? (
        <div>
          Number:{" "}
          <input
            value={newCourseNumber}
            onChange={handleNewCourseNumberChange}
          />
          <br />
          Title:{" "}
          <input
            value={newCourseTitle}
            onChange={(e) => setNewCourseTitle(e.target.value)}
          />
          <br />
          <button onClick={() => handleSave()}>Save</button>
        </div>
      ) : null}
    </div>
  );
};

export default NewCoursesForm;
