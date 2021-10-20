import React, { useEffect, useState } from "react";
import "./App.css";
import CoursesItems from "./components/CoursesItems";
import { Courses } from "./interfaces/Courses";

const App = () => {
  const [courses, setCourses] = useState<Courses[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((courses) => {
        console.log(courses);
        setCourses(courses);
      });
  }, []);

  return (
    <div className="App">
      <ul>
        {courses.map((course) => (
          
          <CoursesItems course={course}  />
        ))}
      </ul>
    </div>
  );
};

// type AppState ={
//   message:string;
// }

// class App extends React.Component {
//   state: AppState ={
//     message: "Default message"
//   }

//     componentDidMount(){
//       fetch('http://localhost:5000/courses')
//       .then(res => res.json()).then(obj => {
//         this.setState({message: obj.message});
//       })
//     }

//   render() {
//     return <div>
//       <h1>{this.state.message}</h1>
//     </div>;
//   }
// }

export default App;
