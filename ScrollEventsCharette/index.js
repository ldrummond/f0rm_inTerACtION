import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import $ from 'jquery'
import {experimentEvents1 as experimentEvents1} from './experimentEvents1'
import {experimentEvents2 as experimentEvents2} from './experimentEvents2'
import {charetteEvents as charetteEvents} from './charetteEvents'
// var s = skrollr.init(); 
require(['skrollr'], function(skrollr){
	var s = skrollr.init();
});

export class App extends React.Component {
  constructor() {
    super()
    this.scrollWindows = []; 
    this.isExperiment = true; 
  }

  componentDidMount() {
    // $('html, body, window, .siteInner, .siteWrapper').animate({
      // scrollTop: $('document').height()
    // });
    $('body').css({"height": 0})


    setTimeout(e => {
      $('.siteWrapper').css({display: "block"}); 
    }, 500)

    if(this.isExperiment) {
      $('.scrollWindowWrapper').addClass('small');
      $('.scrollWindowInner').addClass('small');
    } else {
      $('.scrollWindowInner').addClass('big');
    }
  }

  renderExperiment() {
    let affectedElems = 50; 
    let speed = 100; 

    let scrollEvents = experimentEvents2;
    scrollEvents.map((eventObject, index) => {
      // For each scroll event
      if(eventObject.content) { // Get Content
        let eventContent = eventObject.content;
      }

      if(eventObject.styles) { // Get Keyframes

        eventObject.styles = [{
          "background-color":"rgb(0, 0, 0)"
        },
        {
          "background-color":"rgb(255, 255, 255)"
        },
        {
          "background-color":"rgb(0, 0, 0)"
        },
        {
          "background-color":"rgb(255, 255, 255)"
        },
        {
          "background-color":"rgb(0, 0, 0)"
        }]

        // eventObject.styles = [
        //   {
        //     "border-bottom":"0px solid black",
        //     "transform":"rotate(0deg)",
        //   },
        //   {
        //     "border-bottom":"100px solid black",
        //     "transform":"rotate(90deg)",
        //   },
        // ] 

        let styleKeyframes = eventObject.styles;
        let scrollRangeLower = index * speed; 
        let scrollRangeUpper = (index + affectedElems) * speed; 
        let skrollrAttrs = {}
        let eventContent = eventObject.content; 
        let scrollRangeIncrement = (scrollRangeUpper - scrollRangeLower) / (styleKeyframes.length - 1) 
        
        // For each styleKeyframe within the event
        styleKeyframes.map((keyframe, index) => {
          // For each CssStyle of that keyframe, concatenate and assign to the attribute.
          let keyframeCss = ""
          for(let key in keyframe) {
            keyframeCss = `${keyframeCss} ${key}:${keyframe[key]};`
          }
          skrollrAttrs[`data-${scrollRangeLower + (scrollRangeIncrement * index)}`] = keyframeCss; 
        })

        this.scrollWindows.push(
          <div className="scrollWindowWrapper" key={index}>
            <span className="scrollWindowInner" {...skrollrAttrs}>
                {eventContent}
            </span>
          </div>
        )
      }
    })

    return(
      <div className="siteWrapper" style={{"display": "none"}}>
        <span className="siteInner">
          {this.scrollWindows}
        </span>
      </div>
    )
  }

  renderCharette() {
    let scrollEvents = charetteEvents;
    scrollEvents.map((eventObject, index) => {
      // For each scroll event
      if(eventObject.content) { // Get Content
        let eventContent = eventObject.content;
      }

      if(eventObject.styles) { // Get Keyframes
        let styleKeyframes = eventObject.styles;
        let scrollRangeLower = index * 700; 
        let scrollRangeUpper = (index + 1) * 700; 
        let skrollrAttrs = {}
        let eventContent = eventObject.content; 
        let scrollRangeIncrement = (scrollRangeUpper - scrollRangeLower) / (styleKeyframes.length - 1) 
        
        // For each styleKeyframe within the event
        styleKeyframes.map((keyframe, index) => {
          // For each CssStyle of that keyframe, concatenate and assign to the attribute.
          let keyframeCss = ""
          for(let key in keyframe) {
            keyframeCss = `${keyframeCss} ${key}:${keyframe[key]};`
          }
          skrollrAttrs[`data-${scrollRangeLower + (scrollRangeIncrement * index)}`] = keyframeCss; 
        })

        this.scrollWindows.push(
          // <div className="scrollWindowWrapper" key={index}>
            <span className="scrollWindowInner" {...skrollrAttrs}>
                {eventContent}
            </span>
          // </div>
        )
      }
    })

    return(
      <div className="siteWrapper" style={{"display": "none"}}>
        <span className="siteInner">
          {this.scrollWindows}
        </span>
      </div>
    )
  }

  render() {
    if(this.isExperiment){
      return this.renderExperiment(); 
    } else {
      return this.renderCharette();     
    }
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);