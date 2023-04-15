import React from 'react'
import logoGit from '../../images/github.png'
import logoLinkedin from '../../images/linkedin.png'
import "./Footer.css"

function Footer() {
  return (
    <footer>
      <h3>Feito com amor por Wanderson S2</h3>

      <div id="img-footer">
        <a
          href="https://www.linkedin.com/in/wanderson-willian-cruz-6a3068241/"
          target="_blank"
        >
          <img src={logoLinkedin} alt="logo linkedin" />
        </a>

        <a href="https://github.com/wancruz/" target="_blank">
          <img id="git" src={logoGit} alt="logo do github" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
