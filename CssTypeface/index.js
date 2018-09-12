import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'

const characterSet = [
  {
    character: "A", 
    path : [
      {
        type: "b0",
        top: 1,
        left: 1,
      },
       {
        type: "b1",
        top: 1,
        left: 2
      },
      {
        type: "b0",
        top: 1,
        left: 3,
      },
       {
        type: "b0",
        top: 2,
        left: 1
      },
      {
        type: "b3",
        top: 2,
        left: 2,
      },
       {
        type: "b0",
        top: 2,
        left: 3
      },
      {
        type: "b1",
        top: 3,
        left: 1,
      },
       {
        type: "b0",
        top: 3,
        left: 2
      },
      {
        type: "b1",
        top: 3,
        left: 3
      },
    ],
  },
  {
    character: "B", 
    path : [
      {
        type: "b1",
        top: 1,
        left: 1,
      },
       {
        type: "b3",
        top: 1,
        left: 2
      },
      {
        type: "b2",
        top: 1,
        left: 3,
      },
       {
        type: "b2",
        top: 2,
        left: 1
      },
      {
        type: "b2",
        top: 2,
        left: 2,
      },
       {
        type: "b3",
        top: 2,
        left: 3
      },
      {
        type: "b1",
        top: 3,
        left: 1,
      },
       {
        type: "b3",
        top: 3,
        left: 2
      },
      {
        type: "b2",
        top: 3,
        left: 3
      },
    ],
  },
  {
    character: "C", 
    path : [
      {
        type: "b2",
        top: 1,
        left: 1,
      },
       {
        type: "b1",
        top: 1,
        left: 2
      },
      {
        type: "b2",
        top: 1,
        left: 3,
      },
       {
        type: "b1",
        top: 2,
        left: 1
      },
      {
        type: "b0",
        top: 2,
        left: 2,
      },
       {
        type: "b0",
        top: 2,
        left: 3
      },
      {
        type: "b2",
        top: 3,
        left: 1,
      },
       {
        type: "b1",
        top: 3,
        left: 2
      },
      {
        type: "b2",
        top: 3,
        left: 3
      },
    ],
  },
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
  {
    character: "E", 
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
        type: "b3",
        top: 1,
        left: 3,
      },
       {
        type: "b2",
        top: 2,
        left: 1
      },
      {
        type: "b2",
        top: 2,
        left: 2,
      },
       {
        type: "b0",
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
        type: "b3",
        top: 3,
        left: 3
      },
    ],
  },
  {
    character: "F", 
    path : [
      {
        type: "b1",
        top: 1,
        left: 1,
      },
       {
        type: "b0",
        top: 1,
        left: 2
      },
      {
        type: "b1",
        top: 1,
        left: 3,
      },
       {
        type: "b2",
        top: 2,
        left: 1
      },
      {
        type: "b3",
        top: 2,
        left: 2,
      },
       {
        type: "b0",
        top: 2,
        left: 3
      },
      {
        type: "b1",
        top: 3,
        left: 1,
      },
       {
        type: "b0",
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
  {
    character: "G", 
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
        type: "b2",
        top: 1,
        left: 3,
      },
       {
        type: "b2",
        top: 2,
        left: 1
      },
      {
        type: "b3",
        top: 2,
        left: 2,
      },
       {
        type: "b3",
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
        type: "b1",
        top: 3,
        left: 3
      },
    ],
  },
  {
    character: "H", 
    path : [
      {
        type: "b1",
        top: 1,
        left: 1,
      },
       {
        type: "b0",
        top: 1,
        left: 2
      },
      {
        type: "b1",
        top: 1,
        left: 3,
      },
       {
        type: "b2",
        top: 2,
        left: 1
      },
      {
        type: "b3",
        top: 2,
        left: 2,
      },
       {
        type: "b2",
        top: 2,
        left: 3
      },
      {
        type: "b1",
        top: 3,
        left: 1,
      },
       {
        type: "b0",
        top: 3,
        left: 2
      },
      {
        type: "b1",
        top: 3,
        left: 3
      },
    ],
  },
  {
    character: "I", 
    path : [
      {
        type: "b0",
        top: 1,
        left: 1,
      },
       {
        type: "b1",
        top: 1,
        left: 2
      },
      {
        type: "b0",
        top: 1,
        left: 3,
      },
       {
        type: "b0",
        top: 2,
        left: 1
      },
      {
        type: "b2",
        top: 2,
        left: 2,
      },
       {
        type: "b0",
        top: 2,
        left: 3
      },
      {
        type: "b0",
        top: 3,
        left: 1,
      },
       {
        type: "b1",
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
  {
    character: "J", 
    path : [
      {
        type: "b0",
        top: 1,
        left: 1,
      },
       {
        type: "b0",
        top: 1,
        left: 2
      },
      {
        type: "b1",
        top: 1,
        left: 3,
      },
       {
        type: "b0",
        top: 2,
        left: 1
      },
      {
        type: "b0",
        top: 2,
        left: 2,
      },
       {
        type: "b2",
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
        type: "b1",
        top: 3,
        left: 3
      },
    ],
  },
  {
    character: "K", 
    path : [
      {
        type: "b1",
        top: 1,
        left: 1,
      },
       {
        type: "b0",
        top: 1,
        left: 2
      },
      {
        type: "b2",
        top: 1,
        left: 3,
      },
       {
        type: "b2",
        top: 2,
        left: 1
      },
      {
        type: "b2",
        top: 2,
        left: 2,
      },
       {
        type: "b0",
        top: 2,
        left: 3
      },
      {
        type: "b1",
        top: 3,
        left: 1,
      },
       {
        type: "b0",
        top: 3,
        left: 2
      },
      {
        type: "b2",
        top: 3,
        left: 3
      },
    ],
  },
  {
    character: "L", 
    path : [
      {
        type: "b1",
        top: 1,
        left: 1,
      },
       {
        type: "b0",
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
        type: "b0",
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
        type: "b1",
        top: 3,
        left: 3
      },
    ],
  },
  {
    character: "M", 
    path : [
      {
        type: "b3",
        top: 1,
        left: 1,
      },
       {
        type: "b0",
        top: 1,
        left: 2
      },
      {
        type: "b3",
        top: 1,
        left: 3,
      },
       {
        type: "b2",
        top: 2,
        left: 1
      },
      {
        type: "b3",
        top: 2,
        left: 2,
      },
       {
        type: "b2",
        top: 2,
        left: 3
      },
      {
        type: "b1",
        top: 3,
        left: 1,
      },
       {
        type: "b0",
        top: 3,
        left: 2
      },
      {
        type: "b1",
        top: 3,
        left: 3
      },
    ],
  },
  {
    character: "N", 
    path : [
      {
        type: "b3",
        top: 1,
        left: 1,
      },
       {
        type: "b0",
        top: 1,
        left: 2
      },
      {
        type: "b1",
        top: 1,
        left: 3,
      },
       {
        type: "b2",
        top: 2,
        left: 1
      },
      {
        type: "b3",
        top: 2,
        left: 2,
      },
       {
        type: "b2",
        top: 2,
        left: 3
      },
      {
        type: "b1",
        top: 3,
        left: 1,
      },
       {
        type: "b0",
        top: 3,
        left: 2
      },
      {
        type: "b3",
        top: 3,
        left: 3
      },
    ],
  },
  {
    character: "O", 
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
        type: "b1",
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
        type: "b2",
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
        type: "b1",
        top: 3,
        left: 3
      },
    ],
  },
  {
    character: "P", 
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
        type: "b1",
        top: 1,
        left: 3,
      },
       {
        type: "b2",
        top: 2,
        left: 1
      },
      {
        type: "b2",
        top: 2,
        left: 2,
      },
       {
        type: "b2",
        top: 2,
        left: 3
      },
      {
        type: "b1",
        top: 3,
        left: 1,
      },
       {
        type: "b0",
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
  {
    character: "Q", 
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
        type: "b1",
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
        type: "b2",
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
        type: "b3",
        top: 3,
        left: 3
      },
    ],
  },
  {
    character: "R", 
    path : [
      {
        type: "b1",
        top: 1,
        left: 1,
      },
       {
        type: "b0",
        top: 1,
        left: 2
      },
      {
        type: "b1",
        top: 1,
        left: 3,
      },
       {
        type: "b1",
        top: 2,
        left: 1
      },
      {
        type: "b3",
        top: 2,
        left: 2,
      },
       {
        type: "b0",
        top: 2,
        left: 3
      },
      {
        type: "b1",
        top: 3,
        left: 1,
      },
       {
        type: "b0",
        top: 3,
        left: 2
      },
      {
        type: "b3",
        top: 3,
        left: 3
      },
    ],
  },
  {
    character: "S", 
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
        type: "b3",
        top: 1,
        left: 3,
      },
       {
        type: "b2",
        top: 2,
        left: 1
      },
      {
        type: "b3",
        top: 2,
        left: 2,
      },
       {
        type: "b2",
        top: 2,
        left: 3
      },
      {
        type: "b3",
        top: 3,
        left: 1,
      },
       {
        type: "b2",
        top: 3,
        left: 2
      },
      {
        type: "b1",
        top: 3,
        left: 3
      },
    ],
  },
  {
    character: "T", 
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
        type: "b1",
        top: 1,
        left: 3,
      },
       {
        type: "b0",
        top: 2,
        left: 1
      },
      {
        type: "b3",
        top: 2,
        left: 2,
      },
       {
        type: "b0",
        top: 2,
        left: 3
      },
      {
        type: "b0",
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
  {
    character: "U", 
    path : [
      {
        type: "b1",
        top: 1,
        left: 1,
      },
       {
        type: "b0",
        top: 1,
        left: 2
      },
      {
        type: "b1",
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
        type: "b2",
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
        type: "b1",
        top: 3,
        left: 3
      },
    ],
  },
  {
    character: "V", 
    path : [
      {
        type: "b1",
        top: 1,
        left: 1,
      },
       {
        type: "b0",
        top: 1,
        left: 2
      },
      {
        type: "b1",
        top: 1,
        left: 3,
      },
       {
        type: "b0",
        top: 2,
        left: 1
      },
      {
        type: "b0",
        top: 2,
        left: 2,
      },
       {
        type: "b0",
        top: 2,
        left: 3
      },
      {
        type: "b0",
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
  {
    character: "W", 
    path : [
      {
        type: "b2",
        top: 1,
        left: 1,
      },
       {
        type: "b0",
        top: 1,
        left: 2
      },
      {
        type: "b2",
        top: 1,
        left: 3,
      },
       {
        type: "b0",
        top: 2,
        left: 1
      },
      {
        type: "b3",
        top: 2,
        left: 2,
      },
       {
        type: "b0",
        top: 2,
        left: 3
      },
      {
        type: "b3",
        top: 3,
        left: 1,
      },
       {
        type: "b0",
        top: 3,
        left: 2
      },
      {
        type: "b3",
        top: 3,
        left: 3
      },
    ],
  },
  {
    character: "X", 
    path : [
      {
        type: "b1",
        top: 1,
        left: 1,
      },
       {
        type: "b0",
        top: 1,
        left: 2
      },
      {
        type: "b1",
        top: 1,
        left: 3,
      },
       {
        type: "b0",
        top: 2,
        left: 1
      },
      {
        type: "b1",
        top: 2,
        left: 2,
      },
       {
        type: "b0",
        top: 2,
        left: 3
      },
      {
        type: "b1",
        top: 3,
        left: 1,
      },
       {
        type: "b0",
        top: 3,
        left: 2
      },
      {
        type: "b1",
        top: 3,
        left: 3
      },
    ],
  },
  {
    character: "Y", 
    path : [
      {
        type: "b1",
        top: 1,
        left: 1,
      },
       {
        type: "b0",
        top: 1,
        left: 2
      },
      {
        type: "b1",
        top: 1,
        left: 3,
      },
       {
        type: "b0",
        top: 2,
        left: 1
      },
      {
        type: "b2",
        top: 2,
        left: 2,
      },
       {
        type: "b0",
        top: 2,
        left: 3
      },
      {
        type: "b0",
        top: 3,
        left: 1,
      },
       {
        type: "b1",
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
  {
    character: "Z", 
    path : [
      {
        type: "b3",
        top: 1,
        left: 1,
      },
       {
        type: "b2",
        top: 1,
        left: 2
      },
      {
        type: "b1",
        top: 1,
        left: 3,
      },
       {
        type: "b0",
        top: 2,
        left: 1
      },
      {
        type: "b3",
        top: 2,
        left: 2,
      },
       {
        type: "b0",
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
        type: "b3",
        top: 3,
        left: 3
      },
    ],
  },
  {
    character: "0", 
    path : [
      {
        type: "b2",
        top: 1,
        left: 1,
      },
       {
        type: "b1",
        top: 1,
        left: 2
      },
      {
        type: "b2",
        top: 1,
        left: 3,
      },
       {
        type: "b1",
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
        type: "b2",
        top: 3,
        left: 1,
      },
       {
        type: "b1",
        top: 3,
        left: 2
      },
      {
        type: "b2",
        top: 3,
        left: 3
      },
    ],
  },
  {
    character: "1", 
    path : [
      {
        type: "b2",
        top: 1,
        left: 1,
      },
       {
        type: "b1",
        top: 1,
        left: 2
      },
      {
        type: "b0",
        top: 1,
        left: 3,
      },
       {
        type: "b0",
        top: 2,
        left: 1
      },
      {
        type: "b2",
        top: 2,
        left: 2,
      },
       {
        type: "b0",
        top: 2,
        left: 3
      },
      {
        type: "b0",
        top: 3,
        left: 1,
      },
       {
        type: "b1",
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
  {
    character: "2", 
    path : [
      {
        type: "b3",
        top: 1,
        left: 1,
      },
       {
        type: "b3",
        top: 1,
        left: 2
      },
      {
        type: "b2",
        top: 1,
        left: 3,
      },
       {
        type: "b3",
        top: 2,
        left: 1
      },
      {
        type: "b3",
        top: 2,
        left: 2,
      },
       {
        type: "b2",
        top: 2,
        left: 3
      },
      {
        type: "b3",
        top: 3,
        left: 1,
      },
       {
        type: "b3",
        top: 3,
        left: 2
      },
      {
        type: "b3",
        top: 3,
        left: 3
      },
    ],
  },
  {
    character: "3", 
    path : [
      {
        type: "b3",
        top: 1,
        left: 1,
      },
       {
        type: "b2",
        top: 1,
        left: 2
      },
      {
        type: "b1",
        top: 1,
        left: 3,
      },
       {
        type: "b0",
        top: 2,
        left: 1
      },
      {
        type: "b3",
        top: 2,
        left: 2,
      },
       {
        type: "b2",
        top: 2,
        left: 3
      },
      {
        type: "b3",
        top: 3,
        left: 1,
      },
       {
        type: "b2",
        top: 3,
        left: 2
      },
      {
        type: "b1",
        top: 3,
        left: 3
      },
    ],
  },
  {
    character: "4", 
    path : [
      {
        type: "b2",
        top: 1,
        left: 1,
      },
       {
        type: "b0",
        top: 1,
        left: 2
      },
      {
        type: "b2",
        top: 1,
        left: 3,
      },
       {
        type: "b1",
        top: 2,
        left: 1
      },
      {
        type: "b2",
        top: 2,
        left: 2,
      },
       {
        type: "b1",
        top: 2,
        left: 3
      },
      {
        type: "b0",
        top: 3,
        left: 1,
      },
       {
        type: "b0",
        top: 3,
        left: 2
      },
      {
        type: "b2",
        top: 3,
        left: 3
      },
    ],
  },
  {
    character: "5", 
    path : [
      {
        type: "b3",
        top: 1,
        left: 1,
      },
       {
        type: "b3",
        top: 1,
        left: 2
      },
      {
        type: "b3",
        top: 1,
        left: 3,
      },
       {
        type: "b3",
        top: 2,
        left: 1
      },
      {
        type: "b2",
        top: 2,
        left: 2,
      },
       {
        type: "b1",
        top: 2,
        left: 3
      },
      {
        type: "b3",
        top: 3,
        left: 1,
      },
       {
        type: "b2",
        top: 3,
        left: 2
      },
      {
        type: "b1",
        top: 3,
        left: 3
      },
    ],
  },
  {
    character: "6", 
    path : [
      {
        type: "b2",
        top: 1,
        left: 1,
      },
       {
        type: "b1",
        top: 1,
        left: 2
      },
      {
        type: "b2",
        top: 1,
        left: 3,
      },
       {
        type: "b1",
        top: 2,
        left: 1
      },
      {
        type: "b2",
        top: 2,
        left: 2,
      },
       {
        type: "b2",
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
        type: "b1",
        top: 3,
        left: 3
      },
    ],
  },
  {
    character: "7", 
    path : [
      {
        type: "b3",
        top: 1,
        left: 1,
      },
       {
        type: "b2",
        top: 1,
        left: 2
      },
      {
        type: "b1",
        top: 1,
        left: 3,
      },
       {
        type: "b0",
        top: 2,
        left: 1
      },
      {
        type: "b2",
        top: 2,
        left: 2,
      },
       {
        type: "b0",
        top: 2,
        left: 3
      },
      {
        type: "b2",
        top: 3,
        left: 1,
      },
       {
        type: "b0",
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
  {
    character: "8", 
    path : [
      {
        type: "b2",
        top: 1,
        left: 1,
      },
       {
        type: "b2",
        top: 1,
        left: 2
      },
      {
        type: "b2",
        top: 1,
        left: 3,
      },
       {
        type: "b1",
        top: 2,
        left: 1
      },
      {
        type: "b2",
        top: 2,
        left: 2,
      },
       {
        type: "b1",
        top: 2,
        left: 3
      },
      {
        type: "b2",
        top: 3,
        left: 1,
      },
       {
        type: "b2",
        top: 3,
        left: 2
      },
      {
        type: "b2",
        top: 3,
        left: 3
      },
    ],
  },
  {
    character: "9", 
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
        type: "b1",
        top: 1,
        left: 3,
      },
       {
        type: "b2",
        top: 2,
        left: 1
      },
      {
        type: "b2",
        top: 2,
        left: 2,
      },
       {
        type: "b2",
        top: 2,
        left: 3
      },
      {
        type: "b0",
        top: 3,
        left: 1,
      },
       {
        type: "b0",
        top: 3,
        left: 2
      },
      {
        type: "b2",
        top: 3,
        left: 3
      },
    ],
  },
]

export class App extends React.Component {
  constructor() {
    super()
  }  
  
  onTextClick() {
    this.setState(function (prevState, prevProps){return ({showingText : !prevState.showingText})})
  }

  render() {
    this.characterMarkup = characterSet.map(elem => {
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
              <span className="shapeWrapper">
                <span className="b1" key={`${elem.character}${index}`} style={_style}></span>
              </span>)
            break;
          case "b2":
            charElems.push(
              <span className="shapeWrapper">
                <span className="b2" key={`${elem.character}${index}`} style={_style}></span>
              </span>)
            break;
          case "b3":
            charElems.push(
            <span className="shapeWrapper">
              <span className="b3" key={`${elem.character}${index}`} style={_style}></span>
            </span>)
            break;
          case "b0":
          default: 
            charElems.push(
            <span className="shapeWrapper">
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
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);