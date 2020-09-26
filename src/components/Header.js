import React from "react";


import '../App.css'


const activeHandler = ()=>{
    console.log("hi")
    document.getElementsByTagName('UL')[0].classList.toggle("active")
    document.querySelector(".line2").classList.toggle("toggle2")
    document.querySelector(".line1").classList.toggle("toggle1")
    document.querySelector(".line3").classList.toggle("toggle3")
}





function Header() {
  return (
    <header>
      <h1>CHARAN</h1>
      <nav>
        <ul>
          <li>
            {" "}
            <a href="#home">HOME</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#about">ABOUT</a>
          </li>
          <li>
            {" "}
            <a href="#project">PROJECT</a>
          </li>
          <li>
            {" "}
            <a href="#contact">CONTACT </a>
          </li>
        </ul>
        
        <div className="burger" onClick={activeHandler}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
