import SectionHead from "./SectionHead"
import {faqs} from '../data'
import {BsQuestionLg} from 'react-icons/bs'
import Question from "./Question"

const FAQ = () => {
  return (
    <section className="faqs">
        <div className="container faqs__container">
            <SectionHead icon={<BsQuestionLg/>} title="FAQs"/>
            <div className="faqs__wrapper">
                {
                    faqs.map(({ id, question, answer}) => {
                        return ( 
                            <Question key={id} question={question} answer={answer}/>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default FAQ