import Header from '../components/Header'
import HeaderImg4 from '../assets/header_bg_4.jpg'
import Card from '../UI/Card'
import {plans} from '../data'

const Plans = () => {
  return (
    <>
    <Header title="Our Plans" image={HeaderImg4} text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus minus, explicabo repudiandae fuga sint iste enim iusto minima? Officiis, modi!"/>
    <section className="plans">
      <div className="container plans__container">
        {
          plans.map(({id, name, desc, price, features})=> {
              return (
                <Card key={id} className="plan"> 
                  <h3>{name}</h3>
                  <small>{desc}</small>
                  <h1>{`$${price}`}</h1><h2>/mo</h2>
                  <h4>Features</h4>
                  {
                    features.map(({feature, available}, index) => {
                      return(
                        <p key={index} className={!available ? 'disable' : ""}>{feature}</p>
                      )
                    })
                  }
                  <button className='btn lg'>ChoosE Plan</button>
                </Card>
              )
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plans