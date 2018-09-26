import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import $ from 'jquery'
import {characterSet as characterSet} from './characters.js'
import {clickEvents as clickEvents} from './clickEvents.js'

export class App extends React.Component {
  constructor() {
    super()
    this.renderAllChars = this.renderSpecimen.bind(this);
    
    // All Click Event
    this.EventState = []; 
    for(let i = 0; i < 50; i++) {
      this.EventState.push({isActive: false, wasActivated: false, timesActivated: 0, timesHovered: 0});
    }

    // Single Character Repeating
    this.curChar = 0;
    this.charActive = false;
    this.type = "experience";

    // Single Experience Space
    this.numClicks = 0;

    // this.onClickNextChar = this.onClickNextChar.bind(this);
    this.renderCenterTest = this.renderExperience.bind(this);
    this.updateEventState = this.updateEventState.bind(this);
    this.getJqueryRefs = this.getJqueryRefs.bind(this);
    this.mountBlot = this.mountBlot.bind(this);
    this.mountExperience = this.mountExperience.bind(this);
    this.onTitleClick = this.onTitleClick.bind(this);

    this.startTime = 1500
  }  

  getJqueryRefs(e) {
    let ref = {};
    ref.$container = $('.site-inner'); 
    ref.$allChars = $('.character');
    ref.$charWrap = $(e.currentTarget);
    ref.$charInner = $(e.currentTarget).children(".charInner"); 
    ref.$dotWrappers = $(e.currentTarget).children(".charInner").children();
    ref.$dots = ref.$dotWrappers.children(); 
    ref.$allDots = ref.$allChars.children('.charInner').children('.shapeWrapper').children('span'); 
    return ref; 
  }

  updateEventState(i) {
    this.EventState[i].wasActivated = true; 
    this.EventState[i].timesHovered += 1; 
    this.EventState[i].isActive = !this.EventState[i].isActive;
    this.EventState[i].timesActivated += 1; 
    return this.EventState[i]; 
  }

  onClick(e) {
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = this.getJqueryRefs(e);
    // let curState = this.EventState[index]; 
    // this.updateEventState(index) 
    $dotWrappers.children().toggleClass("fadeOut")
  }
  
  renderSpecimen() {
    this.characterMarkup = characterSet.map((elem, index) => {
      const character = elem.character
      const path = elem.path
      let charElems = []
      path.map((pathElem, index) => {
        const type = pathElem.type
        let _style = {top: `${pathElem.top * 80}px`, left: `${pathElem.left * 80}px`}
        _style = {}
        switch(pathElem.type) { // Ball sizes
          case "b1":
            charElems.push(
              <span id={index} className="shapeWrapper">
                <span className="b1" key={`${elem.character}${index}`} style={_style}></span>
              </span>)
            break;
          case "b2":
            charElems.push(
              <span id={index} className="shapeWrapper">
                <span className="b2" key={`${elem.character}${index}`} style={_style}></span>
              </span>)
            break;
          case "b3":
            charElems.push(
            <span id={index} className="shapeWrapper">
              <span className="b3" key={`${elem.character}${index}`} style={_style}></span>
            </span>)
            break;
          case "b0":
          default: 
            charElems.push(
            <span id={index} className="shapeWrapper">
              <span className="b0" key={`${elem.character}${index}`} style={_style}></span>
            </span>)
            break;
        }
      })
      return (
          <div className="character" key={elem.character}>
            <div className="charInner">
              {charElems}
            </div>
          </div>
      )
    })

    return(
      <div className='site-wrapper'>
        <div className='site-inner'>
          {this.characterMarkup}
        </div>
      </div>
    )
  }

