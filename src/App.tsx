import React from 'react';

import './App.css';
import {Car} from "./components/Car";

function App() {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    return (
    <div>

      <Car car ={topCars}/>

    </div>
  );
}

export default App;
