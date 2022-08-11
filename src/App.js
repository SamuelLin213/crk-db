import './App.css';
import React, { useEffect, useState } from "react";
import {decorArray, themeArray, sizeArray, tagsArray} from './database'
import { render } from '@testing-library/react';
import Footer from "./Footer.js"
import Searchbar from "./Searchbar.js"

const App = () => {
  return (
    <div className="pageContent">
      <Searchbar />  
      <Footer />    
    </div>
  )
};

export default App;
