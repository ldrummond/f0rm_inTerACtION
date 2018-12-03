import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'

export const charetteEvents = [
  { // 1
    content: (
       <span></span>
    ),
    styles: [{
      "background":"url(./images/pat2.jpeg)",
      "filter":"blur(0px)"
    },
    {
      "background":"url(./images/pat2.jpeg)",
      "filter":"blur(20px)"
    }]  
  },
  { // 2
    content: (
     <span></span>
    ),
    styles: [{
      "background-color":"rgb(255, 255, 255)"
    },
    {
      "background-color":"rgb(0, 0, 0)"
    }]  
  },
  { // 3
    content: (
     <span>Hello!</span>
    ),
    styles: [
    {
        fontFamily:'fantasy',
        fontSize: "100px",
    },
    {
        fontFamily:'serif',
        fontSize: "50px",
    },
    {
        fontFamily:'cursive',
        fontSize: "120px",
    },
    {
        fontFamily:'sans-serif',
        fontSize: "80px",
    },
    {
        fontFamily:'monospace',
        fontSize: "150px",
    }]
  },
  { // 4
    content: (
     <span></span>
    ),
    styles: [{
      "border-left":"1px dotted pink",
      "border-right":"20px dotted orange",
    },
    {
      "border-left":"10px dotted pink",
      "border-right":"150px dotted orange",
    }]
  },
  { // 5
    content: (
     <span></span>
    ),
    styles: [{
    //   "position":"absolute",
      "left": "0px",
      "background": "pink",
      "opacity": "0.8",
      "top":"0px",
    },
    {
    //   "position":"absolute",
      "left": "-500px",
      "top":"-100px",
    }]
  },
  { // 6
    content: (
     <img style={{"width":"100%", "height":"100%"}}src="./images/pattern1.jpg" ></img>
    ),
    styles: [{
      "transform":"rotate(0deg) scale(1)"
    },
    {
      "transform":"rotate(180deg) scale(2)"
    }]
  },
  { // 7
    content: (
     <span></span>
    ),
    styles: [{
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
    }]
  },
  { // 8
    content: (
     <span>WIDE</span>
    ),
    styles: [{
      "font-size":"50px",
      "letter-spacing":"1px",
      "width": "100px",
      "background-color":"white",
      "z-index":"5",
    },
    {
      "font-size":"80px",
      "letter-spacing":"50px",
      "width": "500px",
      "background-color":"white",
      "z-index":"5",
    }]
  },
  { // 9
    content: (
     <span></span>
    ),
    styles: [{
        "border":"none",
        "background-color":"rgba(0, 0, 0, 1)"
      },
      {
          "border":"none",
          "background-color":"rgba(0, 0, 0, 0)"
      }] 
  },
  { // 10
    content: (
     <span></span>
    ),
    styles: [{
        "border":"none",
        "background-color":"rgba(0, 0, 0, 1)"
      },
      {
          "border":"none",
          "background-color":"rgba(0, 0, 0, 0)"
      }] 
  },
  { // 11
    content: (
     <span></span>
    ),
    styles: [{
      "border":"none",
      "background-color":"rgba(0, 0, 0, 1)"
    },
    {
        "border":"none",
        "background-color":"rgba(0, 0, 0, 0)"
    }]  
  },
  { // 12
    content: (
     <span></span>
    ),
    styles: [{
        "background-color":"rgb(250, 100, 120)",
        "border-right":"0px solid rgb(100, 250, 120)"
    },
    {
        "background-color":"rgb(100, 250, 120)",
        "border-right":"180px solid rgb(250, 100, 120)"
    }]
  },
  { // 13
    content: (
     <span style={{"font-family":"cursive"}}>Fancy</span>
    ),
    styles: [{
      "font-size":"80px",
      "color":"rgb(255, 0, 0)",
      "background-color":"rgb(0, 0, 255)"
    },
    {
      "color":"hsl(50, 200, 100)",
      "font-size":"80px",
      "background-color":"rgb(255, 0, 255)"
    }]
  },
  { // 14
    content: (
     <span></span>
    ),
    styles: [{
      "background":"url(./images/pat2.jpeg)",
      "filter":"blur(0px)"
    },
    {
      "background":"url(./images/pat2.jpeg)",
      "filter":"blur(20px)"
    }]  
  },
  { // 15
    content: (
     <span></span>
    ),
    styles: [{
      "background-color":"hsl(200, 50%, 50%)"
    },
    {
      "background-color":"hsl(100, 30%, 80%)"
    }]
  },
  { // 16
    content: (
      <span></span>
    ),
    styles: [{
      "border":"1px solid black"
    },
    {
      "border":"50px solid black"
    }]
  },
  { // 17
    content: (
     <span></span>
    ),
    styles: [{
      "background":"url(./images/pattern1.jpg)",
      "transform":"skew(0deg, 0deg)",
    },
    {
      "background":"url(./images/pattern1.jpg)",
      "transform":"skew(20deg, 30deg)",
    }]
  },
  { // 18
    content: (
     <span></span>
    ),
    styles: [{
        "background":"url(./images/pattern1.jpg)",
        "transform":"translateY(0px)",
      },
      {
        "background":"url(./images/pattern1.jpg)",
        "transform":"translateY(180px)",
      }]
  },
  { // 19
    content: (
     <span></span>
    ),
    styles: [{
      "border":"10px solid pink"
    },
    {
      "border":"50px solid orange"
    },
    {
      "border":"25px solid pink"
    },
    {
      "border":"10px solid orange"
    },
  ]},
  { // 20
    content: (
     <span></span>
    ),
    styles: [{
      "border":"none",
      "background-color":"rgb(0, 40, 100)"
    },
    {
      "background-color":"rgb(0, 40, 255)"
    }]
  },
  { // 21
    content: (
     <span></span>
    ),
    styles: [{
      "border":"none",
      "background-color":"rgb(0, 40, 255)"
    },
    {
      "background-color":"rgb(0, 40, 100)"
    }]
  },
  { // 22
    content: (
     <span style={{"margin": "auto", width: "100%", textAlign: "center", display: "block", fontSize: "50px"}}>cool!</span>
    ),
    styles: [{
        "color": "rgb(150, 0, 150)",
        "box-shadow" : "inset 0px 0px 0px purple"
    },
    {
        "color": "rgb(255, 255, 255)",
        "box-shadow" : "inset 0px 0px 200px purple"
    }]
  },
  { // 23
    content: (
        <span></span>
    ),
    styles: [{
       "background":"url(./images/pattern1.jpg)",
       "filter":"sepia(0%)",
    },
    {
        "background":"url(./images/pattern1.jpg)",
        "filter":"sepia(100%)",
    }]
  },
  { // 24
    content: (
     <span></span>
    ),
    styles: [{
      "background":"url(./images/pat2.jpeg)",
      "filter":"blur(0px)"
    },
    {
      "background":"url(./images/pat2.jpeg)",
      "filter":"blur(20px)"
    }]  
  },
  { // 25
    content: (
     <span></span>
    ),
    styles: [{
      "transform":"scale(1)",
      "border-left":"3px solid lightgrey",
      "z-index":"-5",
    },
    {
        "transform":"scale(3)",
        "border-left":"100px solid lightgrey",
    }]
  },
  { // 26
    content: (
     <span></span>
    ),
    styles: [{
      "box-shadow": "-10px 5px 20px purple"
    },
    {
      "box-shadow": "10px 20px 50px purple"
    },
    {
        "box-shadow": "-10px 5px 100px purple"
    }]
  },
  { // 27
    content: (
        <span style={{"width": "100%", textAlign: "center", fontSize: "60px", fontFamily: "sans-serif"}}>wrapper</span>
    ),
    styles: [{
      color:"white",
      "-webkit-text-stroke-width": "1px",
      "background-color":"rgb(0, 50, 0)"
    },
    {
    "-webkit-text-stroke-width": "100px",    
      "background-color":"rgb(0, 50, 0)"
    }]
  },
  { // 28
    content: (
        <span></span>
    ),
    styles: [{
      "background-color":"rgb(150, 255, 250)"
    },
    {
    "background-color":"rgb(50, 100, 50)"
    }]
  },
  { // 29
    content: (
        <span style={{"width": "100%", textAlign: "center", fontSize: "60px", fontFamily: "sans-serif"}}>weight</span>
    ),
    styles: [{
    //   "background-color":"rgb(150, 255, 250)"
        "font-weight":"0",
        "letter-spacing":"10px"
    },
    {
        "font-weight":"900",
        "letter-spacing":"-40px"
    }]
  },
  { // 30
    content: (
        <span></span>
    ),
    styles: [{
      "background-color":"rgb(150, 255, 250)"
    },
    {
    "background-color":"rgb(50, 50, 50)"
    }]
  },
  { // 31
    content: (
     <span></span>
    ),
    styles: [{
      "background":"url(./images/pat2.jpeg)",
      "transform":"rotate(0deg)"
    },
    {
      "background":"url(./images/pat2.jpeg)",
      "transform":"rotate(360deg)"
    }]  
  },
  { // 32
    content: (
     <span></span>
    ),
    styles: [{
      "background-color":"rgb(150, 255, 250)"
    },
    {
    "background-color":"rgb(50, 100, 50)"
    }]
  },
  { // 33
    content: (
     <span></span>
    ),
    styles: [{
      "background-color":"rgb(150, 255, 250)"
    },
    {
    "background-color":"rgb(50, 100, 50)"
    }]
  },
  { // 34
    content: (
     <span></span>
    ),
    styles: [{
      "height":"20vh",
      "background":"teal",
    },
    {
      "height":"2vh"
    },
    {
        "height":"20vh"
      },
    ]
  },
  { // 35
    content: (
     <span></span>
    ),
    styles: [{
        "height":"20vh",
        "background":"teal",
      },
      {
        "height":"2vh"
      },
      {
          "height":"20vh"
        },]
  },
  { // 36
    content: (
     <span></span>
    ),
    styles: [{
        "height":"20vh",
        "background":"teal",
      },
      {
        "height":"2vh"
      },
      {
          "height":"20vh"
        },]
  },
  { // 37
    content: (
     <span></span>
    ),
    styles: [{
        "height":"20vh",
        "background":"teal",
      },
      {
        "height":"2vh"
      },
      {
          "height":"20vh"
        },]
  },
  { // 38
    content: (
     <span></span>
    ),
    styles: [{
      "transform":"rotate(0deg)",
      "width":"20vh",
      "border":"none",
      "background-color":"rgb(0, 40, 100)"
    },
    {
      "transform":"rotate(90deg)",
      "width":"0vh",
      "background-color":"rgb(0, 40, 100)"
    }]
  },
  { // 39
    content: (
     <span></span>
    ),
    styles: [{
        "transform":"rotate(0deg)",
        "width":"20vh",
        "border":"none",
        "background-color":"rgb(0, 40, 100)"
      },
      {
        "transform":"rotate(90deg)",
        "width":"0vh",
        "background-color":"rgb(0, 40, 100)"
      }]
  },
  { // 40
    content: (
     <span></span>
    ),
    styles: [{
        "transform":"rotate(0deg)",
        "width":"20vh",
        "border":"none",
        "background-color":"rgb(0, 40, 100)"
      },
      {
        "transform":"rotate(90deg)",
        "width":"0vh",
        "background-color":"rgb(0, 40, 100)"
      }]
  },
  { // 41
    content: (
     <span></span>
    ),
    styles: [{
        "transform":"rotate(0deg)",
        "width":"20vh",
        "border":"none",
        "background-color":"rgb(0, 40, 100)"
      },
      {
        "transform":"rotate(90deg)",
        "width":"0vh",
        "background-color":"rgb(0, 40, 100)"
      }]
  },
  { // 42
    content: (
     <span></span>
    ),
    styles: [{
        "transform":"rotate(0deg)",
        "width":"20vh",
        "border":"none",
        "background-color":"rgb(0, 40, 100)"
      },
      {
        "transform":"rotate(90deg)",
        "width":"0vh",
        "background-color":"rgb(0, 40, 100)"
      }]
  },
  { // 43
    content: (
     <span></span>
    ),
    styles: [{
        "transform":"rotate(0deg)",
        "width":"20vh",
        "border":"none",
        "background-color":"rgb(0, 40, 100)"
      },
      {
        "transform":"rotate(90deg)",
        "width":"0vh",
        "background-color":"rgb(0, 40, 100)"
      }]
  },
  { // 44
    content: (
     <span></span>
    ),
    styles: [{
        "transform":"rotate(0deg)",
        "width":"20vh",
        "border":"none",
        "background-color":"rgb(0, 40, 100)"
      },
      {
        "transform":"rotate(90deg)",
        "width":"0vh",
        "background-color":"rgb(0, 40, 100)"
      }]
  },
  { // 45
    content: (
     <span></span>
    ),
    styles: [{
      "background":"url(./images/pat2.jpeg)",
      "opacity":"1"
    },
    {
      "background":"url(./images/pat2.jpeg)",
      "opacity":"0"
    }]  
  },
  { // 46
    content: (
     <span></span>
    ),
    styles: [{
      "background-color":"rgb(150, 255, 100)"
    },
    {
      "background-color":"rgb(50, 100, 50)"
    }]
  },
  { // 47
    content: (
     <span></span>
    ),
    styles: [{
      "background":"url(./images/pat2.jpeg)",
      "filter":"blur(0px)"
    },
    {
      "background":"url(./images/pat2.jpeg)",
      "filter":"blur(20px)"
    }]  
  },
  { // 48
    content: (
     <span></span>
    ),
    styles: [{
      "background-color":"rgb(150, 255, 250)"
    },
    {
    "background-color":"rgb(250, 30, 100)"
    }]
  },
  { // 49
    content: (
        <span style={{"margin": "auto", width: "100%", textAlign: "center", display: "block", fontSize: "50px"}}>____</span>
    ),
    styles: [{
        color:"rgb(100, 0, 50)",
        "background-color":"rgb(150, 255, 250)"
    },
    {
        color:"rgb(200, 100, 50)",
      "background-color":"rgb(50, 100, 50)"
    }]
  },
  { // 50
    content: (
        <span style={{"margin": "auto", width: "100%", textAlign: "center", display: "block", fontSize: "50px"}}>DANG</span>
    ),
    styles: [{
        fontFamily:'fantasy'
    },
    {
        fontFamily:'serif'
    },
    {
        fontFamily:'cursive'
    },
    {
        fontFamily:'sans-serif'
    },
    {
        fontFamily:'monospace'
    }]
  },
]