
const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.toString());
// console.log(window.location.search)

let iframe = document.getElementById("frame");
// console.log(iframe.src)

if(Object.keys(urlParams).length == 0) {
    // console.log("null")
    iframe.src = iframe.src + "?0=a"
    // console.log(iframe.src)
} else {
    // let index = Object.keys(urlParams).length;
    // iframe.src = iframe.src + `${index}=a&`;
}
// console.log(iframe.src);

