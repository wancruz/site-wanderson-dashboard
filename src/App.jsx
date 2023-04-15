import React, {Fragment} from "react";
import "./App.css";

import { BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Presentation from "./components/Presentation/Presentation";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Navigation from "./components/Navigation/Navigation";


function App() {
  return (
  <>
    <Header></Header>
    
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
          <Route index element={<Presentation/>} />
          <Route path="sobre" element={<About/>} />
          <Route path="habilidades" element={<Skills/>} />
          <Route path="projetos" element={<Projects/>} />
          <Route path="contato" element={<Contact/>} />
      </Routes>
    </BrowserRouter>

  
    <Footer></Footer>
    </>
  )
 
}

export default App ;
