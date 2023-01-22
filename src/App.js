import React from 'react';
import './App.css';
import Footer from "./Footer.js"
import Searchbar from "./Searchbar.js"
import {page, pageElems, numResults} from './Searchbar.js'

const App = () => {
  return (
    <div className="pageContent">
      <Searchbar />
      <Footer />
      <input type="image" alt="left navigation" className="arrow arrowLeft" src={process.env.PUBLIC_URL + "/arrow.png"}></input>
      <input type="image" alt="right navigation" className="arrow arrowRight" src={process.env.PUBLIC_URL + "/arrow.png"}></input>
      <div className="pageBot">Page: {page} of {(Math.ceil(numResults / pageElems) <= 1) ? 1 : Math.ceil(numResults / pageElems)}</div>
      <img alt="page info" className="pageImg" src={process.env.PUBLIC_URL + "/page.png"}></img>
    </div>
  )
};

export default App;
