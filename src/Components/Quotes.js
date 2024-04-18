import React from 'react';
import Quote from './Quote';

export default function Quotes(props) {
  return (
    <div className='container'>
        <h4>Quotes </h4>
        {props.quotes && props.quotes.map((quote) => {
            return (<Quote key={quote.id} quote={quote}/>)
        })}
    </div>
  )
}
