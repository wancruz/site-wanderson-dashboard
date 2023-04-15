import React from 'react';
import './ItensProjects.css';

function ItensProjects(props) {
  return (
    <div id="img-proj">
      <a href={props.link} target='_blank'>
        <img src={props.image} alt="Imagem de projeto embreve" />
        <p>{props.title}</p>
      </a>
    </div>
  )
}

export default ItensProjects;
