import { useState } from 'react'
import {testimonials} from '../data'
import SectionHead from './SectionHead'
import Card from '../UI/Card'
import {BsChatQuote} from 'react-icons/bs'
import {IoMdArrowDropleftCircle, IoMdArrowDroprightCircle} from 'react-icons/io'

const Testimonials = () => {
    const [index, setIndex] = useState(0)
    const {id, name, quote,job, avatar} = testimonials[index]


    const prevTextimonialHandler = () => {
        setIndex(prev => prev - 1);

        if(index  <= 0){
            setIndex(testimonials.length -1)
        }
    }

    const nextTestimonialHandler = () => {
        setIndex(prev => prev + 1);

        if(index  >= testimonials.length -1){
            setIndex(0)
        }
    }

  return (
    <section className='testimonials'>
<div className="container testimonials__container">
    <SectionHead icon={<BsChatQuote/>} title="Testimonials" className="testimonials__head"/>
    <Card className='testimonial'>
        <div className="testimonial__avatar">
            <img src={avatar} alt={`${id} ${name}`} />
        </div>
        <p className="testimonial__quote">
            {`"${quote}"`}
        </p>
        <h5>{name}</h5>
        <small className="testimonial__title">{job}</small>
    </Card>
    <div className="testimonials__btn-container">
        <button className='testimonials__btn' onClick={prevTextimonialHandler}><IoMdArrowDropleftCircle/></button>
        <button className='testimonials__btn' onClick={nextTestimonialHandler}><IoMdArrowDroprightCircle/></button>
    </div>
</div>
    </section>
  )
}

export default Testimonials