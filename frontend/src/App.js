import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import React,{useState} from 'react'
function App() {
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    // here i am passing the object to alert variable
    
    setAlert({
      msg:message,
      type:type
    })
  
    // now making the alert to dissapear automatically
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  
  return (
    <>
      {/* <Home
    /> */}
<Alert/>
      <NoteState>
        {/* what are the compontents that comes under it  can use this context api's states */}

        <Router>
          <Navbar />
<Alert alert={alert}/>
          <div className="container">
            <Routes>
              {/* this below is function  */}
              <Route exact path="/" element={<Home  showAlert={showAlert} />} />
              <Route exact path="/home" element={<Home showAlert={showAlert} />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login showAlert={showAlert}/>} />

              <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />

            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
