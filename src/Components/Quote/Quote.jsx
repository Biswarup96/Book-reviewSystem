import React from 'react'
import '../Quote/Quote.css'


// title props

import TitleTypeTwo from '../../UI/TitleTypeTwo/TitleTypeTwo'

// qoute data.....
import { quoteData } from '../../Data/Data'


const Quote = () => {
  return (
    <section className='quote'>
        <div className="container quoteContainer">
            <TitleTypeTwo Title={'Quote Of The Day'} className='qoute-title'/>

         
                {
                    quoteData.map(({quote,speaker},index)=>{
                        return(
                            <article key={index}>
                                <p>{quote}</p>
                                <h5>{speaker}</h5>

                            </article>

                        )
                    })
                }
          
        </div>
    </section>
   
  )
}

export default Quote