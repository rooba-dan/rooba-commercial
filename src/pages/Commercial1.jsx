import React from 'react'
import "./Commercial1.css"
import { MdOutlineArrowRightAlt } from "react-icons/md";


function Commercial1() {
  return (
    <>



      <div  className='Commercial'>

      <div>  <button  className="button-button-1">Start Creating <MdOutlineArrowRightAlt />
      </button></div> 

    <div className='navbar'>  
  <a className="navbar-brand" href="#">Choose Type of Fund</a><br />
  <span className="text-red-300 font-abel text-base font-normal leading-[17.84px] text-left">
  Choose one to continue*
</span>
</div>

<div className='Commercial-1'>

        <div className='h1'>
          <div className="underline-small-1"><h1 >Private Equity</h1></div>
          <br /><br />
          <div className="radio-container-1">
            <label className='p'><input type="radio" /> <span className='span'>AIF</span></label>
            <br /><br />
            <label className='p'><input type="radio" /><span className='span'> Other</span></label>
          </div>
          <button className='button-1' type="button"  >Submit</button>

        </div>
        <div className='h2'>
          <div className="underline-small"><h1 >Real Estate</h1></div>
          <br /><br />
          <div className="radio-container">
            <label className='p'><input type="radio" /> <span className='span'> Residential</span></label>
            <br /><br />
            <label className='p'><input type="radio" /><span className='span'> Commercial</span> </label>
            <br /><br />
            <label className='p'><input type="radio" /><span className='span'> Agricultural</span> </label>
            <br /><br />
            <label className='p'><input type="radio" /> <span className='span'> Other</span></label>
          </div>
          <button className='button' type="button"  >Submit</button>
        </div>

      </div>
      </div>
    </>

  )
}

export default Commercial1