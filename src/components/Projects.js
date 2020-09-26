import React from "react";
// import play from ".";
import websites from "../websites";

function Projects() {
  return (
    <div className="projects">
      <a name="project"> </a>{" "}
      {websites.datas.map((data) => {
        return (
          <div className="outer-card">
            <div className="inner-card">
              <img src={data.imageUrl} alt="play" />
            </div>{" "}
            <div className="content2">
              <h1> {data.name} </h1>
              <p> {data.description} </p>{" "}
            </div>{" "}
            <a href={data.link}>
              <img src='/skillImages/play.png' alt="" />
            </a>{" "}
          </div>
        );
      })}{" "}
    </div>
  );
}
export default Projects;
