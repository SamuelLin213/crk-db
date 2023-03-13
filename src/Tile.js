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
        <div className="decorSize"><img className="tagLogo" src={"https://cdn.jsdelivr.net/gh/SamuelLin213/crk_db_assets@main/size.png"} alt="Size logo"></img> {decor.size}</div>
        <div className="decorPoints"><img className="tagLogo" src={"https://cdn.jsdelivr.net/gh/SamuelLin213/crk_db_assets@main/points.png"} alt="Point logo"></img> {decor.points}</div>
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
        <div className="decorSize"><img className="tagLogo" src={"https://cdn.jsdelivr.net/gh/SamuelLin213/crk_db_assets@main/size.png"} alt="Size logo"></img> {decor.size}</div>
        <div className="decorPoints"><img className="tagLogo" src={"https://cdn.jsdelivr.net/gh/SamuelLin213/crk_db_assets@main/points.png"} alt="Point logo"></img> {decor.points}</div>
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
        <div className="decorSize"><img className="tagLogo" src={"https://cdn.jsdelivr.net/gh/SamuelLin213/crk_db_assets@main/size.png"} alt="Size logo"></img> {decor.size}</div>
        <div className="decorPoints"><img className="tagLogo" src={"https://cdn.jsdelivr.net/gh/SamuelLin213/crk_db_assets@main/points.png"} alt="Point logo"></img> {decor.points}</div>
        <Tag tag={decor.tags}/>
        <Note note={decor.note}/>
        <div id="decorColor" className={colors}></div>
      </div>
    )
  }
}

class Tile extends React.Component
{
  // componentDidMount()
  // {
  //   let tempName = this.props.decor.name;
  //   if(tempName.length > 35)
  //   {
  //     document.querySelector(".decorName").classList.add(".smallText");
  //   }
  // }
  render() {
    return (
      <div className="decorTile">
        <div className="decorName">{this.props.decor.name}</div>
        <RenderTop theme={this.props.decor.theme}/>
        <div className="flexTile">
          <div className="imageContainer">
            <TileImage theme={this.props.decor.theme}/>
            <DecorImage decor={this.props.decor}/>
          </div>

          <TileInfo decor={this.props.decor}/>
        </div>
        <RenderBottom theme={this.props.decor.theme}/>
      </div>
    )
  }
}

// const Tile = props => {
//     let tempName = props.decor.name;
//     if(tempName.length > 35)
//     {
//       document.querySelector(".decorName").classList.add(".smallText");
//     }
//
//     return (
//       <div className="decorTile">
//         <div className="decorName">{props.decor.name}</div>
//         <RenderTop theme={props.decor.theme}/>
//         <div className="flexTile">
//           <div className="imageContainer">
//             <TileImage theme={props.decor.theme}/>
//             <DecorImage decor={props.decor}/>
//           </div>
//
//           <TileInfo decor={props.decor}/>
//         </div>
//         <RenderBottom theme={props.decor.theme}/>
//       </div>
//     )
// };

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
      return <img className="borderImg" src={"https://cdn.jsdelivr.net/gh/SamuelLin213/crk_db_assets@main/disneyTop.png"} alt="Border Top"></img>
    }
    else if(theme === "The Tales of Bangtan Kingdom" || theme === "The Happy Kingdom Life of BTS" || theme === "We are Purple, We are Together!")
    {
      return <img className="borderImg" src={"https://cdn.jsdelivr.net/gh/SamuelLin213/crk_db_assets@main/btsTop.png"} alt="Border Top"></img>
    }
    else
    {
      return <img className="borderImg" src={"https://cdn.jsdelivr.net/gh/SamuelLin213/crk_db_assets@main/borderTop.png"} alt="Border Top"></img>
    }
}

