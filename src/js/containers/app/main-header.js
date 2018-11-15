'use strict'

import React from 'react'

const MainHeader = () => (
  <header className='header' role='banner'>
    <a className='logo' href='./' role='logo'>
      <img src='svg/logo.svg' />
    </a>
    <a
      className='btn-link'
      href='https://github.com/datascience-br/eventos'
      title='Anuncie seu evento'>
        Anunciar Evento
    </a>
  </header>
)

export default MainHeader
