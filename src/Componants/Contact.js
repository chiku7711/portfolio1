import React from 'react'

function Contact() {
  return (
      <section className='contact_form spacer' id="contactsection">

        <div className="container">
                    {/* <h2 className="title">
                        Let’s work together!
                    </h2> */}
                    {/* <p className='para'>I design and code beautifully simple things and i love what i do. Just simple like that!</p> */}
          <div className="w_100">
              <div className="w_50">
                  <div className="form_box">

                    <div className='row'>
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <input type="text"  className='form-control' placeholder='Enter Name'/>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <input type="text"  className='form-control' placeholder='Last Name'/>
                      </div>
                      <div className="col-12">
                        <input type="text"  className='form-control' placeholder='Email Id'/>
                      </div>
                      <div className="col-12">
                        <input type="text"  className='form-control' placeholder='Contact Number'/>
                      </div> 
                      
                      <div className="col-12">
                      <textarea name="" id="" className='form-control' placeholder='Enter Message' rows='10'></textarea>
                      </div>

                      <div className='col-12'>
                        <a href="/" className='btn btn_primary'>Send Message</a>
                      </div>

                    </div>
                      </div>
              </div>
          </div>
        </div>
      </section>
  )
}

export default Contact
