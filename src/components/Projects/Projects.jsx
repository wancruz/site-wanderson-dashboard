import React from 'react';

import "./Projects.css";

import newProject from "./Projects.json";

import ItemsProjects from '../ItemsProjects/ItemsProjects';


function Projects() {
  
  return (
    <>
      <div id="projetos">

        <h1>Projetos</h1>

        <div className="project">
          {newProject.map((item,index) => 
            <ItemsProjects
             key ={index} 
             link ={item.link}
             image ={item.image + (index + 1)}
             title ={item.title + (index + 1)}
            ></ItemsProjects>
          )}
        </div>
      </div>
    </>
  )
}

export default Projects;
