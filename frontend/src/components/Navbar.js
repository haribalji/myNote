// import React,{useEffect} from 'react'
// import 
//   { useLocation, Link,  useNavigate,  }

//  from "react-router-dom";


// const Navbar = () => {
//   const navigate = useNavigate();

//  const  handlelogout=()=>{
//     // when the try to logout 
//     // 1) first you need to remove the  token from the local storage
//     // 2)then you can redirect to login
//     localStorage.removeItem("token");
//     navigate("/login");

//   }
//   let location = useLocation();


//   useEffect(() => {
//     console.log(location.pathname);
//     }, [location]);

//   return (
//     <div>
//     <nav className="navbar  navbar-expand-lg  navbar-dark bg-dark">
// <div className="container-fluid">
// <Link className="navbar-brand" to="/">Mynotebook</Link>
// <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//   <span className="navbar-toggler-icon"></span>
// </button>
// <div className="collapse navbar-collapse" id="navbarSupportedContent">
//    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//     <li className="nav-item">
//       <Link className={`nav-link ${location.pathname==="/home" ? "active" :""}`}to="/home">Home</Link>
//     </li>
//     <li className="nav-item">
//       <Link className={`nav-link ${location.pathname==="/about" ? "active" :""}`} to="/about">About</Link>
//     </li>




//   </ul>
//   {/* if token exisit means we need to shoe the the logout symbol */}
//  {localStorage.getItem("token")==null ?<form className="d-flex" role="search">
//   <Link class="btn btn-primary mx-1" to="/login"  role="button">Login</Link>
// <Link class="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>

//  </form>:<button onClick={handlelogout} className='btn btn-primary'>Logout</button>}
// </div>
// </div>

// </nav>
//   </div>
//   )
// }

// export default Navbar

import React, { useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleNavCollapse = () => {
    const navbar = document.getElementById("navbarSupportedContent");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Mynotebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/home" ? "active" : ""
                    }`}
                  to="/home"
                  onClick={handleNavCollapse}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/about" ? "active" : ""
                    }`}
                  to="/about"
                  onClick={handleNavCollapse}
                >
                  About
                </Link>
              </li>
            </ul>
            {localStorage.getItem("token") == null ? (
              <form className="d-flex" role="search">
                <Link
                  className="btn btn-primary mx-1"
                  to="/login"
                  role="button"
                  onClick={handleNavCollapse}
                >
                  Login
                </Link>
                <Link
                  className="btn btn-primary mx-1"
                  to="/signup"
                  role="button"
                  onClick={handleNavCollapse}
                >
                  Signup
                </Link>
              </form>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  handleNavCollapse();
                }}
                className="btn btn-primary"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
