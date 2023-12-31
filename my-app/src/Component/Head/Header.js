import React,{ useState } from 'react'
import "./Header.css"
import logo from "../pic/logo1.png"

const Header = () => {
//when scroll header at top
  window.addEventListener("scroll", function(){
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })

//toggle menu
const [Mobile,setMobile] = useState(false)


  return (
  <>
  <header className='header'>

    <div className="container d_flex">
        <div className="logo">
            <img className="pho" src={logo}  alt="" />
          
        </div>

        <div className='navlink'>
        
            {/* <ul className='link f_flex uppercase'> */}
              <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
                <li><a href='#home'>Home</a></li>
                <li><a href='#features'>Features</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#resume'>Resume</a></li>
                <li><a href='#clients'>Clients</a></li>
                <li><a href='#blog'>Blog</a></li>
                <li><a href='#contact'>Contact</a></li>
                <li><button className='home-btn'>BUY NOW</button></li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ?
                <i className='bx bx-x close home-btn'></i> :  <i className='bx bx-menu open '></i>
            }
           
          
            </button>
        </div>
    </div>
  </header>
  {/* section */}
  <section className='demo'></section>
    </>
  
  )
}

export default Header