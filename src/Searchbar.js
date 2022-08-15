import React from 'react'
import './Searchbar.css';
import {decorArray, themeArray, sizeArray, tagsArray} from './database'
import Tile from "./Tile.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

var _ = require('lodash');
let numResults = decorArray.length;
let results;

const findElement = (searchKey, array) => {
  let key = searchKey;

  for(let x = 0; x < array.length; x++)
  {
    if(array[x].name.toLowerCase() === key.toString().toLowerCase())
    {
      return x;
    }
  }
  return -1;
}

const updateResults = () =>
{    
  let gridItems = document.querySelector('.decorGrid').getElementsByClassName('decorTile');

  results = [];

  for(let x = 0; x < gridItems.length; x++)
  {
    if(gridItems[x].style.display !== "none")
    {
      
      let index = findElement(gridItems[x].querySelector('.decorName').textContent, decorArray);
      
      results.push(decorArray[index]);
    }
  }
}

class Searchbar extends React.Component
{
  constructor(props) 
  {
    super(props);
    this.state = {
      stateArr: _.cloneDeep(decorArray).reverse()
    };
    this.pointFilter = this.pointFilter.bind(this);
    this.resetTiles = this.resetTiles.bind(this);
  }

  pointFilter()
  {
    let checkBox = document.getElementById('pointFilter');

    if(checkBox.checked)
    {
      let form = document.querySelector('.searchBar');
      form.reset();
      this.resetTiles(1);
      document.getElementById("pointFilter").checked = true;

      let {stateArr} = this.state;      

      stateArr.sort((a,b) => {
        return a.points < b.points ? 1 : -1});

      this.setState({stateArr});
    }
    else {
      const stateArr = _.cloneDeep(decorArray).reverse();
      // const stateArr = _.cloneDeep(results);

      this.setState({stateArr}); 
    }    
  };

  resetTiles = (param = null) => {
    let grid = document.querySelector('.decorGrid');
    let gridItems = grid.getElementsByClassName('decorTile');

    // if(param === null)
    // {
    //   document.getElementById("pointFilter").checked = false;

    //   this.pointFilter();
    // }

    for (let i = 0; i < gridItems.length; i++) {
      gridItems[i].style.display = "";
    }
    const result = document.querySelector('.resultNum');
    result.textContent = ("Results: " + decorArray.length);
  }

  render()
  {
    return (
      <div className="mainContent">
        <header >
          <form className="searchBar">
            <div className="searchBarFilters">
              <div className="headerLeft">
                <img className="crkLogo" src={process.env.PUBLIC_URL + "/logo.png"} alt="CRK logo"></img>
                <a className="discordIcon" href="https://discordapp.com/users/474649200622043138" rel="noopener noreferrer" target="_blank" title="Contact me on Discord!"><FontAwesomeIcon icon={faDiscord} /></a>
              </div>    
              <div className="headerRight">
                {/*input menu for decor string*/}
                <input className="searchText" type="text" id="searchBarId" placeholder="Search through decors..." onKeyDown={checkName} onKeyUp={checkName}></input> 
                  
                {/*select menu for themes*/}
                <select name="themes" id="themeList" onChange={searchFunc}>
                  <option value="select">Filter using theme...</option>
                  {themeArray.sort().map((decor, index) => (
                    <option value={decor.toLowerCase()} key={index}>{decor}</option>
                  ))}
                </select>

                {/*select menu for sizes*/}
                <select name="sizes" id="sizeList" onChange={searchFunc}>
                  <option value="select">Filter using size...</option>
                  {sizeArray.sort(function(a, b) {
                    return a - b;
                  }).map((decor, index) => (
                    <option value={decor.toLowerCase()} key={index}>{decor}</option>
                  ))}
                </select>

                {/* select menu for tags */}
                <select name="tags" id="tagList" onChange={searchFunc}>
                  <option value="select">Filter using tags...</option>
                  {tagsArray.sort().map((tag, index) => (
                    <option value={tag.toLowerCase()} key={index}>{tag}</option>
                  ))}
                </select>

                { /*filter by largest decor points*/}
                {/* <div className="pointsFilter">
                  <input type="checkbox" id="pointFilter" name="pointFilter" onChange={()=>this.pointFilter()}></input>
                  <label htmlFor="pointFilter" className="pointText">Filter All By Descending Decor Points</label>
                </div>         */}

                {/*reset for filters*/}
                <input type="reset" value="Clear Filters" onClick={()=>this.resetTiles()}></input>
              </div>
            </div>
            <div className="resultNum">Results: {numResults}</div>
          </form>
        </header>
        <TilesGrid className="gridClass" array={this.state.stateArr}/>
      </div>
    )
  }
}

// ()=>this.pointFilter()

