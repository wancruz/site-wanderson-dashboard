import React from 'react';

import "./Projects.css";


import ItemsProjects from '../ItemsProjects/ItemsProjects';


function Projects({infoProject}) {
  
  return (
    <>
      <div id="projetos">

        <h1>Projetos</h1>

        <div className="project">
          {infoProject.map((item,index) => 
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
