import React from 'react'
import Quotes from './Quotes';
import QuoteForm from './QuoteForm';

const Body = (props) => {
  return (
    <div className="containers">
        <Quotes quotes={props.quotes}/>
        <QuoteForm addQuote={props.addQuote}/>
    </div>
  )
}

export default Body;
