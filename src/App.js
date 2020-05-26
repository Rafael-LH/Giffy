import React from 'react'
import { Route } from 'wouter'
import './App.css'
import ListOfGifs from './Components/ListOfGifs'
import GifDescription from './Components/GifDescription'

const App = () => (
  <div className="App">
    <Route
      path='/'
      component={ListOfGifs}
    />
    <Route
      path='/gif/:key'
      component={GifDescription}
    />
  </div>
);
export default App;
