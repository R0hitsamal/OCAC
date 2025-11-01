import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Project from './components/Project'
const App = () => {
  const projects = [{
    id: 'One'
  },
  {
    id: 'Two'
  },
  {
    id: 'Three'
  },
  {
    id: 'Four'
  }]
  return (
    <>
      <div className="background">
        <div className='cont'>
          <Navbar />
          <hr></hr>
          <div className='body'>
            <div className='leftbody'>
              <div class='profile'></div>
              <h1>Hi, I am Rohit</h1>
              <h2>I'm a Web Developer</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, consequatur veniam harum pariatur minus.
              </p>
            </div>
            <div className="rightbody">
              <h1>Projects</h1>
              <div>
                {projects.map((project, index) => (
                  <Project key={index} id={project.id} />
                ))}
              </div>
            </div>
              {/* <div class='project1 project'>
                <h2>Project 1</h2>
                <p>Lorem ectetur adipisicing elit. Quos, consequatur veniam harum pariatur minus.</p>
              </div>
              <div class='project2 project'>
                <h2>Project 1</h2>
                <p>Lorem ectetur adipisicing elit. Quos, consequatur veniam harum pariatur minus.</p>
              </div>
              <div class='project3 project'>
                <h2>Project 1</h2>
                <p>Lorem ectetur adipisicing elit. Quos, consequatur veniam harum pariatur minus.</p>
              </div>
              <div class='project14 project'>
                <h2>Project 1</h2>
                <p>Lorem ectetur adipisicing elit. Quos, consequatur veniam harum pariatur minus.</p>
              </div> */}
            </div>
          </div>
        </div>
    </>
  )
}

export default App