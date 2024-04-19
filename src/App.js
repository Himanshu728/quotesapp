import './App.css';
import Nav from './Components/Nav';
import Body from './Components/Body';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(async () => {
    console.log(process.env.REACT_APP_GETALLQUOTES);

    //getting the data from the api
    let headersList = {
      "Accept": "*/*"
    }

    let reqOptions = {
      url: process.env.REACT_APP_GETALLQUOTES,
      method: "GET",
      headers: headersList,
    }

    try{
      
      let response = await axios.request(reqOptions);
      setQuotes(response.data);

    }catch(err){
      console.log(err);
    }

  }, []);

  async function addQuote(quote) {
    console.log(process.env.REACT_APP_ADDQUOTE);

    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify([quote]);

    let reqOptions = {
      url: process.env.REACT_APP_ADDQUOTE,
      method: "POST",
      headers: headersList,
      data: bodyContent,
    }

    try{
      let response = await axios.request(reqOptions);
      
      setQuotes((prevState) => {
        return [...prevState, response.data];
      });

    }catch(err){
      console.log(err);
    }
    
  }

  return (
    <>
      <Nav />
      <Body quotes={quotes} addQuote={addQuote} />
    </>
  );
}

export default App;