  renderExperience() {
    let activeChars = ["O","I","L", " ", "S","P","I","L","L"];
    this.characterMarkup = activeChars.map((e, index) => {
      if(e == " ") { // If space, return space
        return (
        <div className="character font-name Space" key={"space"}>
          <div className="charInner">
          </div>
        </div>)
      } 
      // Find the Char
      let thisChar = characterSet.find(b => b.character == e);
      let elem = thisChar
      const path = thisChar.path
      let charElems = []
      path.map((pathElem, index) => {
        const type = pathElem.type
        let _style = {top: `${pathElem.top * 80}px`, left: `${pathElem.left * 80}px`}
        _style = {}
        switch(pathElem.type) { // Ball sizes
          case "b1":
            charElems.push(
              <span id={index} className="shapeWrapper">
                <span className="b1" key={`${elem.character}${index}`} style={_style}></span>
              </span>)
            break;
          case "b2":
            charElems.push(
              <span id={index} className="shapeWrapper">
                <span className="b2" key={`${elem.character}${index}`} style={_style}></span>
              </span>)
            break;
          case "b3":
            charElems.push(
            <span id={index} className="shapeWrapper">
              <span className="b3" key={`${elem.character}${index}`} style={_style}></span>
            </span>)
            break;
          case "b0":
          default: 
            charElems.push(
            <span id={index} className="shapeWrapper">
              <span className="b0" key={`${elem.character}${index}`} style={_style}></span>
            </span>)
            break;
        }
      })
      return (
          <div className={`character font-name ${elem.character}`} key={elem.character + index}>
            <div className="charInner">
              {charElems}
            </div>
          </div>
      )
    })

    this.allChars = characterSet.map((elem, index) => {
      const character = elem.character
      const path = elem.path
      let charElems = []
      path.map((pathElem, index) => {
        const type = pathElem.type
        let _style = {top: `${pathElem.top * 80}px`, left: `${pathElem.left * 80}px`}
        _style = {}
        switch(pathElem.type) { // Ball sizes
          case "b1":
            charElems.push(
              <span id={index} className="shapeWrapper">
                <span className="b1" key={`${elem.character}${index}`} style={_style}></span>
              </span>)
            break;
          case "b2":
            charElems.push(
              <span id={index} className="shapeWrapper">
                <span className="b2" key={`${elem.character}${index}`} style={_style}></span>
              </span>)
            break;
          case "b3":
            charElems.push(
            <span id={index} className="shapeWrapper">
              <span className="b3" key={`${elem.character}${index}`} style={_style}></span>
            </span>)
            break;
          case "b0":
          default: 
            charElems.push(
            <span id={index} className="shapeWrapper">
              <span className="b0" key={`${elem.character}${index}`} style={_style}></span>
            </span>)
            break;
        }
      })
      return (
          <div className={`character ${elem.character}`} key={elem.character}>
            <div className="charInner">
              {charElems}
            </div>
          </div>
      )
    })

    return (
      <div className='site-wrapper'>
          <div className='site-inner'>
            {this.characterMarkup}
          </div>
          <div className='circles-container'>
            {this.allChars}
          </div>
        </div>
    )
  }

  onTitleClick() {
    $('.font-name').unbind('mouseenter').unbind('mouseleave')
    $('.font-name').off('hover'); 
    $('.font-name').unbind('hover'); 
    $('.font-name').hover(e => e);

    // Get title letters
    $('.font-name').get().map(e => {
      let dots = $(e)
        .children('.charInner')
        .children('.shapeWrapper')
        .children('span')

    // Randomize positions
    dots  
      .css({transition: 'top 666ms ease-out, left 666ms ease-out, opacity 666ms ease'})

    dots
      .get()
      .map(e => {
          let r1 = (Math.random() - 0.5) * 800;
          let r2 = (Math.random() - 0.5) * 800;
          $(e)
            .css({left: `0px`, top: `0px`, opacity: '1'})
            .delay(300)
            .css({left: `${r1}px`, top: `${r2}px`, opacity: '0'})
        })
    })
    
    // Fade in Specimen
    $('.circles-container').css({opacity: 0})
    setTimeout(e => {
      $('.circles-container').css({zIndex: 1}), 1000
      $('.circles-container').animate({opacity: 1}, 3000)
    }); 

    setTimeout(e => {
      $('.circles-container')
        .children('.character')
        .mouseenter(e => {
          let dots = $(e.currentTarget)
            .children('.charInner')
            .children('.shapeWrapper')
            .children('span')

          dots  
            .get()
            .map(e => {
                let r3 = Math.random * 10
                let r1 = (Math.random() - 0.5) * 30;
                let r2 = (Math.random() - 0.5) * 30;
                if(r3 % 5 == 0) {
                  r1 *= 10
                  r2 *= 10
                }
                $(e)
                  .animate({left: `+=${r1}px`, top: `+=${r2}px`})
              })
        })

      $('.circles-container')
        .children('.character')
        .mousedown(e => {
          let dots = $(e.currentTarget)
            .children('.charInner')
            .children('.shapeWrapper')
            .children('span')

          dots  
            .get()
            .map(e => {
                $(e)
                  .animate({left: `0px`, top: `0px`})
              })
        }).mouseup(e => {
          let dots = $(e.currentTarget)
            .children('.charInner')
            .children('.shapeWrapper')
            .children('span')

          dots  
            .get()
            .map(e => {
              let r1 = (Math.random() - 0.5) * 20 * this.numClicks;
              let r2 = (Math.random() - 0.5) * 20 * this.numClicks;
              $(e)
                .animate({left: `${r1}px`, top: `${r2}px`})
              })
        })
    }, 4000);
    this.numClicks++
  }

