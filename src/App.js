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
      <input type="image" alt="left navigation" className="arrow arrowLeft" src={"https://cdn.jsdelivr.net/gh/SamuelLin213/crk_db_assets@main/arrow.png"}></input>
      <input type="image" alt="right navigation" className="arrow arrowRight" src={"https://cdn.jsdelivr.net/gh/SamuelLin213/crk_db_assets@main/arrow.png"}></input>
      <div className="pageBot">Page: {page} of {(Math.ceil(numResults / pageElems) <= 1) ? 1 : Math.ceil(numResults / pageElems)}</div>
      <img alt="page info" className="pageImg" src={"https://cdn.jsdelivr.net/gh/SamuelLin213/crk_db_assets@main/page.png"}></img>
    </div>
  )
};

export default App;
