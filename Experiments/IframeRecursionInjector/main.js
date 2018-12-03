
// function getCurrentIteration() {
//     const searchParams = new URLSearchParams(window.location.search);
//     const iterationIndex = searchParams.get(searchParam); 
//     if(iterationIndex === null) {
//         return false; 
//     } else {
//         return iterationIndex;
//     }
// }

// const searchParam = "i";

// document.addEventListener("DOMContentLoaded", function(event) {
//     // 1). Get iteration from query param and iframe. 
//     let iIndex = getCurrentIteration(); 
//     let iframe = document.createElement("iframe"); 

//     // 2). BASE CASE. If there is no Search Param, or you are at the base case, hide the iframe and return. 
//     if(iIndex < 0) {iframe.style.display = "none"; return}
    
//     // 
//     // 3). Else, modify each iframe here. iIndex gives you the current iteration.
//     // *****************************************

//     // Initial Case: iIndex not defined. Add index to first iframe search param. 
//     if(!iIndex) {iIndex = 20;}

//     let styles = {
//         "position": "absolute",
//         "margin": "20px",
//         "width": "90%",
//         "height": "90%",
//         "background": `rgb(${10 * iIndex}, 0, ${10 * iIndex})`,
//     }

//     Object.assign(iframe.style, styles); // Assign the iframe the contents of the styles object. 
//     // *****************************************
//     // 4). Recurse
//     const baseUrl = window.location.pathname
//     iframe.src = baseUrl + `?${searchParam}=${iIndex - 1}`;
//     document.body.appendChild(iframe)
// });

function recurse(index) {
    if(index <= 0) {return}
    
    let iframe = document.createElement("iframe"); 
    iframe.onload = function() {
        console.log("loaded"); 
        // Iframe
        // frames[0].window.foo = function() {
        //     console.log ("Look at me, executed inside an iframe!", window);
        //     console.log(this, window)
        // }
        // this.contentWindow.foo = function() {
        //     console.log ("Look at me, executed inside an iframe!", window);
        // }
        iframe.contentWindow.foo = recurse;
        iframe.contentWindow.foo(index--)
    }
    
    const baseUrl = window.location.pathname
    iframe.src = baseUrl + `?${"i"}=${2 - 1}`;

    let styles = {
        "position": "absolute",
        "margin": "20px",
        "width": "90%",
        "height": "90%",
        "top": 0,
        "left": 0,
        "zIndex": 1000, 
        "background": `rgb(${10 * 1}, 0, ${10 * 1})`,
    }
    Object.assign(iframe.style, styles); // Assign the iframe the contents of the styles object.
    document.body.appendChild(iframe)
}

document.addEventListener("DOMContentLoaded", recurse(2))
   