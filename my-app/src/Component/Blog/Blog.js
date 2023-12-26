import React from 'react'
import BlogApi from './BlogApi'
import "./Blog.css"
import "../Port/Port.css"
import Card from './Card'
const Blog = () => {
  return (
    <>
    <section className='portfolio blog ' id='blog'>
      <div className='container'>
          <div className='heading text-center'>
              <h4>VISIT MY BLOG AND KEEP YOUR FEEDBACK</h4>
              <h1>My BLOG</h1>
          </div>
  <div className='content grid'>
  {BlogApi.map((val,index) => {
    return <Card  key={index} image={val.image} date={val.date}  title={ val.title} desc={val.desc}/>
  
  })}
  
  
  </div>
  
      </div>
    </section>
    </> 
    
  )
}

export default Blog