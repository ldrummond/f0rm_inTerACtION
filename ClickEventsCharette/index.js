import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import $ from 'jquery'

const characterSet = [
  {
    character: "D", 
    path : [
      {
        type: "b1",
        top: 1,
        left: 1,
      },
       {
        type: "b2",
        top: 1,
        left: 2
      },
      {
        type: "b0",
        top: 1,
        left: 3,
      },
       {
        type: "b2",
        top: 2,
        left: 1
      },
      {
        type: "b0",
        top: 2,
        left: 2,
      },
       {
        type: "b1",
        top: 2,
        left: 3
      },
      {
        type: "b1",
        top: 3,
        left: 1,
      },
       {
        type: "b2",
        top: 3,
        left: 2
      },
      {
        type: "b0",
        top: 3,
        left: 3
      },
    ],
  },
]

function getJqueryRefs(e) {
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

function updateEventState(i) {
  console.log(i);
  EventState[i].wasActivated = true; 
  EventState[i].isActive = !EventState[i].isActive;
  EventState[i].timesActivated += 1; 
  return EventState[i]; 
}

let EventState = []; 
for(let i = 0; i < 50; i++) {
  EventState.push({isActive: false, wasActivated: false, timesActivated: 0});
}

const ClickEvents = [
  (e, num) => { // 1
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    updateEventState(num);
    if(curState.isActive) {
      $charWrap.animate({opacity: "0"}, 500);
    } else {
      $charWrap.animate({opacity: "1"}, 500);
    }
  },
  (e, num) => { // 2
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    updateEventState(num) 
    if(curState.isActive) {
      $dotWrappers.get().map((dot, num) => $(dot).animate({opacity: "0"}, num * 200)); 
    } else {
      $dotWrappers.get().map((dot, num) => $(dot).animate({opacity: "1"}, num * 200)); 
    }
  },
  (e, num) => { // 3
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    updateEventState(num);
    if(curState.isActive) {
      $charInner.animate({height: 10})
    } else {
      $charInner.animate({height: 240})
    }
  },
  (e, num) => { // 4
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    updateEventState(num) 
    $charWrap.css({transform: `rotate(${curState.timesActivated * 90}deg)`});
  },
  (e, num) => { // 5
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    updateEventState(num) 
    $dotWrappers.animate({left: "+=100"}, 500)
  },
  (e, num) => { // 6
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    updateEventState(num) 
    $dots.css({transform: `scale(${curState.timesActivated + 1})`}, 100);
  },
  (e, num) => { // 7
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    updateEventState(num) 
    if(curState.isActive) {
      $dots.css({backgroundColor: "blue"}, 500);
    } else {
      $dots.css({backgroundColor: "orange"}, 500);
    }
  },
  (e, num) => { // 8
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    updateEventState(num) 
    $dots.animate({height: "toggle"}, 500);
  },
  (e, num) => { // 9
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    updateEventState(num) 
    $dots.css({border: "solid", borderColor: "grey", borderWidth: `${curState.timesActivated * 10}`}, 500);
  },
  (e, num) => { // 10
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 


    if(!curState.isActive) {
      $allChars.css({backgroundColor:"blue"});
      $('body').css({backgroundColor: "purple"});
    }
    else {
      $allChars.css({backgroundColor:"transparent"});
      $('body').css({backgroundColor: "purple"});
    }
    updateEventState(num) 
  },
  (e, num) => { // 11
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    updateEventState(num);
    let $allDotWrappers = $allChars.children(".charInner");
    if(!curState.isActive) {
      $allDotWrappers.get().map(wrap => {
        const ran1 = Math.random()
        const ran2 = Math.random()
        $(wrap).animate({width: `100%`, height: `100%`});
      })
    }
    else {
      $allDotWrappers.get().map(wrap => {
        const ran1 = Math.random()
        const ran2 = Math.random()
        $(wrap).animate({width: `${ran1}px`, height: `${ran2}px`});
      })
    }
    
  },
  (e, num) => { // 12
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    $('.10inner').children('.shapeWrapper')
      .children('span').animate({borderRadius: "0", width: "100%", height: "100%"});
    updateEventState(num) 

  },
  (e, num) => { // 13
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    $charWrap.css({zIndex: 1000});
    if(!curState.isActive) {
      $allChars.animate({width: "0"}, 2000);
    }
    else {
      $allChars.animate({width: "220px"}, 2000);
    }
    updateEventState(num) 

  },
  (e, num) => { // 14
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    $charWrap.animate({height: "30%"}, 200);
    updateEventState(num) 

  },
  (e, num) => { // 15
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots, $allDots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    function getRandomCol() {
      let r = Math.round(Math.random() * 255);
      let g = Math.round(Math.random() * 255);
      let b = Math.round(Math.random() * 255); 
      return `rgb(${r},${g},${b})`;
    };

    $allDots.css({backgroundColor : getRandomCol(), background: getRandomCol()}); 
    updateEventState(num) 
  },
  (e, num) => { // 16
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots, $allDots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    function getRandomCol() {
      let r = Math.round(Math.random() * 255);
      let g = Math.round(Math.random() * 255);
      let b = Math.round(Math.random() * 255); 
      return `rgb(${r},${g},${b})`;
    };

   $allDots.get().map(dot => $(dot).css({backgroundColor : getRandomCol(), background: getRandomCol()}));  
    updateEventState(num) 
  },
  (e, num) => { // 17
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots, $allDots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    $charInner.get().map((char, index) => {
      if(index % 2 == 0) {
        $(char)
        .css({transformOrigin: `${30 * index}% ${30 * index}%`, transform: `rotate(${(curState.timesActivated + 1) * 90}deg)`})
        .clone().appendTo($charWrap);
      } else {
        $(char)
        .css({transformOrigin: `${30 * index}% ${30 * index}%`, transform: `rotate(${(curState.timesActivated + 1) * 90}deg)`})
      }
    });
    updateEventState(num);
  },
  (e, num) => { // 18
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    $('html, body').animate({
      scrollTop: ($charWrap.offset().top)
   },500);
    updateEventState(num);
  },
  (e, num) => { // 19
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    if(!curState.isActive) {
      $allChars.css({transform: "rotate(30deg)"});
    }
    else {
      $allChars.css({transform: "rotate(0deg) scale(0.5)"});
    }
    updateEventState(num) 

  },
  (e, num) => { // 20
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    $allChars.animate({width: "100%"}, 2000);
    updateEventState(num) 

  },
  (e, num) => { // 21
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    $dotWrappers.children('.b2').css({backgroundColor : "blue"});
    updateEventState(num) 

  },
  (e, num) => { // 22
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    if(!curState.isActive) {
      $dots.animate({borderRadius: "0"}); 
    }
    else {
      $dots.animate({borderRadius: "100%"}); 
    }
    updateEventState(num) 

  },
  (e, num) => { // 23
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    $('.23wrap').children('.charInner').children('#5').css({transform: "scale(2)"});
    updateEventState(num) 

  },
  (e, num) => { // 24
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    $('.22wrap').children('.charInner').children('#5').css({animation: "swing 2s ease-in infinite alternate"});
    updateEventState(num) 
  },
  (e, num) => { // 25
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    $charInner.css({filter: "none"});
    $dots.css({background: "none", backgroundColor: "none", border: "2px solid purple"})
    updateEventState(num) 
  },
  (e, num) => { // 26
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    alert("still kicking?")
    updateEventState(num) 
  },
  (e, num) => { // 27
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    $charWrap.css({position: "absolute"}).animate({left: e.pageX, top: e.pageY});
    updateEventState(num) 

  },
  (e, num) => { // 28
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    $dotWrappers.css({boxShadow: "30px 30px"});
    updateEventState(num) 

  },
  (e, num) => { // 29
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    $dotWrappers.children('.b1').fadeOut(); 
    updateEventState(num) 

  },
  (e, num) => { // 30
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    let ran = (Math.random() - 0.5) * 200;
    $dots.animate({borderRadius: "0", position: "relative", left: `${ran}px`});
    updateEventState(num) 

  },
  (e, num) => { // 31
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    $charWrap.animate({margin: "50px"})
    updateEventState(num) 

  },
  (e, num) => { // 32
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    $('.32inner').children('.shapeWrapper').children('.b1').css({transform: "scaleY(3)"}); 
    $('.34inner').children('.shapeWrapper').children('.b1').css({transform: "scaleY(3)"}); 
    $('.33inner').children('.shapeWrapper').children('.b1').css({transform: "scaleY(3)"}); 
    updateEventState(num) 

  },
  (e, num) => { // 33
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    // $charWrap.css({overflow: "hidden"})
    $charInner.css({position: "relative"}).animate({top: "100px"}, 200, e => $dots.css({backgroundColor: "#ECC656"}));
    updateEventState(num) 

  },
  (e, num) => { // 34
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    $dotWrappers.children('.b2').fadeOut(); 
    $charWrap.css({animation: "spin 4s linear 0.5s infinite"})
    updateEventState(num) 

  },
  (e, num) => { // 35
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    print();
    updateEventState(num) 

  },
  (e, num) => { // 36
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    $container.css({filter: "grayscale(1)"});
    updateEventState(num) 

  },
  (e, num) => { // 37
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    $('.37wrap').css({border: "3px solid purple"}).children('.charInner').css({filter: "none"}).children('.shapeWrappers').children('span').animate({borderRadius: "0"});
    $('.38wrap').css({border: "3px solid purple"}).children('.charInner').css({filter: "none"}).children('.shapeWrappers').children('span').animate({borderRadius: "0"});
    $('.39wrap').css({border: "3px solid purple"}).children('.charInner').css({filter: "none"}).children('.shapeWrappers').children('span').animate({borderRadius: "0"});
    $('.40wrap').css({border: "3px solid purple"}).children('.charInner').css({filter: "none"}).children('.shapeWrappers').children('span').animate({borderRadius: "0"});
    $('.41wrap').css({border: "3px solid purple"}).children('.charInner').css({filter: "none"}).children('.shapeWrappers').children('span').animate({borderRadius: "0"});
    updateEventState(num) 

  },
  (e, num) => { // 38
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots, $allDots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    $allChars.css({animation: "spin 4s linear 0.5s infinite"})
    updateEventState(num) 

  },
  (e, num) => { // 39
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    $dotWrappers.children('.b1').css({animation: "swing 3s ease-in alternate infinite", border: "2px solid purple"})
    updateEventState(num) 
  },
  (e, num) => { // 40
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    $allChars.animate({height: "0px"}, 2000);
    updateEventState(num) 

  },
  (e, num) => { // 41
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    updateEventState(num) 

  },
  (e, num) => { // 42
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    updateEventState(num) 

  },
  (e, num) => { // 43
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    updateEventState(num) 

  },
  (e, num) => { // 44
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    updateEventState(num) 

  },
  (e, num) => { // 45
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    updateEventState(num) 

  },
  (e, num) => { // 46
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    updateEventState(num) 

  },
  (e, num) => { // 47
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    updateEventState(num) 

  },
  (e, num) => { // 48
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    updateEventState(num) 

  },
  (e, num) => { // 49
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    updateEventState(num) 

  },
  (e, num) => { // 50
    let {$container, $allChars, $charWrap, $charInner, $dotWrappers, $dots} = getJqueryRefs(e);
    let curState = EventState[num]; 
    updateEventState(num) 

  }
]

export class App extends React.Component {
  constructor() {
    super()

    this.state = {
      showingText : false
    }
    this.onTextClick = this.onTextClick.bind(this)
  }  
  
  onTextClick() {
    this.setState(function (prevState, prevProps){return ({showingText : !prevState.showingText})})
  }

  render() {
    const path = characterSet[0].path
    let charElems = []
    path.map((pathElem, index) => {
      const type = pathElem.type
      let _style = {top: `${pathElem.top * 80}px`, left: `${pathElem.left * 80}px`}
      _style = {}
      switch(pathElem.type) { // Ball sizes
        case "b1":
          charElems.push(
            <span id={index} key={`${index}1`} className="shapeWrapper">
              <span className="b1"  style={_style}></span>
            </span>)
          break;
        case "b2":
          charElems.push(
            <span id={index} key={`${index}2`} className="shapeWrapper">
              <span className="b2"  style={_style}></span>
            </span>)
          break;
        case "b3":
          charElems.push(
          <span id={index} key={`${index}3`} className="shapeWrapper">
            <span className="b3"  style={_style}></span>
          </span>)
          break;
        case "b0":
        default: 
          charElems.push(
          <span id={index} key={`${index}4`} className="shapeWrapper">
            <span className="b0"  style={_style}></span>
          </span>)
          break;
      }
    })
    const Markup = []; 
    ClickEvents.map((event, index) => {
      Markup.push(
        <div className={`character ${index}wrap`} key={index + "event"} onClick={(e) => {event(e, index); console.log(event)}}>
          <div className={`charInner ${index}inner`}>
            {charElems}
          </div>
          <span className="index">{index + 1}</span>
      </div>
      )
    })

    return(
      <div className='site-wrapper'>
        <div className='site-inner'>
          {Markup}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);