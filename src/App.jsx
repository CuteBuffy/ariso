import React, { useState } from 'react'
import Header from "./components/Header/Header.jsx"
import Main from "./components/Main/Main.jsx"

function App() {
  return (
    <>
      <div className='container'>
        <Header></Header>
        <Main></Main>
      </div>
      <footer className="footer">
        <div className="footer__container">

        </div>
      </footer>
    </>
  )
}

export default App