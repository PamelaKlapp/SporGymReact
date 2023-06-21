import React from 'react'
import Header from '../components/Header'
import HeaderImg3 from '../assets/header_bg_3.jpg'

const Gallery = () => {
  const galleryLenght = 15
  const images = []

  for(let i = 1; i < galleryLenght; i ++){
    images.push(require(`../assets/gallery${i}.jpg`))
  }

  return (
    <>
    <Header title="Mi Gallery" image={HeaderImg3} text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quae odio eius nulla! Amet, dolorem. Ullam fugiat."/>

    <section className="gallery">
      <div className="container gallery__container">
        {
          images.map((e, index)=>{
            return (
              <article key={index}>
                <img src={e} alt={`Gallery ${index + 1}`} />
              </article>
            )


          })
        }
      </div>
    </section>
    
    </>
  )
}

export default Gallery