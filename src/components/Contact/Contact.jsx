import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  const [nome, setNome] = useState('')
  const [sobreNome, setSobreNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [mensagem, setMensagem] = useState('')

  function submitForm(event) {
    event.preventDefault()

    const texto = `Nome: ${nome} ${sobreNome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`

    const numeroWhatsApp = import.meta.env.VITE_WHATSAPP_NUMBER
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      texto
    )}`

    window.open(linkWhatsApp, '_blank')
  }

  function maskPhone(event) {
    const texto = event.target.value;
    const textoApenasNumeros = texto.replace(/\D/g, '').substring(0, 11);

    let telefoneFormatado = textoApenasNumeros.replace(
      /^(\d{2})(\d{5})(\d{4})/,
      '($1) $2-$3');

    if (textoApenasNumeros.length < 11) {
      telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3'
      );
    }
     setTelefone(telefoneFormatado);
  }

  return (
    <div className="menus">
      <div id="contato">
        <h1>Contato</h1>
      </div>

      <form onSubmit={submitForm}>
        <fieldset>
          <div className="cont">
            <div className="input-wrapper">
              <label htmlFor="event-name">Nome</label>
              <input
                type="text"
                name="input-name"
                id="input-name"
                required
                minLength="2"
                value={nome}
                onChange={event => setNome(event.target.value)}
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="event-name">Sobrenome</label>
              <input
                type="text"
                id="event-name"
                required
                minLength="2"
                value={sobreNome}
                onChange={event => setSobreNome(event.target.value)}
              />
            </div>
          </div>
          <div className="input-wrapper">
            <label htmlFor="event-email">
              E-mail <span> (digite um email válido)</span>
            </label>
            <input
              type="email"
              id="input-email"
              required
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="input-tel">
              Telefone
              <span> (digite um número de telefone válido)</span>
            </label>
            <input
              type="tel"
              id="input-tel"
              placeholder="(99) 99999-9999"
              required
              pattern="^\(\d{2}\) \d{5}-\d{4}$"
              maxLength="15"
              value={telefone}
              onChange={maskPhone}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="event-info">Mensagen</label>
            <textarea
              name="input-msg"
              id="input-info"
              cols="30"
              rows="10"
              value={mensagem}
              onChange={event => setMensagem(event.target.value)}
            ></textarea>
          </div>
        </fieldset>

        <center>
          <input type="submit" value="ENVIAR" className="button" />
        </center>
      </form>
    </div>
  )
}

export default Contact
