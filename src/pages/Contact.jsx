import Header from '../components/Header'
import HeaderImg2 from '../assets/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'


const Contact = () => {
  return (
    <>
    <Header title="Let's Get In Touch" image={HeaderImg2} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, maxime?"/>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:pameklapp@gmail.com" target="_blank" rel='noopener noreferrer'><MdEmail/></a>
          <a href="https:facebook.com" target="_blank" rel='noopener noreferrer'><BsMessenger/></a>
          <a href="https://wa.me/+4917656832471" target="_blank" rel='noopener noreferrer'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
 
  
}

export default Contact