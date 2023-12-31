import React, { useState } from 'react'
import "./Contact.css"
import contact1 from "../pic/conta.jpg"
const Contact = () => {
    const [data , setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    })
    const InputEvent = (event) => {
        const {name,value} = event.target
        setData((preVal) => {
       return{
        ...preVal,
        [name]:value,

       }
        })
        
    }
    const formSubmit = (event) =>{
        event.preventDefault()
        alert(
            `My name is ${data.fullname}.
            My Phone Number is ${data.phone}.
            My email address is ${data.email}.
            My Subject on ${data.subject}.
            Here is my message I want to say : ${data.message}
        `)
    }
  return (
    <div>
    <section className='Contact' id='contact'>
   <div className='container top'>

    <div className='heading text-center'>
<h4>CONTACT</h4>
<h1>Contact With Me</h1>
    </div>

   <div className='contact d_flex'>

    <div className='left'>
        <div className='box box_shadow'>
            <div className='img'>
                <img src={contact1} alt='' />
            </div>
            <div className='details'>
                <h1>Gowri K</h1>
                <p>I am available for freelance Work.Connect with via Linkedin</p>
                <br />
            
            <p>Phone: 938447583</p>
            <p>Email: gowrikalimuthu2003@gmail.com</p>
            <br />
            <span>FIND WITH ME</span>
            <div className='button f_flex'>
                <button className='btn_shadow'>
                <i class='bx bxl-linkedin-square'></i>
                </button>
                <button className='btn_shadow'>
                <i class='bx bxl-figma' ></i>
                </button>
            </div>
            
            </div>
        </div>
    </div>


    <div className='right box_shadow'>
        <form onSubmit={formSubmit}>
            <div className='f_flex'>
                <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                    <br />
                </div>
                <br />
                <div className='input row'>
                    <span>YOUR NUMBER</span>
                    <input type='phone' name='phone' value={data.phone} onChange={InputEvent} />
                </div>
                
                
            </div>
            <div className='input'>
                    <span>YOUR EMAIL</span>
                    <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                    <span> SUBJECT</span>
                    <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input '>
                    <span>YOUR MESSAGE</span>
                    <textarea cols='30'  rows='10'   name='message' value={data.message} onChange={InputEvent} />
                </div>
            <button className='btn_shadow'>
                SEND MESSAGE <i class='bx bxs-caret-down-circle'></i>
            </button>
        </form>
    </div>
   </div>

   </div>


    </section>
    
    
    </div>
  )
}

export default Contact