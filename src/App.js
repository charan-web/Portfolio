import React from "react";

import "./App.css";
import Header from "./components/Header";
import Details from "./components/Details";
import Projects from "./components/Projects";
import MySkills from "./components/MySkills";
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Header />
      <Details />
      <MySkills />
      <Projects/>
     <Contact/>
    </div>
  );
}
 

export default App;
