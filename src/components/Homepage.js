import React,{useEffect, useRef, useState} from 'react'
import style from '../styles/Homepage.module.css'
import pattern from '../assets/pattern.svg'
import info from '../assets/mail.svg'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const buttonAreaRef = useRef()
  const navigate = useNavigate()

  const mouseHandler = (e) => {
    // console.log("X: ",e.clientX)
    setButtonStyle({right: e.clientX - 300}) 

    setTimeout(()=>{
      setButtonStyle({right: '50%'}) 
    },5000)
  }

  const submitHandler = () => {
    if(userChoosenOption && userInput) {
      navigate(`/result/${userChoosenOption}/${userInput}`)
    }
  }


  const [buttonStyle, setButtonStyle] = useState({})
  const [userInput, setUserInput] = useState()
  const [userChoosenOption, setUserChoosenOption] = useState()

  useEffect(()=>{
    console.log(userChoosenOption)
  },[userChoosenOption])
  
  return (
    <div>
      <main className={style["home-wrapper"]}>

        <aside className={style["left-aside"]}>
          {/* <img alt='ad' src='https://via.placeholder.com/250/000000/FFFFFF/?text=Ad Here' ></img> */}
        </aside>

        <div className={style["center-aside"]}>
          <h1>Easy Pin-code Finder</h1>

          <div className={style["input-wrapper"]}>

            <label htmlFor="searching-method">Searching Method</label>
            <select name="searching-method" onChange={(e)=>setUserChoosenOption(e.target.value)}>
              <option value="" defaultValue={''} >Select an option</option>
              <option value="searchByPincode">Search By Pincode</option>
              <option value="searchByCity">Search By City-Name</option>
            </select>

            <label htmlFor="user-input">User input</label> 
            <input type='text' placeholder='type here'  onChange={(e)=>setUserInput(e.target.value)}/>

            <div className={style["button-wrapper"]} ref={buttonAreaRef}  >
            <div className={style["submit-button"]} style={buttonStyle} onMouseMove={(e)=>mouseHandler(e)} onClick={submitHandler} >Search</div>
            {/* <button type='submit' className={style["submit-button"]} style={buttonStyle} onMouseMove={(e)=>mouseHandler(e)} >Search</button> */}
            </div>
            
          </div>
        </div>

        <aside className={style["right-aside"]}>
          {/* <img alt='ad' src='https://via.placeholder.com/250/000000/FFFFFF/?text=Ad Here' ></img> */}
        </aside>

      </main>

      <div className={style["info-wrapper"]}>
        <div className={style["info-left"]}>
          <h1>How to find a Zip Code</h1>
          <img className={style["info-border"]} alt='info-icon' src={pattern} />
          <p>Finding the postal codes you need for your post is as
            simple as few clicks. First select your country of choice
            to be taken to a list of the administrative divisions of that
            country. Then select the area where you are trying to send your
            letter for a list of the available zip codes for that area.
          </p>
          <p className={style["info-img"]} > Not sure of the country or the administrative division to
            choose? Or your country/region is missing in the list? Try
            entering the address into the search at the top of the page
            to lookup the right code to use. Also available, try using
            our country map to find your needed zip/postal code.</p>
        </div>

        <div className={style["info-right"]} >
          <img className={style["info-image"]} alt='info-icon' src={info} />
        </div>
      </div>


    </div>
  )
}

export default Homepage