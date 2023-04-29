import React from 'react'
import './About.css'
import data from './about.json'
import figWan from '../../images/pixlr-bg-result (1).png'

function About(props) {
    
 const { foto, resumo} = props.infoAbout;
   
  return (
    <div className="menus">
      <div id="sobre">
        <h1>Sobre</h1>
      </div>

      <div id="sbcont">
        <img src={foto} alt="Foto de Wanderson metade do corpo" />
        <p>{resumo}</p>
      </div>
    </div>
  )
}

export default About 
