import React, { Fragment } from 'react'

import api from './api'

import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Presentation from './components/Presentation/Presentation'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Navigation from './components/Navigation/Navigation'

function App() {
  const [infoAbout, setInfoAbout] = React.useState({})
  const [infoSkill, setInfoSkill] = React.useState([])
  const [infoProject, setInfoProject] = React.useState([])

  const fetchDados = async () => {
    try {
      const infoAbout = await api.get('/infoAbout/1')
      setInfoAbout({
        foto: infoAbout.data.foto,
        resumo: infoAbout.data.resumo
      })

      const infoSkillExpert = await api.get('/infoSkill?tipo=profissional')
      const infoSkillAprimorando = await api.get('/infoSkill?tipo=aprimorando')

      const infoSkill = await api.get('/infoSkill')
      setInfoSkill(infoSkill.data)

      const infoProject = await api.get('/infoProject')
      setInfoProject(infoProject.data)
    } catch (error) {
      console.log('Erro ao buscar dados', error)
    }
  }
  React.useEffect(() => {
    fetchDados()
  }, [])

  return (
    <>
      <Header></Header>

      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route index element={<Presentation />} />
          <Route path="sobre" element={<About infoAbout={infoAbout} />} />
          <Route
            path="habilidades"
            element={<Skills infoSkill={infoSkill} />}
          />
          <Route path="projetos" element={<Projects />} />
          <Route path="contato" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </>
  )
}

export default App
