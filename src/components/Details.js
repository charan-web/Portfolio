import React,{useEffect} from "react";
// import react from "./skillImages/code.jpg"
// import logo from '/../public/logo192.png'

// import profile from './skillImages/profle.jpg'




function Details() {
  useEffect(()=>{
    document.querySelector('.content').classList.add("animate")
    document.querySelector('.img-container').classList.add("animateImg")
   },[])
  return (
    <div className="details">
      <div className="img-container">
        <img src={process.env.PUBLIC_URL+"/skillImages/profle.jpg"} alt="d"/>
        </div>
      <div className="content">
        <h1>ABOUT ME</h1>
        <p>
          Hey,This is <span>CHARAN</span> ,I Love to Code.Actually Coding is My
          Passion.At the Beginning It was very Hard.But now It was FUN :)
        </p>
      </div>
      <div className="reactImg">  <img src={process.env.PUBLIC_URL+"/skillImages/code.jpg"} alt="f"/> </div> 
    </div>
  );
}
export default Details;
