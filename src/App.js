import './App.css';
import React from 'react';

const App = () => {
  return (
    <div>
      <SearchBar />
      <TilesGrid />
    </div>
  )
};

const SearchBar = () => {
  function searchFunc() {
    let input = document.getElementById('searchBarId');
    let searchKey = input.value.toUpperCase();
    console.log(searchKey);
    let grid = document.querySelector('.decorGrid');
    console.log(grid);
    let gridItems = grid.getElementsByClassName('decorTile');
    console.log(gridItems);
    let gridElem;
  
    for (let i = 0; i < gridItems.length; i++) {
      gridElem = gridItems[i].querySelector('.decorName');
      console.log(gridElem);
      
      let txtValue = gridElem.textContent || gridElem.innerText;
      if (txtValue.toUpperCase().indexOf(searchKey) > -1) {
        gridItems[i].style.display = "";
      } else {
        gridItems[i].style.display = "none";
      }
    }  
  };

  return (
    <header className="searchBar">
        <input type="text" id="searchBarId" placeholder="Search for decor..." name="search" onKeyDown={searchFunc} onKeyUp={searchFunc}></input>     
    </header>
  )
}  

const TilesGrid = () => {
  return (
    <div className="decorGrid">
      {decorArray.map((decor, index) => (
        <Tile key={index} decor={decor} />
      ))}
    </div>
  )
}

const Tile = props => {
  return (
    <div className="decorTile">
      <div className="decorName">{props.decor.name}</div>
    </div>
  )
};

const decorArray = [
  {
    name: "Dreaming Jelly Lion Statue",
    theme: "Sculpture Park",
    size: "16x16",
    points: 290,
    tags: ["landmark"]
  },
  {
    name: "Heroic Founder's Statue",
    theme: "Kingdom of the Unwavering",
    size: "4x4",
    points: 30,
    tags: ["statue"]
  }
]

export default App;
