import React from 'react';
import Map from './Map'

export default class Practice extends React.Component {
  render() {
    const activities = [{
      name: 'chidera',
      email: 'dexiouz'
    },{
      name:'paul',
      email: 'dexoi@'
    },{
      name:'paul',
      email: 'dexoi@'
    },{
      name:'paul',
      email: 'dexoi@'
    }]
    return (
      <div>
        <Map activities = {activities}/>
      </div>
    )
  }
}