import React from 'react';
import './Skills.css';

import ItemsSkill from '../ItemsSkill/ItemsSkill';

import hab1 from '../../images/732212.png'
import hab2 from '../../images/css-3.png'
import hab3 from '../../images/js (1).png'
import hab4 from '../../images/react (1).png'
import hab5 from '../../images/nodejs.png'

function Skills({infoSkill}) {
 

  /* if(!name || !image || !tipo) {
     return <p>carregando...
     </p>*/

  return (

    <div className="menus">
      <div id="habilidades">
        <h1>Habilidades</h1>
      </div>

      <div id="img-hab">
          {infoSkill.map((item,index) => 
            <ItemsSkill
             key ={index} 
           //  name = {item.name}
             image ={item.image}
            // tipo ={item.tipo}
            
            ></ItemsSkill>
          )}
          </div>
        </div>
   
  )
}
export default Skills
