import React, { useState } from 'react'

export default function QuoteForm(props) {
    const [author, setAuthor] = useState('');
    const [tags, setTags] = useState([]);
    const [quoteText, setQuoteText] = useState('');

    function submitHandler(event){
        event.preventDefault();
        if(author.length === 0 || quoteText.length === 0 || tags.length === 0 ){
            alert('Please provide values for all 3 properties');
        }
        else{
            let quote = {
                author: author,
                tags: tags,
                quote: quoteText
            };
            props.addQuote(quote);
        }
    }

    return (
        <div className='container'>
            <h4>Add a new Quote</h4>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="authorname" className="form-label">Author Name</label>
                    <input type="text" className="form-control" id="authorname" onChange={(e) => {setAuthor(e.target.value); }}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="quotetags" className="form-label">Tags (enter with comma)</label>
                    <input type="text" className="form-control" id="quotetags" onChange={(e) => {setTags(e.target.value.split(',')); }}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="quoteText" className="form-label">Quote</label>
                    <input type="text" className="form-control" id="quoteText" onChange={(e) => {setQuoteText(e.target.value); }}/>
                </div>
                <button type="submit" className="btn btn-success btn-sm">Submit</button>
            </form>
        </div>
    )
}