function searchFunc() {
    let input = document.getElementById('searchBarId');
    let searchKey = input.value.toUpperCase();
    let grid = document.querySelector('.decorGrid');
    let gridItems = grid.getElementsByClassName('decorTile');
    let gridElem;

    // let checkBox = document.getElementById('pointFilter');

    // if(checkBox.checked)
    // {
    //   console.log("Checked!");
    // }
  
    numResults = 0;
  
    let checker = arr => arr.every(Boolean);
    let bools = [true, true, true, true];
  
    for(let i = 0; i < gridItems.length; i++)
    {
      let noteValue = gridItems[i].querySelector('.noteContent');
      let noteText = "";

      if(searchKey)
      {
        gridElem = gridItems[i].querySelector('.decorName');
        let txtValue = gridElem.textContent || gridElem.innerText;
        
        if(noteValue)
        {
          noteText = noteValue.textContent;
        }
        
        if (txtValue.replace(/\s/g, "").toUpperCase().indexOf(searchKey.replace(/\s/g, "").toUpperCase()) > -1) {
          bools[0] = true;
        } 
        else if(noteText !== "" && (noteText.replace(/\s/g, "").toUpperCase().indexOf(searchKey.replace(/\s/g, "").toUpperCase()) > -1))
        {
          bools[0] = true;
        }
        else {
          bools[0] = false;
        }      
      }
      let val = document.querySelector('#tagList').value;
      if(val !== "select")
      {
        gridElem = gridItems[i].querySelector('.tagClass');
        let txtValue = gridElem.textContent || gridElem.innerText;
        
        let childrenElem = gridElem.children;
  
        let childrenArr = [];
        for(let x = 0; x < childrenElem.length; x++)
        {
          childrenArr = childrenArr.concat(Array.from(childrenElem[x].firstChild.classList));
        }
        
        if (txtValue.toLowerCase().indexOf(val) > -1 || val === "select") {
          bools[3] = true;
        } 
        else if(val === 'landmark' && childrenArr.indexOf('landmarkLogo') !== -1)
        {
          bools[3] = true;
        }
        else if(val === 'water' && childrenArr.indexOf('waterLogo') !== -1)
        {
          bools[3] = true;
        }
        else if(val === 'cookie decor' && childrenArr.indexOf('cdLogo') !== -1)
        {
          bools[3] = true;
        }
        else if(val === 'cookie interaction' && childrenArr.indexOf('ciLogo') !== -1)
        {
          bools[3] = true;
        }
        else if(val === 'disney crystals' && childrenArr.indexOf('epLogo') !== -1)
        {
          bools[3] = true;
        }
        else {
          bools[3] = false;
        }
      }
      val = document.querySelector('#themeList').value;
      if(val !== 'select')
      {
        gridElem = gridItems[i].querySelector('.decorTheme');
        let txtValue = gridElem.textContent || gridElem.innerText;
        if (txtValue.toLowerCase().indexOf(val) > -1 || val === "select") {
          bools[1] = true;
        } else {
          bools[1] = false;
        }
      }
      val = document.querySelector('#sizeList').value;
      if(val !== 'select')
      {
        gridElem = gridItems[i].querySelector('.decorSize');
        let txtValue = gridElem.textContent || gridElem.innerText;
        if (txtValue.toLowerCase().indexOf(val) > -1 || val === "select") {
          bools[2] = true;
        } else {
          bools[2] = false;
        }
      }
  
      if(checker(bools))
      {
        numResults = numResults + 1;
        
        gridItems[i].style.display = "";
      }
      else {
        gridItems[i].style.display = "none";
      }
      bools = [true, true, true, true];
    }
    updateResults();
    
    const result = document.querySelector('.resultNum');
    result.textContent = ("Results: " + numResults); 
};

// const resetTiles = () => {
//   let input = document.getElementById('searchBarId');
//   let searchKey = input.value.toUpperCase();
//   let grid = document.querySelector('.decorGrid');
//   let gridItems = grid.getElementsByClassName('decorTile');

//   for (let i = 0; i < gridItems.length; i++) {
//     gridItems[i].style.display = "";
//   }
//   const result = document.querySelector('.resultNum');
//   result.textContent = ("Results: " + decorArray.length); 
// }

function checkName(event) {
if(event.keyCode === 13)
{
    event.preventDefault();
}

let elem = document.getElementById('tagList');
let value = elem.value;
if(value !== 'select')
{
    searchFunc(value, 4);
}
else {
    searchFunc();
}
}

const TilesGrid = (props) => {
    let initialArr = props.array.map((decor, index) => {
      return <Tile key={index} decor={decor} />
    });
  
    // let temp = [...decorArray].reverse(); // last working version; pre-points filter
  
    return (
      <div className="decorGrid">
        {initialArr}
      </div>
    )
} 

export default Searchbar