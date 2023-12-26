import React,{ useState } from 'react'
import './Blog.css'

const Card = (props) => {
    const [modal, setModal] = useState(false)
 
    const toggleModal = () => {
        setModal(!modal)
    }


  return (
    <>
    <div className='box btn_shadow'>
       <div className='img'>
        <img src={props.image} alt='' onClick={toggleModal} />
       </div>
       <div className='category d_flex'>
        <span onClick={toggleModal}>{props.date}</span>
       </div>
       <div className='title'>
        <h2 onClick={toggleModal}>{props.title}</h2>
        <a href='#popup' className='arrow' onClick={toggleModal}>

        <i class='bx bx-right-arrow-alt'></i>
        </a>
       </div>
    </div>


    {/*  */}


    {
        modal &&(
            <div className='modal modal-blog'>
                <div onClick={toggleModal} className='overlay'></div>

                <div className='modal-content d_flex'>
                    <div className='modal-img left'>
                        <img src={props.image} alt='' />
                    </div>
                    <div className='modal-text right'>
                        <span>See at Medium</span>
                        <h1>{props.title}</h1>
                      <p>{props.desc}</p>
                       
                             <button className='close-modal btn_shadow' onClick={toggleModal}>
                             <i class='bx bxs-message-alt-x'></i>
                                
                                </button>   
                                <div className='contact mtop'>
                                    <h1>Leave a Reply</h1>
                                    <form className='blog_contact d_flex'>
                                       <div className='left'>
                                       <input type='text' placeholder='Name' />
                                        <input type='text' placeholder='Email' />
                                        <input type='text' placeholder='Website' />
                                        <button className='btn_shadow'>SUBMIT NOW</button>
                                       </div>

                                       <div className='right'>
                                        <textarea cols='30' rows='12' placeholder='comment'></textarea>
                                       </div>
                                    </form>
                                </div>
                    </div>
                </div>
            </div>
        )
    }
    </>
  )
}

export default Card