import {Link} from 'react-router-dom'
import LOGO from '../assets/logo.png'
import {BsLinkedin} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'





const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <img src={LOGO} alt="Logo" />
                </Link>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias soluta at necessitatibus dolores officiis provident cupiditate dicta reiciendis doloremque magnam eaque, in, distinctio voluptas, minima mollitia voluptate. Labore, ipsum voluptatem!
                </p>
                <div className="footer__socials">
                    <a href="https://linkedin.com" target="_blank" rel='noreferrer noopener'><BsLinkedin/></a>
                    <a href="https://facebook.com" target="_blank" rel='noreferrer noopener'><FaFacebookSquare/></a>
                    <a href="https://twitter.com" target="_blank" rel='noreferrer noopener'><BsTwitter/></a>
                    <a href="https://instagram.com" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact</Link>
                <Link to="/s">Support</Link>
                
            </article>
        </div>
        <div className="footer__copyright">
            <small>2023 PAME COPYRIGHT &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer