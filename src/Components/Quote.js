import React from 'react'

export default function Quote(props) {
    return (
        <div className="card my-3" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">{props.quote.author}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{props.quote.tags}</h6>
                <p className="card-text">{props.quote.quote}</p>
            </div>
        </div>
    )
}
