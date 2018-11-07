import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import {resizeData as resizeData} from './resizeData.js'
import './index.sass'

export class App extends React.Component {
  constructor() {
    super()

    this.state = {
      selectedIndex : 0,
      width: undefined,
      height: undefined, 
    }

    this.numOptions = 7; 

    this.handleChange = this.handleChange.bind(this)
    this.updateDimensions = this.updateDimensions.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.updateDimensions();
    let self = this; 

    $(window).resize(this.updateDimensions)
  }


  updateDimensions() {
    let width = $(window).width();
    let height = $(window).height();

    $(".resolution").text(`width: ${width}, height: ${height}`)

    this.setState({
      width : width,
      height: height,
    })
  }

  handleChange(e) {
    this.setState({"selectedIndex": e.currentTarget.value})
  }

  handleClick() {
    // if(this.state.selectedIndex == this.numOptions) {
    //   this.setState({selectedIndex: 0})
    // } else {
    //   this.setState((prevState, props) => { return {"selectedIndex": parseInt(prevState.selectedIndex) + 1}})
    // }
  }

  render() {
    let width = this.state.width;
    let height = this.state.height;
    
    let eventIndex = this.state.selectedIndex; 
    let eventData = resizeData[eventIndex]; 

    let boxStyle = eventData.style; 
    let resizeStyle = eventData.resizeFn(width, height); 
    Object.assign(resizeStyle, boxStyle);

    let boxContent = eventData.content; 

    return (
      <div className="container" onClick={this.handleClick}>
        <span className="legend">
          test number
          {/* <select className="select" value={this.state.selectedIndex} onChange={this.handleChange}>
            {new Array(8).fill(undefined).map((e,i) => {
              return (<option value={i} key={i}>{i}</option>)
            })}
          </select> */}
          <span className="resolution"></span>
        </span>
       
        {/* <div className="box2 boxbase"></div> */}
        <div className="box boxbase" style={resizeStyle}>{boxContent}</div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);