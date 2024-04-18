import './App.css';
import Nav from './Components/Nav';
import Body from './Components/Body';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios({
      url: process.env.REACT_APP_GETALLQUOTES,
      method: "GET"
    }).then((res) => { setQuotes(res.data); }).catch((err) => { console.log(err) })
  }, []);

  async function addQuote(quote) {
    axios({
      url: process.env.REACT_APP_ADDQUOTE,
      method: "POST",
      headers:{
        'Content-Type': "application/json"
      },
      data: JSON.stringify(quote)
    }).then((res) => { setQuotes(res.data); }).catch((err) => { console.log(err) })
  }

  return (
    <>
      <Nav />
      <Body quotes={quotes} addQuote={addQuote} />
    </>
  );
}

export default App;
