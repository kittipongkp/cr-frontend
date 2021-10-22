import React, {useState} from "react"

type CoursesItemProps = {}

const NewCoursesForm = (props: CoursesItemProps) => {

    const [formVisible, setFormVisible] = useState<boolean>(false)

    const [newCourseNumber, setNewCourseNumber] = useState<string>("")
    const [newCourseTitle, setNewCourseTitle] = useState<string>("")

    const handleNewCourseNumberChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setNewCourseNumber(e.target.value)
      }
    
      const handleSave=()=>{
        alert(`${newCourseNumber} : ${newCourseTitle}`)
      }

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
  )
}

export default NewCoursesForm
