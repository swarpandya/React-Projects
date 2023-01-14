import React from 'react'
import vg from "../assets/2.jpeg"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      <main>
        <h1>Techystar</h1>
        <p>Solution to all your problems</p>
      </main>
    </div>

    <div className='home2'>
    <img src={vg} alt="graphics" />

    <div>
      <p>
        We are one and only solution to your tech problems 
        you face everyday. we are leading tech company
        whose aim is to increase the problem solving
        ability in children.
        
      </p>
    </div>
    </div>

    <div className="home3" id="about">
      <div>
        <h1>Who we are?</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maiores magnam corporis nulla dolorem blanditiis ipsam earum quae quis, saepe, reiciendis molestias! Officiis animi modi quia aliquam quis rem alias?</p>
      </div>
    </div>

    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay: "0.3s"
          }}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>

          <div style={{
            animationDelay: "0.5s"
          }}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>

          <div style={{
            animationDelay: "0.7s"
          }}>
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>

          <div style={{
            animationDelay: "1s"
          }}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home