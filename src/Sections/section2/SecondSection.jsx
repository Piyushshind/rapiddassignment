import React from 'react'
import './SecondSection.css';
import { MdOutlineForwardToInbox } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";

const SecondSection = () => {
  return (
    <>
      <div className='main-wrapper'>
        <div className="heading-content" ><h1><span className="head">Proident anim</span> nor nulla iste.</h1></div>
        <div className="containt-container">
          <div className="middle-para">
            <p>Minim modi yet omnis nor quia so minima.</p>
          </div>
          <div className="inner-blocks-container">
            <div className="inner-blocks"> <MdOutlineForwardToInbox />Ipsom Lorem</div>
            <div className="inner-blocks2"> <AiOutlineLink />Ipsom Lorem</div>
            <div className="inner-blocks3"> <MdOutlineLocationOn />Ipsom Lorem</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SecondSection;