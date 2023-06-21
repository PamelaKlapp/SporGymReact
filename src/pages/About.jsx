import React from 'react'
import Header from '../components/Header'
import HeaderImg from '../assets/header_bg_1.jpg'
import StoryImg from '../assets/about1.jpg'
import VisionImg from '../assets/about2.jpg'
import MisionImg from '../assets/about3.jpg'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImg} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis reprehenderit veritatis."/>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-img">
          <img src={StoryImg} alt="Our Team" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum eveniet minima necessitatibus modi eius possimus dolores debitis. Recusandae debitis omnis hic et quasi, magnam dolorem doloremque necessitatibus quia at aliquam obcaecati.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat explicabo molestias fugiat natus vitae alias facilis officia earum nulla blanditiis!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, numquam.</p>
        </div>
      </div>
    </section>

    <section className="about__vision">
      <div className="container about__vision-container">
      <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum eveniet minima necessitatibus modi eius possimus dolores debitis. Recusandae debitis omnis hic et quasi, magnam dolorem doloremque necessitatibus quia at aliquam obcaecati.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat explicabo molestias fugiat natus vitae alias facilis officia earum nulla blanditiis!</p>
        </div>
        <div className="about__section-img">
          <img src={VisionImg} alt="Our Vision" />
        </div>
        
      </div>
    </section>

    <section className="about__mision">
      <div className="container about__mision-container">
        <div className="about__section-img">
          <img src={MisionImg} alt="Our Mision" />
        </div>
        <div className="about__section-content">
          <h1>Our Mision</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum eveniet minima necessitatibus modi eius possimus dolores debitis. Recusandae debitis omnis hic et quasi, magnam dolorem doloremque necessitatibus quia at aliquam obcaecati.</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About