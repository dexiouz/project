import React, { Component } from 'react';
import CardEg from './Card'
export default class Interns extends Component {
	render() {
		return (
				<div>
					 <div className='interns' >
          <div className='internPictures' >
          <CardEg  image={require('../images/DSC_0096-1052x592.JPG')} 
            name = 'Favour'faculty='Favour George' desc='Explore'/>
            <CardEg  image={require('../images/DSC_0096-1052x592.JPG')} name ='Favour George' faculty='Favour George' desc='Explore'/>
            <CardEg  image={require('../images/DSC_0096-1052x592.JPG')} name = 'Favour George' faculty='Favour George' desc='Explore' />
          </div>
        </div> 
				</div>
        )
	}
}