import React from "react";
import{Link} from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav >
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/sobre">Sobre</Link>
      </li>
      <li>
      <Link to="/habilidades">Habilidades</Link>
      </li>
      <li>
      <Link to="/projetos">Projetos</Link>
      </li>
      <li>
      <Link to="/contato">Contato</Link>
      </li>

    </nav>
  );
}

export default Navigation;