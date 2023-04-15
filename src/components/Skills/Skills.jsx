import React from 'react'
import './Skills.css'

import hab1 from '../../images/732212.png'
import hab2 from '../../images/css-3.png'
import hab3 from '../../images/js (1).png'
import hab4 from '../../images/react (1).png'
import hab5 from '../../images/nodejs.png'

function Skills() {
  return (
    <div className="menus">
      <div id="habilidades">
        <h1>Habilidades</h1>
      </div>

      <div id="img-hab">
        <img src={hab1} alt="Imagem da logo do html" />
        <img src={hab2} alt="Imagem da logo do css" />
        <img src={hab3} alt="Imagem da logo do javaScript " />
        <img src={hab4} alt="Imagem da logo do React" />
        <img src={hab5} alt="Imagem da logo do Node" />
      </div>
    </div>
  )
}

export default Skills
