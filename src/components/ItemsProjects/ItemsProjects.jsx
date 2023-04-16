import React from 'react';
import './ItemsProjects.css';

function ItemsProjects(props) {
  return (
    <div id="img-proj">
      <a href={props.link} target='_blank'>
        <img src={props.image} alt="Imagem de projeto embreve" />
        <p>{props.title}</p>
      </a>
    </div>
  )
}

export default ItemsProjects;
