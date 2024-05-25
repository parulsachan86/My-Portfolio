import React from "react";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import WorkExperience from "./components/WorkExperience";

export default function App() {
  return(
    <main className="text-gray-400 bg-gray-900 body-font">
    <Navbar/>
    <About/>
    <WorkExperience/>
    <Project/>
    <Skills/>
   
    <Contact/>
    </main>
  )
}
