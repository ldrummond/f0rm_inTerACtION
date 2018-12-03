const searchParam = "numberOfIframes";

function getCurrentIteration() {
    const searchParams = new URLSearchParams(window.location.search);
    const iterationIndex = searchParams.get(searchParam); 
    if(iterationIndex === null) {
        return false; 
    } else {
        return iterationIndex;
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    // 1). Get iteration from query param and iframe. 
    let iIndex = getCurrentIteration(); 
    let iframe = document.getElementById("frame");

    // 2). BASE CASE. If there is no Search Param, or you are at the base case, hide the iframe and return. 
    if(!iIndex || iIndex == 0) {iframe.style.display = "none"; return}

    // 
    // 3). Do whatever to each iframe here. iIndex gives you the current iteration. Html and css will also affect each iframe
    // *****************************************
    let styles = {}; 
    // styles.background = `rgb(${10 * iIndex}, 0, ${10 * iIndex})`;

    // window.addEventListener("scroll", () => {
    //     console.log("scoll")
    //     iframe.style.margin = `${iframe.style.margin+2}px`; 
    // })

    // window.addEventListener("mouseover", () => {
    //     console.log("scoll")
    //     iframe.style.margin = `${iframe.style.margin+2}px`; 
    // })




    Object.assign(iframe.style, styles); // Assign the iframe the contents of the styles object. 
    // *****************************************
    // 4). Recurse
    let baseUrl = window.location.pathname
    iframe.src = baseUrl + `?${searchParam}=${iIndex - 1}`;
});