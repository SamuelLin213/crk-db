import React from 'react'
import './Footer.css';
import {decorArray} from './database'

const Footer = () => {
    if(decorArray.length % 4 === 0)
    {
      return (
        <footer className="footerLess">
          <p>Made with love by a proud Highlander &#x1F43B;&#x2764;</p>
          <p>Decor image credits to CRK wiki!</p>
        </footer>
      )
    }
    else {
      return (
        <footer className="footerMore">
          <p>Made with love by a proud Highlander &#x1F43B;&#x2764;</p>
          <p>Decor image credits to CRK wiki!</p>
        </footer>
      )
    }  
  }

export default Footer