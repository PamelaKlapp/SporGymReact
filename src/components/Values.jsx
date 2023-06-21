import IMGValues from '../assets/values.jpg'
import SectionHead from './SectionHead'
import {SlDiamond} from 'react-icons/sl'
import {values} from '../data'
import Card from '../UI/Card'

const Values = () => {
  return (
    <section className='values'>
        <div className="container values__container">
            <div className="values__left">
                <div className="values__img">
                    <img src={IMGValues} alt="Values" />
                </div>
            </div>
            <div className="values__right">
                <SectionHead icon={<SlDiamond/>} title="Values"/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci aut velit corrupti soluta reprehenderit quaerat! Culpa minus placeat necessitatibus praesentium!</p>
                <div className="values__wrapper">
                    {
                        values.map(({id, icon, title, desc})=> {
                            return(
                                <Card className="values__value" key={id}>
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>

                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values