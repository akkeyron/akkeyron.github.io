import React from 'react'
import './Header.css'
import IMG from '../../assets/logo512.png'

const Header = () => {
  return (
    <header className='main__header'>
        <div className='container main__header-container'>
            <div className='main__header-left'>
                <h4>Introduction</h4>
                <h1>Loqman</h1>
                <p>This is loqman asdf wer asd f wet asdf cxzv ad g wer asd f adg wer</p>
            </div>
            <div className='main__header-right'>
                <div className='main__header-image'>
                    <img src={IMG} alt='Profile' />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header