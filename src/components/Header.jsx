import React from 'react'

const Header = ({title, image, text}) => {
  return (
    <header className='header'>
      <div className="header__container">
        <div className="header__container-bg">
          <img src={image} alt="Header Background" />
        </div>
        <div className="header__content">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </header>
  )
}

export default Header
