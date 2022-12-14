import React from 'react'
import "./Tile.css"

const TileInfo = (props) => {
  let decor = props.decor;
  let colors = decor.color.join(' ');

  if(decor.theme === "World of Magic & Dreams")
  {
    return (
      <div className="tileInfo disneyInfo">
        <div className="decorTheme">Theme: {decor.theme}</div>
        <div className="decorSize"><img className="tagLogo" src={process.env.PUBLIC_URL + "/size.png"} alt="Size logo"></img> {decor.size}</div>
        <div className="decorPoints"><img className="tagLogo" src={process.env.PUBLIC_URL + "/points.png"} alt="Point logo"></img> {decor.points}</div>
        <Tag tag={decor.tags}/>
        <Note note={decor.note}/>
        <div id="decorColor" className={`${decor.color}`}></div>
      </div>
    )
  }
  else if(decor.theme === "The Tales of Bangtan Kingdom" || decor.theme === "The Happy Kingdom Life of BTS" || decor.theme === "We are Purple, We are Together!")
  {
    return (
      <div className="tileInfo btsInfo">
        <div className="decorTheme">Theme: {decor.theme}</div>
        <div className="decorSize"><img className="tagLogo" src={process.env.PUBLIC_URL + "/size.png"} alt="Size logo"></img> {decor.size}</div>
        <div className="decorPoints"><img className="tagLogo" src={process.env.PUBLIC_URL + "/points.png"} alt="Point logo"></img> {decor.points}</div>
        <Tag tag={decor.tags}/>
        <Note note={decor.note}/>
        <div id="decorColor" className={`${decor.color}`}></div>
      </div>
    )
  }
  else {
    return (
      <div className="tileInfo regularInfo">
        <div className="decorTheme">Theme: {decor.theme}</div>
        <div className="decorSize"><img className="tagLogo" src={process.env.PUBLIC_URL + "/size.png"} alt="Size logo"></img> {decor.size}</div>
        <div className="decorPoints"><img className="tagLogo" src={process.env.PUBLIC_URL + "/points.png"} alt="Point logo"></img> {decor.points}</div>
        <Tag tag={decor.tags}/>
        <Note note={decor.note}/>
        <div id="decorColor" className={colors}></div>
      </div>
    )
  }
}

const Tile = props => { 
    return (
      <div className="decorTile">
        <div className="decorName">{props.decor.name}</div>
        <RenderTop theme={props.decor.theme}/>
        <div className="flexTile">
          <div className="imageContainer">
            <TileImage theme={props.decor.theme}/>
            <DecorImage decor={props.decor}/>
          </div>
          
          <TileInfo decor={props.decor}/>
        </div>
        <RenderBottom theme={props.decor.theme}/>
      </div>
    )
};

const TileImage = (props) => {
  let theme = props.theme;
  
  if(theme === 'World of Magic & Dreams')
  {
    return (
      <div className="tileImage disneyTile">
      </div>
    )
  }
  else if(theme === "The Tales of Bangtan Kingdom" || theme === "The Happy Kingdom Life of BTS" || theme === "We are Purple, We are Together!")
  {
    return (
      <div className="tileImage btsTile">
      </div>
    )
  }
  else{
    return (
      <div className="tileImage regularTile">
      </div>
    )
  }
  
}

function RenderTop(props) {
    let theme = props.theme;
  
    if(theme === "World of Magic & Dreams")
    {
      return <img className="borderImg" src={process.env.PUBLIC_URL + "/disneyTop.png"} alt="Border Top"></img> 
    }
    else if(theme === "The Tales of Bangtan Kingdom" || theme === "The Happy Kingdom Life of BTS" || theme === "We are Purple, We are Together!")
    {
      return <img className="borderImg" src={process.env.PUBLIC_URL + "/btsTop.png"} alt="Border Top"></img>
    }
    else
    {
      return <img className="borderImg" src={process.env.PUBLIC_URL + "/borderTop.png"} alt="Border Top"></img>
    }
}
  
function RenderBottom(props) {
    let theme = props.theme;
  
    if(theme === "World of Magic & Dreams")
    {
      return <img className="borderImg" src={process.env.PUBLIC_URL + "/disneyBottom.png"} alt="Border Bottom"></img> 
    }
    else if(theme === "The Tales of Bangtan Kingdom" || theme === "The Happy Kingdom Life of BTS" || theme === "We are Purple, We are Together!")
    {
      return <img className="borderImg" src={process.env.PUBLIC_URL + "/btsBottom.png"} alt="Border Bottom"></img>
    }
    else
    {
      return <img className="borderImg" src={process.env.PUBLIC_URL + "/borderBottom.png"} alt="Border Bottom"></img>
    }
}