  mountExperience() {
    // Hide Characters
    $('.font-name')
      .children('.charInner')
      .children('.shapeWrapper')
        .css('opacity', '0')

    // Hide Circles
    $('.circles-container')
      .css({'opacity': '0', 'zIndex': -5})

    setTimeout(e => {
      $('.font-name')
        .children('.charInner')
        .children('.shapeWrapper')
          .get().map((dot, num) => $(dot).animate({opacity: "1"}, num * 200))
          // .get().map((dot, num) => $(dot).css({opacity: "1"}))
    }, 500);
    
    setTimeout(e => {
        // Initial Title Hover
        $('.font-name').mouseenter(e => {
          let dots = $(e.currentTarget)
            .children('.charInner')
            .children('.shapeWrapper')
            .children('span')

          dots
            .css({transition: 'top 666ms ease-out, left 666ms ease-out'})

          dots  
            .get()
            .map(e => {
                let r1 = (Math.random() - 0.5) * 90;
                let r2 = (Math.random() - 0.5) * 90;
                $(e)
                  .animate({left: `+=${r1}px`, top: `+=${r2}px`}, 200)
              })
        })

        // Initial Title Click
        $('.font-name').click(e => this.onTitleClick(e))
      }, 6000);
  }

  mountBlot() {
    let containerWidth = 1200
    let containerHeight = 600
    let centerX = containerWidth / 2 - 150 // margin
    let centerY = containerHeight / 2 - 100 // margin
    let circles = $('.circles-wrapper')
    let container = $('.circles-container')
    if(!this.isSpecimen) {
      circles
        .get().map(e => {
          let r1 = centerX + (Math.random() - 0.5) * 150;
          let r2 = centerY + (Math.random() - 0.5) * 150;
          $(e)
            .css({left: `${r1}px`, top: `${r2 + 100}px`})
        })

      circles
          .mouseleave(e => {
            this.awaitingHover = setTimeout(e => {if((Date.now() - this.startTime) > 2000) {
              this.startTime = Date.now()
              circles
              .get().map(e => {
                let r1 = centerX + (Math.random() - 0.5) * ((this.numClicks + 1) * 150);
                let r2 = centerY + (Math.random() - 0.5) * ((this.numClicks + 1) * 150);
                $(e)
                  .css({left: `${r1}px`, top: `${r2 + 100}px`})
              })
            }}, 500)
          })

      circles
          .click(e => {
            if(this.numClicks < 10) { 
              clearTimeout(this.awaitingHover)
              this.startTime = Date.now()
              circles
                .get().map(e => {
                  let r1 = centerX + (Math.random() - 0.5) * ((this.numClicks + 1) * 150);
                  let r2 = centerY + (Math.random() - 0.5) * ((this.numClicks + 1) * 150);
                  let width = (Math.random() - 1) * 10;
                  let height = (Math.random() - 1) * 10;
                  
                  $(e)
                    .animate({left: `${r1}px`, top: `${r2 + 100}px`, width: `+=${width}`, height: `+=${height}`})
                })}
            else { 
              circles
                .get().map(e => {
                  $(e)
                    .animate({width: `+=${width}`})
                })
            }
            this.numClicks++;
          })
      }
  }

  componentDidMount() {
    switch(this.type) {
      case "blot":
        this.mountBlot();
        break;

      case "experience":
        this.mountExperience();
        break;
    }
  }

  renderBlot() {
    let circles = []
    for(let i = 0; i < 80; i++) {
      circles.push(<span className="circles-wrapper"><span className="b1"></span></span>)
    }
    return (
      <div className='site-wrapper'>
          <div className='circles-container goo'>
            {circles}
          </div>
        </div>
    )
  }
    

  render() {
    switch(this.type) {
      case "blot":
        return this.renderBlot();

      case "specimen":
        return this.renderSpecimen();

      case "experience":
        return this.renderExperience();
    }
  }
};

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);