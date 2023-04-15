import React from 'react'
import "./Presentation.css"
import boneco from '../../images/desenho-removebg-preview.png'

function Presentation() {
  return (
    <section>
      <div id="name">
        <p>Oi,eu sou</p>
        <h1>Wanderson Cruz</h1>
        <h3>Desenvolvedor Web</h3>
        <h4>Conheça meu Portfolio</h4>
      </div>
      <img src={boneco} alt="desenho de boneco teclando no pc" />
    </section>
  )
}

export default Presentation
