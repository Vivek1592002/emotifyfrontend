import React from "react";
import eye from './components/ankh.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function About(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark" style={{paddingLeft:"20px"}}>
            <h1 class="navbar-brand" className="logo" href="#">ANKH</h1>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" id="home" href="http://localhost:3000/home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="abt-us" href="http://localhost:3000/about">About-Us</a>
                </li>
                </ul>
            </div>
            </nav>
        <div style={{color:"white", fontFamily:"cursive", fontSize:"30px", margin:"30px"}}>
           
            <center><img src={eye} style={{height:"180px", width:"300px"}}></img><h1>ANKH</h1></center>
            <p>This Project focuses on music for all emotions , whether you are happy sad or suffering a heart break <br></br>
                our app doesnt need to be told anything it reads you emotion like a friend and plays a song to sothen your heart.
            </p>
            Team members:
            <ul>
                <li>
                    Tanishtha Sharma
                </li>
                <li>
                    Yashasvi Gupta
                </li>
                <li>
                    Vivek Shekhawat
                </li>
                
            </ul>

        </div>
        </>
    );
}

export default About;