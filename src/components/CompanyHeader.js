import React, { Component } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaJs} from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';

import { FaHtml5 } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../styles/CompanyHeader.css'
export default class CompanyHeader extends Component {
  render() {
    return (
    
      <div className='main'>
      <div className="main1">
        <div className='first'>
          <div className='firstInner'>
            <h1>LearnFactory Nigeria</h1>
            <h4>Grooming Creators and Software Craftsmen</h4>
            <h5>Learn. Think. Code</h5>
          </div>
        </div>
        <div className='second'>
        <div className="secondInner">
          <h2 className='companyCategory'>Software Company</h2>
          <p>Core: <span>Training, Mobile Apps, Websites and Business Solutions</span></p>


          <div className='techWtIcon'> <p>Technologies:</p><span className='techIcons'><FaJs/> <FaHtml5/> <FaCss3/> <FaReact/> <FaNodeJs/> <FaPython/></span></div>


          
          <p>Facts: <span> 250+ Projects Completed, 150+ Benefactors, 400+ Happy Clients </span></p>
          <p>Partners: <span>Re:LiFE, Hack Reactor, You Win, Microsoft BizSpark.</span></p>
          <p> <span>At LearnFactory Nigeria, our mission is to always add value to our clients’ operations by offering innovative IT solutions that will help maximise their business growth… We build solutions that lead their various industries and remain at the top for a long time.
Start your next project with us today, You’ll be glad you did!</span></p>
          <p>Our Creed: <span>A Great Man lives by the Integrity of his heart (Character) and the Skilfulness of his hands (Capacity).
  
  Great Men Do Great Work.
  
We are Committed to Grooming Great Men with Character and Capacity! </span></p>


          <div className="connect1">
            <h6>connect</h6>
            <p><span>Brass Umungasi</span></p>
            <p><span contentEditable >4 staff members</span></p>
            <p><span>Branches</span></p>
          </div>

          <div className="connect">
            <h6>connect</h6>
            <div className='icons'><FaFacebook /></div>
            <div className='icons'><FaTwitter /></div>
            <div className='icons'><FaInstagram /></div>
          </div>

        </div>
        </div>
        </div>
      </div>
    )
  }
}