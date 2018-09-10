import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'

const data = [
  {
    type: "text",
    title: "test",
    copy: "13r",
  },
  {
    type: "image",
    image: "poop.jpg",
  },
  {
    type: "image",
    image: "party",
  },
  {
    type: "text",
    title: "1213",
    copy: "asdas"
  },
  {
    type: "text",
    title: "test",
    copy: "13r",
  },
  {
    type: "image",
    image: "poop.jpg",
  },
  {
    type: "image",
    image: "party",
  },
  {
    type: "text",
    title: "1213",
    copy: "asdas"
  },
  {
    type: "text",
    title: "test",
    copy: "13r",
  },
  {
    type: "image",
    image: "poop.jpg",
  },
  {
    type: "image",
    image: "party",
  },
  {
    type: "text",
    title: "1213",
    copy: "asdas"
  },
]

export class App extends React.Component {
  constructor() {
    super()

    this.gridMarkup = []
    data.map(item => {
      this.gridMarkup.push(
        <GridItem
          text={item.type === "text" && {title: item.title, copy: item.copy}}
          image={item.type === "image" && item.image}
          other={item.type === "other" && item.other}  
        >
        </GridItem>)
    })
  }  
  
  render() {
    return(
      <div className='site-wrapper' onMouseMove={this.onMouseMove}>
        <div className='site-inner'>
          {this.gridMarkup}
        </div>
      </div>
    )
  }
}

class GridItem extends React.Component {
  constructor(props) {
    super(props)

    if(props.text) {
      this.contentType = "text"
      this.contentMarkup = (
        <React.Fragment>
          <h2>{props.text.title}</h2>
          <h3>{props.text.copy}</h3>
        </React.Fragment>
      )
    }
    else if(props.image) {
      this.contentType = "image"
      this.contentMarkup = (
        <div style={{backgroundImage: `url(${props.image})`}}></div>
      )
    }
    if(props.other) {
      this.contentType = "other"
      this.contentMarkup = (
        <div>{props.other}</div>
      )
    }
  }

  render() {
    return (
      <div className={`grid-item ${this.contentType}`}>
        {this.contentMarkup}
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);