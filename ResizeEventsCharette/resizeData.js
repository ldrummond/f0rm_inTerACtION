import React from 'react'
import $ from 'jquery'

let scale = function(domain, range) {
    var istart = domain[0],
        istop  = domain[1],
        ostart = range[0],
        ostop  = range[1];
  
    return function scale(value) {
      return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
    }
}


let scaleWidth = function(range){
    var istart = xDomain[0],
        istop  = xDomain[1],
        ostart = range[0],
        ostop  = range[1];
  
    return function scale(value) {
      return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
    }
  };

//
// Range Array
let scaleHeight = function(range){
    var istart = yDomain[0],
        istop  = yDomain[1],
        ostart = range[0],
        ostop  = range[1];
  
    return function scale(value) {
      return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
    }
  };

let xDomain = [0, 1400];
let yDomain = [0, 1000]; 

export const resizeData = [
// {
//     "content": (<React.Fragment>
//         <video id="testVid" width="320" height="240" autoPlay loop><source src="./assets/cradle1.mp4" type="video/mp4"></source></video><h2>Sound on!</h2>
//         </React.Fragment>),
//     "placeholder": "",
//     "style": {
//         "background":"none"
//     },
//     "resizeFn": (width, height) => {
//         let timeScale = scale([400, 1400], [0.1, 2])
//         let testVid = $("#testVid")
//         console.log(testVid)

//         if(testVid.length > 0) {
//             if(testVid[0].loop == true) {
//                 testVid[0].loop = false; 

//                 testVid.bind("ended", function() {
//                     console.log("ended")
//                     this.currentTime = 0;
//                     this.play();
//                     this.playbackRate = timeScale($(window).width())
//                 })
//             } 
//             testVid[0].playbackRate = timeScale(width);
//         }
//         return (
//             {
//                 "width": "300px",
//                 "height": "200px",
//             }
//         )
//     }
// }, // 0.
{
    "content": "",
    "placeholder": "",
    "style": {
        "backgroundColor":"green"
    },
    "resizeFn": (width, height) => {
        let widthPer = width / 1400; 
        let heightPer = height / 1000; 

        return (
            {"transform" : `scale(${2 * 1 / heightPer}, ${2 * 1 / widthPer})`}
        )
    }
}, // 1.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        let widthPer = width / 1400; 
        let heightPer = height / 1000; 

        return (
            {"backgroundColor" : `rgb(${255 * widthPer}, ${255 * heightPer}, ${255 * (widthPer - heightPer / 2)})`}
        )
    }
}, // 2.
{
    "content": "space",
    "placeholder": "",
    "style": {
        "background":"none",
        "textAlign": "center",
        "fontSize": 60,
    },
    "resizeFn": (width, height) => {
        let leadScaleWidth = scaleWidth([200, -50]); 
        let leadScaleHeight = scaleWidth([200, -50]); 

        return (
            {"letterSpacing" : `${leadScaleWidth(width) + leadScaleHeight(height)}px`}
        )
    }
}, // 3.
{
    "content": (<React.Fragment><h1>Hey!</h1></React.Fragment>),
    "placeholder": "",
    "style": {
        "display":"flex",
        // "mixBlendMode":"difference",
        "color" : "white",
    },
    "resizeFn": (width, height) => {
        let widthPer = width / 1400; 
        let heightPer = height / 1000; 
        let scaleBlur = scale([500, 1400], [0, 10]);

        return (
            {
                "filter" : `blur(${scaleBlur(width)}px)`,
                "backgroundColor" : `rgb(${255 * widthPer}, ${255 * heightPer}, ${255 * (widthPer - heightPer / 2)})`,
        })
    }
}, // 4.
{
    "content": (
        <React.Fragment>
            <div style={{background: "red", "transform": "scale(8) translate(30px, -50)", "mixBlendMode":"multiply",}}>b</div>
            <div style={{background: "orange", "transform": "scale(4) translate(-10px)", "mixBlendMode":"multiply",}}>a</div>
            <div style={{background: "gold", "transform": "scale(7) translate(50px)", "mixBlendMode":"multiply",}}>c</div>
        </React.Fragment>),
    "placeholder": "",
    "style": {
        "background": "yellow",
        
    },
    "resizeFn": (width, height) => {
        return (
            {"width" : `${width}px`}
        )
    }
}, // 5.
{
    "content": "<",
    "placeholder": "",
    "style": {
        "background":"none",
        "height": "80%",
        "fontSize": "100px"
    },
    "resizeFn": (width, height) => {
        let skewX = width % 30;
        let skewY = height % 30; 

        let skewScaleW = scaleWidth([0, 90])
        let skewScaleH = scaleHeight([0, 90])

        return (
            {"transform" : `skew(${skewScaleW(width)}deg, ${skewScaleH(height)}deg)`}
        )
    }
}, // 6.
{
    "content": (<React.Fragment>
        <video id="testVid" width="320" height="240" autoPlay loop><source src="./assets/cradle1.mp4" type="video/mp4"></source></video><h2>Sound on!</h2>
        </React.Fragment>),
    "placeholder": "",
    "style": {
        "background":"none"
    },
    "resizeFn": (width, height) => {
        let timeScale = scale([400, 1400], [0.1, 2])
        let testVid = $("#testVid")
        console.log(testVid)

        if(testVid.length > 0) {
            if(testVid[0].loop == true) {
                testVid[0].loop = false; 

                testVid.bind("ended", function() {
                    console.log("ended")
                    this.currentTime = 0;
                    this.play();
                    this.playbackRate = timeScale($(window).width())
                    
                })
            } 
            testVid[0].playbackRate = timeScale(width);
        }
        return (
            {
                "width": "300px",
                "height": "200px",
            }
        )
    }
}, // 7.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 8.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 9.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 10.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 11.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 12.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 13.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 14.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 15.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 16.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 17.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 18.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 19.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 20.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 21.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 22.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 23.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 24.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 25.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 26.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 27.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 28.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 29.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 30.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 31.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 32.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 33.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 34.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 35.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 36.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 37.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 38.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 39.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 40.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 41.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 42.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 43.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 44.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 45.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 46.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 47.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 48.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}, // 49.
{
    "content": "",
    "placeholder": "",
    "style": {
        "":""
    },
    "resizeFn": (width, height) => {
        return (
            {"transform" : `rotate(${width / 100}deg)`}
        )
    }
}] // 50.