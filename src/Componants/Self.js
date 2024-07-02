import React from 'react'
// import { CiLinkedin } from "react-icons/ci";

function Self() {
    
  return (    
    <>
    
        <section className='selfintro spacer' id='aboutsection'>
        {/* <CiLinkedin /> */} 

            <span className='hireme'>Hire me</span>
            <div className="container">
                <div className="w_100">
                    <div className='selfimg'>
                        <img src={require('../img/self.png')} alt="" />
                    </div>
                    <div className="aboutme">
                        <h1>
                                <span>Hello, i'm Harsh Patel</span>  Frontend Developer Based in india.
                        </h1>

                        <p>I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people.</p>

                        <div className='buttons_wrap'>
                            <a href="/" className='btn btn_primary'>Get In Touch</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section className='counter_wrap'>
            <div className="container">
                <div className="counter_bg">
                    <div className="w_100">
                        <div className="w_33">
                            <div className="num_text">
                                <h4 className="num_wrap"> 5+ </h4>
                                <p>Years of<br/>Experience</p>
                            </div>
                        </div>
                        <div className="w_33">
                            <div className="num_text">
                                <h4 className="num_wrap"> 50+ </h4>
                                <p>Projects<br/>Completed</p>
                            </div>
                        </div>
                        <div className="w_33">
                            <div className="num_text">
                                <h4 className="num_wrap"> 15+ </h4>
                                <p>Happy<br/>clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default Self