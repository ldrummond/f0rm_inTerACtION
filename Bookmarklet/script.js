
if(typeof elements === 'undefined') {
    // let images = document.getElementsByTagName("img")
    let newDom = Array.from(document.getElementsByTagName("img"))
    let newContent = newDom.map(elem => {elem.src = null; return elem})
    console.log(newContent)
    document.body = newContent

    // document.body.appendChild(images)
    // elements.map(elem => {elem.src = null; console.log(elem.src)})
} else {
    elements = Array.from(document.getElementsByTagName("img"))
    elements.map(elem => {elem.src = null; console.log(elem.src)})
}

// // (image => {
// //     image.src = "";
// // })

let grabTypes = ["img", "button", "input", "text", "svg"]

let domGroups = grabTypes.map(type => [...document.getElementsByTagName(type)])
let allNodes = [].concat(...domGroups)

let newNodes = allNodes.map(node => {
    let itemNode = node.cloneNode()
    let domRect = node.getBoundingClientRect()

    console.log(domRect)
    itemNode.style.position = "absolute"
    itemNode.style.left = `${domRect.left}px`
    itemNode.style.top =  `${domRect.top}px`
    itemNode.style.width = `${domRect.width}px`
    itemNode.style.height = `${domRect.height}px`
    return itemNode
})

document.body.innerHTML = ""
newNodes.map(node => document.body.appendChild(node))

// document.body.appendChild(node)
// console.log(newElems)