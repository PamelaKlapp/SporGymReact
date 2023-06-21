import React from 'react'
import {Link} from 'react-router-dom'
import ImgHeader from '../assets/main_header.png'

const MainHeader = () => {
  return (
    <header className='main__header'>
        <div className="container main__header-container">
            <div className="main__header-left">
                <h4>#100GaysOfWorkOut</h4>
                <h1>Join The Leyens Of The Fitness World</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus explicabo.</p>
                <Link to='/plans' className='btn lg'>Get Started</Link>
            </div>
            <div className="main__header-right">
                <div className="main__header-circle"></div>
                <div className="main__header-img">
                    <img src={ImgHeader} alt="Main Header" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default MainHeader