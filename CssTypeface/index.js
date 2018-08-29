import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'

const characterSet = {
  "A": {
    path : "",
  },
  "B": {
    path : "",
  },
  "C": {
    path : "",
  },
  "D": {
    path : "",
  },
  "E": {
    path : "",
  },
  "F": {
    path : "",
  },
  "G": {
    path : "",
  },
  "H": {
    path : "",
  },
  "I": {
    path : "",
  },
  "K": {
    path : "",
  },
  "L": {
    path : "",
  },
  "M": {
    path : "",
  },
  "N": {
    path : "",
  },
  "O": {
    path : "",
  },
  "P": {
    path : "",
  },
  "Q": {
    path : "",
  },
  "R": {
    path : "",
  },
  "S": {
    path : "",
  },
  "T": {
    path : "",
  },
  "V": {
    path : "",
  },
  "X": {
    path : "",
  },
  "Y": {
    path : "",
  },
  "Z": {
    path : "",
  },
  "0": {
    path : "",
  },
  "1": {
    path : "",
  },
  "2": {
    path : "",
  },
  "3": {
    path : "",
  },
  "4": {
    path : "",
  },
  "5": {
    path : "",
  },
  "6": {
    path : "",
  },
  "7": {
    path : "",
  },
  "8": {
    path : "",
  },
  "9": {
    path : "",
  },
}

export class App extends React.Component {
  constructor() {
    super()

    this.characterMarkup = []
    for(const key in characterSet) {
      const character = characterSet[key]
      const path = character.path
      let newCharacter = (
        <div className="character">
        {key}
        </div>
      )
      this.characterMarkup.push(newCharacter)
    }
  }  

  render() {
    return(
      <div className='site-wrapper'>
        <div className='site-inner'>
          {this.characterMarkup}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);