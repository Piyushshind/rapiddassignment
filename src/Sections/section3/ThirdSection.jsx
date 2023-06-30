import React from 'react';
import "./ThirdSection.css";
import { AiOutlineLink } from "react-icons/ai";


const ThirdSection = () => {

  return (
    <>
      <div className="section-wrapper">
        <div className="first-img-container">
           <img src="Nature.png" alt='nature' />
          <div className='first-container-btn'>
                <span><AiOutlineLink />Ipsum Lorem</span>
                <span><AiOutlineLink />Ipsum Lorem</span>
                <span><AiOutlineLink />Ipsum Lorem</span>
            </div>
        </div>
        <div className="second-img-div">
        <div id='section2' className='second-right-div-content'>
                <h4>Numquam.<span>Esse aliquip do, magni</span></h4>
                <h3>Minima ad for vitae sit</h3>
                <a href='/'>Ipsum Lorem</a>
            </div>

          <div className="second-img-container">
            <img src='mountain.png' alt='mountain'/>
            <div className="second-div-btn">
                     <button > <span><AiOutlineLink /> </span>Ipsom Lorem</button>
                    <p>Adipiscing unde vel so dolore consequatur.</p>
                    <a href='#section2'>Ipsum Lorem</a>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ThirdSection;