const DecorImage = (props) => {
    let size = props.decor.size;
  
    if(size === "16x16")
    {
      return (
        <div>
          <img alt="16x16" className="decorImage image16" src={process.env.PUBLIC_URL + props.decor.url}></img>
        </div>
      )
    }
    else if(size === "12x12")
    {
      return (
        <div>
          <img alt="12x12" className="decorImage image12" src={process.env.PUBLIC_URL + props.decor.url}></img>
        </div>
      )
    }
    else if(size === "8x8")
    {
      return (
        <div>
          <img alt="8x8" className="decorImage image8" src={process.env.PUBLIC_URL + props.decor.url}></img>
        </div>
      )
    }
    else if(size === "6x6")
    {
      return (
        <div>
          <img alt="6x6" className="decorImage image6" src={process.env.PUBLIC_URL + props.decor.url}></img>
        </div>
      )
    }
    else if(size === "4x4")
    {
      return (
        <div>
          <img alt="4x4" className="decorImage image4" src={process.env.PUBLIC_URL + props.decor.url}></img>
        </div>
      )
    }
    else if(size === "3x3")
    {
      return (
        <div>
          <img alt="3x3" className="decorImage image3" src={process.env.PUBLIC_URL + props.decor.url}></img>
        </div>
      )
    }
    else if(size === "2x2")
    {
      return (
        <div>
          <img  alt="2x2" className="decorImage image2" src={process.env.PUBLIC_URL + props.decor.url}></img>
        </div>
      )
    }
}

const Tag = props => {
    return (
      <div className="tagClass">
        {
          props.tag.map((elem, index) => (
            <TagShape key={index} tagElem={elem} tagArray={props.tag}/>
          ))
        }
      </div>    
    )
}

const TagShape = props => {
    return (
        <TagIcon iconDisplay={props.tagElem} tagArray={props.tagArray}/>
    )
}

function TagIcon(props) {
    let icon = props.iconDisplay;
    let array = props.tagArray;
    if(icon.toLowerCase() === 'landmark' && array.indexOf(icon) !== -1)
    {
      return <div className="decorTag"><img className="tagLogo landmarkLogo" src={process.env.PUBLIC_URL + "/landmark.png"} alt="Landmark logo"></img></div> 
    }
    else if(icon.toLowerCase() === 'water' && array.indexOf(icon) !== -1)
    {
      return <div className="decorTag"><img className="tagLogo waterLogo" src={process.env.PUBLIC_URL + "/water.png"} alt="Water logo"></img></div>
    }
    else if(icon.toLowerCase() === 'cookie decor' && array.indexOf(icon) !== -1)
    {
      return <div className="decorTag"><img className="tagLogo cdLogo" src={process.env.PUBLIC_URL + "/cookieDecor.png"} alt="Cookie Decor logo"></img></div>
    }
    else if(icon.toLowerCase() === 'cookie interaction' && array.indexOf(icon) !== -1)
    {
      return <div className="decorTag"><img className="tagLogo ciLogo" src={process.env.PUBLIC_URL + "/cookieInteraction.png"} alt="Cookie Interaction logo"></img></div>
    }
    else if(icon.toLowerCase() === 'disney crystals' && array.indexOf(icon) !== -1)
    {
      return <div className="decorTag"><img className="tagLogo dcLogo" src={process.env.PUBLIC_URL + "/disney.png"} alt="Event Production logo"></img></div>
    }
    else if(icon.toLowerCase() === 'army bombs' && array.indexOf(icon) !== -1)
    {
      return <div className="decorTag"><img className="tagLogo abLogo" src={process.env.PUBLIC_URL + "/bts.png"} alt="Event Production logo"></img></div>
    }
    else {
      return <div className="decorTag"><div className="tagText">{icon}</div></div>
    }
}
    
const Note = (props) => {
    if(props.note !== "")
    {
        return (
        <div className="noteClass">
            <div className="noteText">Note:&nbsp;</div>
            <div className="noteContent">{props.note}</div>
        </div>
        )
    }  
}

export default Tile