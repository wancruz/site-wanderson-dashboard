import React from "react";
import "./ItemsSkill";



function ItemsSkill(props) {
  return (
    <div id="img-hab">
         <h3>{props.name}</h3>
        <img src={props.image} alt="Imagem de habilidade" />
        <p id="tipo">{props.tipo}</p>
    </div>
  )
}

export default ItemsSkill;