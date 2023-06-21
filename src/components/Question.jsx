import { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'

const Question = ({question, answer}) => {
    const [ansewerShowing, setAnswerShowing] = useState(false);


  return (
    <article className='question' onClick={() => setAnswerShowing(prev => !prev)}>
        <div>
            <h4>{question}</h4>
            <button className='question__icon'>
                {
                    ansewerShowing ? <AiOutlineMinus/> : <AiOutlinePlus/>
                }
            </button>
        </div>
        {ansewerShowing && <p>{answer}</p>}
            
    </article>
  )
}

export default Question