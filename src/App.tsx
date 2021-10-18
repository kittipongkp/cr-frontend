import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  //const message = "My message"
  const [message, setMessage] = useState("My message");

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((obj) => {
        setMessage(obj.message);
      });
  }, []);

  return (
    <div className="App">
      <h1> {message}</h1>
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
