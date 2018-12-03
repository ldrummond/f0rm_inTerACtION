import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import $ from 'jquery'
import {experimentEvents2 as experimentEvents2} from './experimentEvents2'
let s;
require(['skrollr'], function(skrollr){
  s = skrollr.init();
  window.skrollr = skrollr.init();
});
console.log(s);

export class App extends React.Component {
  constructor() {
    super()
    this.scrollWindows = []; 
    this.isExperiment = true; 

    this.containerWidth = 300;
    this.containerHeight = 500; 
    this.numRects = 40; 
    this.affectedElems = 40; 
    this.speed = 500; 
    // this.skrollr = skrollr.init();

    this.state = {
      speed: 500,
      affectedElems: 50,
      selectedIndex : 5
    }

    this.setupScrollEvents();
    this.onSelectionChange = this.onSelectionChange.bind(this);
    this.renderExperiment = this.renderExperiment.bind(this);
  }

  componentDidMount() {
    this.containerRef = $('.siteInner')
    this.containerWidth = $('.siteInner').width(); 
    this.containerHeight = $('.siteInner').height(); 
    // console.log(this.containerWidth, this.containerHeight);
    let rows = 10;
    let scrollWrapper = $('.scrollWindowWrapper');

    // Size elements but prioritize rows if set, columns if not. 
    if(rows) {
      let colWidth = this.containerWidth / (this.numRects / rows);
      let rowHeight = this.containerHeight / rows; 
      scrollWrapper.css({width : colWidth, height: rowHeight})
    } else {
      rows = 5; 
      let colWidth = this.containerWidth / (this.numRects / rows);
      let rowHeight = this.containerHeight / rows; 
      scrollWrapper.css({width : colWidth, height: rowHeight})
    }
    window.scrollTo(0, 0)
  }

  setupScrollEvents() {
    this.scroll0 = {
      content: "", 
      keyframes : [
        {
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
        }
      ]
    } 
  
    this.scroll1 = {
      content: "", 
      keyframes : [
        {
          "border-left":"1px solid black",
          "border-top":"0px solid black",
        },
        {
          "border-left":"150px solid black",
          "border-top":"0px solid black",
        },
        {
          "border-bottom":"0px solid black",
          "border-top":"150px solid black",
        },
        {
          "border-bottom":"150px solid black",
          "border-top":"0px solid black",
        }
      ]
    }
  
    this.scroll2 = {
      content: "", 
      keyframes : [
        {
          "border-bottom":"0px solid black",
          "transform":"rotate(0deg)",
        },
        {
          "border-bottom":"100px solid black",
          "transform":"rotate(90deg)",
        },
      ] 
    }

    this.scroll3 = {
      content: "W", 
      keyframes : [
        {
          "transform":"skew(0deg) scale(1)",
          "font-weight":"800",
          "font-size":"30px",
        },
        {
          "transform":"skew(-100deg) scale(2)",
          "font-size":"50px",
        },
      ] 
    }

    this.scroll4 = {
      content: "T", 
      keyframes : [
        {
          "transform":"rotate(-90deg) scale(1)",
          "font-family":"sans-serif",
        },
        {
          "transform":"rotate(90deg) scale(1)",
          "font-family":"fantasy",
        },
        {
          "transform":"rotate(-90deg) scale(1)",
          "font-family":"monospace",
        },
        {
          "transform":"rotate(90deg) scale(1)",
          "font-family":"serif",
        },
      ]
    }

    this.scroll5 = {
      content: (<img src="./cursor_pointe.png" style={{width: 30}}></img>), 
      keyframes : [
        {
          "transform":"rotate(-90deg) scale(1)",
          // "font-family":"sans-serif",
        },
        {
          "transform":"rotate(90deg) scale(2)",
          // "font-family":"fantasy",
        },
        {
          "transform":"rotate(-90deg) scale(1)",
          // "font-family":"monospace",
        },
        {
          "transform":"rotate(90deg) scale(1)",
          // "font-family":"serif",
        },
        {
          "transform":"rotate(90deg) scale(4)",
          // "font-family":"fantasy",
        },
        {
          "transform":"rotate(-20deg) scale(8)",
          // "font-family":"monospace",
        },
        {
          "transform":"rotate(180deg) scale(1)",
          // "font-family":"fantasy",
        },
        {
          "transform":"rotate(180deg) scale(12)",
          // "font-family":"monospace",
        },
        {
          "transform":"rotate(0deg) scale(1)",
          // "font-family":"monospace",
        },
        {
          "transform":"rotate(-80deg) scale(3)",
          // "font-family":"monospace",
        },
      ]
    }
  }
  
