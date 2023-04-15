import React from 'react'
import './About.css'
import data from './about.json'
import figWan from '../../images/pixlr-bg-result (1).png'

function About() {
  return (
    <div className="menus">
      <div id="sobre">
        <h1>Sobre</h1>
      </div>

      <div id="sbcont">
        <img src={figWan} alt="Foto de Wanderson metade do corpo" />
        <p>{data.about}</p>
      </div>
    </div>
  )
}

export default About
