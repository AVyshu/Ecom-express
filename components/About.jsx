import React from 'react'
import "../css/About.css"
import { useNavigate } from 'react-router-dom'
function About() {
  const navigate=useNavigate
  return (
    <>
    <div className='text' >
      <div className='ecom'>
      <span>summer collection</span>
      <h1>Fall-Winter Collections 2030</h1>
      <p>A specialist label creating luxury essentials</p>
      </div>
      <div className='shop'>
        <button onClick={navigate("/Product")}>SHOP NOW</button>
      </div>
      <div className='shoe'>
      <img src="shoe.jpg" height="200px" width="300px" alt=""></img>
      </div>
      </div>
  </>
)
}
export default About
