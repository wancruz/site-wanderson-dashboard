import React from 'react';

import "./Projects.css";

import newProject from "./Projects.json";

import ItensProjects from '../ItensProjects/ItensProjects';


function Projects() {
  
  return (
    <>
      <div id="projetos">

        <h1>Projetos</h1>

        <div className="project">
          {newProject.map((item,index) => 
            <ItensProjects
             key ={index} 
             link ={item.link}
             image ={item.image + (index + 1)}
             title ={item.title + (index + 1)}
            ></ItensProjects>
          )}
        </div>
      </div>
    </>
  )
}

export default Projects