function RenderBottom(props) {
    let theme = props.theme;

    if(theme === "World of Magic & Dreams")
    {
      return <img className="borderImg" src={"https://cdn.jsdelivr.net/gh/SamuelLin213/crk_db_assets@main/disneyBottom.png"} alt="Border Bottom"></img>
    }
    else if(theme === "The Tales of Bangtan Kingdom" || theme === "The Happy Kingdom Life of BTS" || theme === "We are Purple, We are Together!")
    {
      return <img className="borderImg" src={"https://cdn.jsdelivr.net/gh/SamuelLin213/crk_db_assets@main/btsBottom.png"} alt="Border Bottom"></img>
    }
    else
    {
      return <img className="borderImg" src={"https://cdn.jsdelivr.net/gh/SamuelLin213/crk_db_assets@main/borderBottom.png"} alt="Border Bottom"></img>
    }
}

const DecorImage = (props) => {
    let size = props.decor.size;
    //src={process.env.PUBLIC_URL + props.decor.url}
    if(size === "16x16")
    {
      return (
        <div>
          <img loading="lazy" alt="16x16" className="decorImage image16" src={props.decor.url}></img>
        </div>
      )
    }
    else if(size === "12x12")
    {
      return (
        <div>
          <img loading="lazy" alt="12x12" className="decorImage image12" src={props.decor.url}></img>
        </div>
      )
    }
    else if(size === "8x8")
    {
      return (
        <div>
          <img loading="lazy" alt="8x8" className="decorImage image8" src={props.decor.url}></img>
        </div>
      )
    }
    else if(size === "6x6")
    {
      return (
        <div>
          <img loading="lazy" alt="6x6" className="decorImage image6" src={props.decor.url}></img>
        </div>
      )
    }
    else if(size === "4x4")
    {
      return (
        <div>
          <img loading="lazy" alt="4x4" className="decorImage image4" src={props.decor.url}></img>
        </div>
      )
    }
    else if(size === "3x3")
    {
      return (
        <div>
          <img loading="lazy" alt="3x3" className="decorImage image3" src={props.decor.url}></img>
        </div>
      )
    }
    else if(size === "2x2")
    {
      return (
        <div>
          <img  loading="lazy" alt="2x2" className="decorImage image2" src={props.decor.url}></img>
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
      return <div className="decorTag"><img className="tagLogo landmarkLogo" src={"https://cdn.jsdelivr.net/gh/SamuelLin213/crk_db_assets@main/landmark.png"} alt="Landmark logo"></img></div>
    }
    else if(icon.toLowerCase() === 'water' && array.indexOf(icon) !== -1)
    {
      return <div className="decorTag"><img className="tagLogo waterLogo" src={"https://cdn.jsdelivr.net/gh/SamuelLin213/crk_db_assets@main/water.png"} alt="Water logo"></img></div>
    }
    else if(icon.toLowerCase() === 'cookie decor' && array.indexOf(icon) !== -1)
    {
      return <div className="decorTag"><img className="tagLogo cdLogo" src={"https://cdn.jsdelivr.net/gh/SamuelLin213/crk_db_assets@main/cookieDecor.png"} alt="Cookie Decor logo"></img></div>
    }
    else if(icon.toLowerCase() === 'cookie interaction' && array.indexOf(icon) !== -1)
    {
      return <div className="decorTag"><img className="tagLogo ciLogo" src={"https://cdn.jsdelivr.net/gh/SamuelLin213/crk_db_assets@main/cookieInteraction.png"} alt="Cookie Interaction logo"></img></div>
    }
    else if(icon.toLowerCase() === 'disney crystals' && array.indexOf(icon) !== -1)
    {
      return <div className="decorTag"><img className="tagLogo dcLogo" src={"https://cdn.jsdelivr.net/gh/SamuelLin213/crk_db_assets@main/disney.png"} alt="Event Production logo"></img></div>
    }
    else if(icon.toLowerCase() === 'army bombs' && array.indexOf(icon) !== -1)
    {
      return <div className="decorTag"><img className="tagLogo abLogo" src={"https://cdn.jsdelivr.net/gh/SamuelLin213/crk_db_assets@main/bts.png"} alt="Event Production logo"></img></div>
    }
    else if(icon.toLowerCase() === 'floating' && array.indexOf(icon) !== -1)
    {
      return <div className="decorTag"><img className="tagLogo floatLogo" src={"https://cdn.jsdelivr.net/gh/SamuelLin213/crk_db_assets@main/float.png"} alt="Floating logo"></img></div>
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
