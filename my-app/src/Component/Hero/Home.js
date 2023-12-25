import React from 'react'
import "./Home.css"
import hero from "../pic/logo.jpeg"
import python from "../pic/python.jpg"
import html from "../pic/Html.png"
import css from "../pic/css.png"
import js from "../pic/js.png"
import sql from "../pic/sql.png"

import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <>
  <section className='hero' id='home'>
    <div className='container f_flex top'>
        <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
                Hi,I'm <span>Gowri K</span>
            </h1>
            <h2>
                a <span><Typewriter
            words={[ 'Frontend Developer.', 'Professional Coder.', 'UI/UX Designer.','Web Developer']}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          
          /></span>
                </h2>
               <p >I enjoys tackling complex coding challenges and finding elegant solutions. She is constantly ready to learn new things and contribute to innovative initiatives. Front-end developer with a high level of motivation and adaptability focused to participate in cutting-edge projects. Gowri is a student with a strong interest for full stack programming who is driven and aspirational. Presently doing front-end program at Spotknack.</p> 
        
        <div className='hero_btn d_flex'>
            <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                    <button className='btn_shadow'>
                    <i class='bx bxl-linkedin-square'></i>
                    </button>

                    <button className='btn_shadow'>
                    <i class='bx bxl-medium-square' ></i>
                    </button>

                    <button className='btn_shadow'>
                    <i class='bx bxl-figma' ></i>
                    </button>

                    <button className='btn_shadow'>
                    <i class='bx bx-link' ></i>
                    </button>
                </div>
            </div>

            <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                    <img src={python} alt="" />
                    </button>
                    <button className='btn_shadow'>
                    <img src={html} alt="" />
                    </button>
                    <button className='btn_shadow'>
                    <img src={css} alt="" />
                    </button>
                    <button className='btn_shadow'>
                    <img src={js} alt="" />
                    </button>
                    <button className='btn_shadow'>
                    <img src={sql} alt="" />
                    </button>
            </div>
        </div>
        </div>


        <div className='right'>
            <div className='right_img'>
                <img class="right_hero" src={hero} alt="" />
            </div>
        </div>
    </div>

  </section>
    </>
  )
}

export default Home