import { useState } from 'react'
import Die from './Die'
import MovieList from './MovieList'
import MissingKey from './MissingKey'
import Counters from './Counter'
import Pokemon from './Pokemon'
import './App.css'

function App() {

  return (
    <>
      <Die sides='4'/>
      <Die sides='6'/>
      <Die sides='8'/>
      <Die sides='10'/>
      <Die sides='12'/>
      <Die sides='20'/>
      <br/>
      <MovieList/>
      <br/>
      <MissingKey/>,
      <br/>
      <Counters/>
      <br/>
      <Pokemon num='5'/>
    </>
  )
}

export default App
