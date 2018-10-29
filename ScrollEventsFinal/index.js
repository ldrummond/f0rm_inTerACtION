import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import $ from 'jquery'
let s;
require(['skrollr'], function(skrollr){
  s = skrollr.init({
    render: function(data) {
      $(window).trigger("scrollEvent", data)
    }
  });
  $(window).trigger("scrollMounted", s)
});

export class App extends React.Component {
  constructor() {
    super()

    this.backgroundNum = Math.round(Math.random() * 2)
    this.contentNum = Math.round(Math.random() * 5)
    this.scrollCur = 0; 
    this.scrollDelta = 0; 
    this.scrollCount = 0; 

    this.scrollGroups = 1;
    this.threshold = 40000; 
    this.renderGroups = [];

    this.skrollr = null; 

    this.setupScrollEvents();
  }

  componentDidMount() {
    this.renderGroups = [];
    $(window).bind("scrollMounted", (event, skrollr) => {
      console.log("scroll mounted")
      setTimeout(e => {
        this.skrollr = skrollr        
        skrollr.setScrollTop(200, true); 
        $('.siteWrapper').css({display: "block"})
      }, 0); 
    })

    $(window).bind("scrollEvent", (event, scrollData) => {
      console.log(this.scrollGroups)
      if(this.skrollr) {
        if(this.scrollGroups > 3) {
          location.reload();
        }
        if(this.scrollCount > 1) {
          // Find the change in scroll
          this.scrollCur = scrollData.curTop 
          this.scrollDelta += Math.abs(scrollData.curTop - scrollData.lastTop)

          if(this.scrollDelta >= this.threshold) {
            this.addScrollGroup()
            this.threshold += 40000
          }
        } 
        this.scrollCount++
      } 
    })
  }

  addScrollGroup() {
    // console.log("Add Scroll Group " + this.scrollGroups);
    let settings = {
      "numRects" : 40,
      "affectedRects" : 300, 
      "speed" : 500, 
      "startPos" : [Math.random() * $('.siteInner').width(), (Math.random() * ($('.siteInner').height() / 2 - 60))],
      "contentIndex" : this.contentNum
    };

    let group = this.renderScrollGroup(settings)
 
    this.renderGroups.push(
      <span className="siteInner" 
        id={`group${this.scrollGroups}`} 
        key={`group${this.scrollGroups}`} 
        style={{zIndex: this.scrollGroups}}>
         {group}
      </span>)

    // Update React to show elements.
    this.forceUpdate();

    // Update Skrollr for those elements.
    setTimeout(e => {
      this.skrollr.refresh($(`#group${this.scrollGroups}`).children().children());
      this.scrollGroups++ 
    }, 200); 
  }

  renderScrollGroup(settingsObj) {
    let allWindows = []; 
    let currentScrollPosition = this.scrollCur + 100 

    // Make the new elements
    let numRects = settingsObj.numRects
    let affectedRects = settingsObj.affectedRects
    let speed = settingsObj.speed 
    let startPos = settingsObj.startPos
    let animation = this.ScrollAnimation
    let content = this.contentOptions[settingsObj.contentIndex]

    for(let i = 0; i < numRects; i++) {
      let rectKeyframes = animation.keyframes
      let rectContent = content
      
      // Start the scroll from the current position, so it seems static at first. 
      let scrollRangeLower = i * speed + currentScrollPosition; 
      let scrollRangeUpper = (i + affectedRects) * speed + currentScrollPosition; 

      let skrollrAttrs = {}
      let scrollRangeIncrement = (scrollRangeUpper - scrollRangeLower) / (rectKeyframes.length - 1) 

      // For each CssStyle of that keyframe, concatenate and assign to the attribute.
      rectKeyframes.map((keyframe, index) => {
        let keyframeCss = ""
        for(let key in keyframe) {
          keyframeCss = `${keyframeCss} ${key}:${keyframe[key]};`
        }
        skrollrAttrs[`data-${scrollRangeLower + (scrollRangeIncrement * index)}`] = keyframeCss; 
      })

      let style = ({
        position: "absolute",
        left: startPos[0],
        top: startPos[1] + i * 80,
        zIndex: "inherit",
      })

      // Add the rect to the array of windows. 
      allWindows.push(
        <div className={`scrollWindowWrapper`} key={i} style={style}>
          <span className="scrollWindowInner" {...skrollrAttrs} >
              {rectContent}
          </span>
        </div>
      )
    }
    return allWindows
  }

  render() {
    let settings = {
      "numRects" : 50,
      "affectedRects" : 300, 
      "speed" : 500, 
      "startPos" : [340, 200],
      "contentIndex": this.contentNum,
    };

    return (
      <div className={`siteWrapper scroll${settings.experimentNumber}`}>
        <span className={`siteInner`} style={{zIndex: 0}}>
          {this.renderScrollGroup(settings)}
        </span>
        {this.renderGroups.map(e => e)}
        <span className="background" style={{
          backgroundSize: "cover",
          backgroundImage:`url(../backgrounds/background${this.backgroundNum}.png)`,
          // backgroundImage: "url(../backgrounds/background.png)",
          backgroundRepeat: "none",
          backgroundColor: 'lightgrey',
          zIndex: -1,
        }}></span>
      </div>
    )  
  }

  setupScrollEvents() {
    this.contentOptions = [
      (<img src="./icons/missing_image.png" style={{width: 140}}></img>), 
      (<img src="./icons/radio.png" style={{width: 300}}></img>), 
      (<img src="./icons/options.png" style={{width: 400}}></img>), 
      (<input type="checkbox" style={{zoom: 5}}></input>),
      (<input type="text" style={{fontSize: 50, border: "1px solid grey", padding: 10, boxShadow: "10px 10px 10px rgba(0,0, 0, 0.2)"}} placeholder="input text"></input>),
    ]

    this.ScrollAnimation = {
        keyframes : [
          {
            "opacity[end]" : "0"
          },
          {
            "transform":"rotate(0deg) scale(1)",
            "opacity[end]" : "1"
          },
          {
            "transform":"rotate(90deg) scale(2)",
          },
          {
            "transform":"rotate(-90deg) scale(1)",
          },
          {
            "transform":"rotate(-180deg) scale(1)",
          },
          {
            "transform":"rotate(90deg) scale(4)",
          },
          {
            "transform":"rotate(-20deg) scale(8)",
          },
          {
            "transform":"rotate(180deg) scale(1)",
          },
          {
            "transform":"rotate(180deg) scale(12)",
          },
          {
            "transform":"rotate(0deg) scale(1)",
          },
          {
            "transform":"rotate(-360deg) scale(3)",
          },
        ]
      }
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);