  onSelectionChange(e) {
    window.skrollr.setScrollTop(0);
    this.setState({selectedIndex: $(e.currentTarget).data('optindex')})
  }

  renderExperiment(experimentNumber, numRects, affectedRects, speed) {
    let allWindows = []; 
    // let scrollEvent = this[`scroll${this.state.selectedIndex}`]
    let scrollEvent = this[`scroll${experimentNumber}`]

    for(let i = 0; i < numRects; i++) {
      let rectKeyframes = scrollEvent.keyframes
      let rectContent = scrollEvent.content
      let scrollRangeLower = i * speed; 
      let scrollRangeUpper = (i + affectedRects) * speed; 
      let skrollrAttrs = {}
      let scrollRangeIncrement = (scrollRangeUpper - scrollRangeLower) / (rectKeyframes.length - 1) 

      // For each KeyFrame of the individual Elem scroll animation. 
      rectKeyframes.map((keyframe, index) => {
          // For each CssStyle of that keyframe, concatenate and assign to the attribute.
          let keyframeCss = ""
          for(let key in keyframe) {
            keyframeCss = `${keyframeCss} ${key}:${keyframe[key]};`
          }
          skrollrAttrs[`data-${scrollRangeLower + (scrollRangeIncrement * index)}`] = keyframeCss; 
        })

        allWindows.push(
          <div className={`scrollWindowWrapper`} key={i}>
            <span className="scrollWindowInner" {...skrollrAttrs}>
                {rectContent}
            </span>
          </div>
        )
    }

    return allWindows;
  }

  render() {
    // Render Experiment takes - Total Rects (int), Affected Rects (int), Speed (int), KeyFrames [{}](arr objs)
    let settings = {};
    settings.experimentNumber = 5; 
    settings.numRects = 50;
    settings.selectionRange =  300; 
    settings.speed = 400; 

    return (
      <React.Fragment>
    <div className={`siteWrapper scroll${settings.experimentNumber}`}>
        <span className={`siteInner`}>
          {this.renderExperiment(
            settings.experimentNumber,
            settings.numRects,
            settings.selectionRange, 
            settings.speed, 
          )}
        </span>
        {/* <ExperimentSelector
          selectedIndex={this.state.selectedIndex}
          onSelectionChange={this.onSelectionChange}
        ></ExperimentSelector> */}
      </div>
       {/* <div className={`siteWrapper scroll${4}`}>
        <span className={`siteInner`}>
         {this.renderExperiment(
           settings.experimentNumber,
           settings.numRects,
           settings.selectionRange, 
           settings.speed, 
         )} 
       </span>
     </div> */}
     </React.Fragment>
    )  
  }
}

// SETTING FOR CURVY LETTERS
// settings = {
//   "experimentNumber": 4,
//   "numRects": 1 + Math.random() * 30,
//   "selectionRange": 50 + Math.random() * 50,
//   "speed": Math.random() * 300,
// }

// export class ExperimentSelector extends React.Component {
//   constructor() {
//     super()
//   }

//   render() {
//     let options = []
//     for(let i = 0; i < 5; i++) {
//       let classes = "option"
//       if(i == this.props.selectedIndex) {
//         classes += " selected"; 
//       }
//       options.push(
//         <span className={classes} data-optindex={i} key={"option" + i} onClick={e => this.props.onSelectionChange(e)}></span>
//       )
//     }

//     return (
//       <span className="selector">
//         {options}
//       </span>
//     )
//   }
// 
// }

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);