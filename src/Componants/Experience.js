import React from 'react'

function Experience(props) {

    let expdetail = props.experience;
    let edudetail = props.education;
    // console.log(expdetail);
  return (
      <section className='edu_exp_wrap spacer' id='resumesection'>
        <div className="container">
            <div className="w_100">
                <div className="w_50">
                    <div className='title_wrap'> 
                            <h2 className='title'>My Experience</h2>    
                    </div>

                    {

                        expdetail.map((item)=>{

                               return  <div className="content_box">
                                            <h4 className='year_wrap'>{item.year}</h4>
                                            <h2 className='position_wrap'>{item.company}</h2>
                                            <p className='location_wrap'>{item.postition}</p>
                                        </div>   

                        })
                    }

                        
                </div>
                <div className="w_50">
                    <div className='title_wrap'>
                            <h2 className='title'>My Education</h2>    
                    </div>

                    {

                        edudetail.map((item)=>{


                    return <div className="content_box">
                                <h4 className='year_wrap'>{item.year}</h4>
                                <h2 className='position_wrap'>{item.sname}</h2>
                                 <p className='location_wrap'>{item.location}</p>
                            </div>    

                        })
                    }
                     
                </div>               
            </div>
        </div>
      </section>
  )
}

export default Experience
