import React, { Component } from 'react'
// import './App.css'
import worlddata from './world';
import { geoMercator, geoPath } from 'd3-geo';
import * as styles from './worldmap.css';

class WorldMap extends Component {
   render() {
      const projection = geoMercator()
      const pathGenerator = geoPath().projection(projection)
      const countries = worlddata.features
         .map((d,i) => <path
         key={'path' + i}
         d={pathGenerator(d)}
         className='countries'
         />)
   return <svg preserveAspectRatio="none" >
   {countries}
   </svg>
   }
}
export default WorldMap