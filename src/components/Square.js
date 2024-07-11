//related to tic-tac-toe

import React from 'react';
import '../styles.css';
import {useState} from 'react';
console.log("square");
 function Square({value ,onSquareClick})
 {
  
 
  return( <button className="square" onClick={onSquareClick} >{value}</button>);
 }
 console.log("square func",Square);
 export default Square;