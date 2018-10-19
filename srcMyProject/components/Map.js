import React from 'react'

export default class Map extends React.Component {
  render() {
   const {activities} = this.props
   console.log(activities)
    return (
      <div>
        {
          activities.map((activity) => {
            return (
              <div className='h'>
                <h1>{activity.name}</h1>
                <h1>{activity.email}</h1>
              </div>
            )
          })
        }
      </div>
    )
  }
}

