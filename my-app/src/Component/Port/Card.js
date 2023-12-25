import React,{ useState } from 'react'

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
        <span onClick={toggleModal} >{props.category}</span>
        <label>
        <i class='bx bx-heart'></i>{props.totalLike}
        </label>
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
            <div className='modal'>
                <div onClick={toggleModal} className='overlay'></div>

                <div className='modal-content d_flex'>
                    <div className='modal-img left'>
                        <img src={props.image} alt='' />
                    </div>
                    <div className='modal-text right'>
                        <span>Featured - Design</span>
                        <h1>{props.title}</h1>
                        <p>I am enthusiastic and dedicated to pursuing frontend projects that allow me to showcase my creative and technical skills. With a passion for crafting visually appealing and user-friendly interfaces, I am eager to dive into the world of frontend development. My goal is to contribute to projects that not only meet functional requirements but also provide a seamless and enjoyable user experience. I am well-versed in HTML, CSS, and JavaScript, and I am committed to staying updated on the latest trends and technologies in frontend development. I am excited about the prospect of collaborating on innovative projects that challenge and enhance my abilities, ultimately contributing to the success of impactful and aesthetically pleasing web applications.</p>
                  
                        <div className='button f_flex mtop'>
                            <button className='btn_shadow'>
                                LIKE THIS <i class='bx bxs-hand-up'></i>
                                </button>
                                
                                <button className='btn_shadow'>
                                VIEW PROJECT <i class='bx bxs-chevrons-right' ></i>
                                </button>                
                                </div>
                             <button className='close-modal btn_shadow' onClick={toggleModal}>
                             <i class='bx bxs-message-alt-x'></i>
                                
                                </button>   
                                
                    </div>
                </div>
            </div>
        )
    }
    </>
  )
}

export default Card