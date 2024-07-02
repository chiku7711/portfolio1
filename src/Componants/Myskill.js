import React from 'react'

function Myskill(props) {

  let icons = props.skills;
  // console.log(icons); 
  return (
      <section className='my_skills spacer' id='skillsection'>
        <div className="container">
            <h2 class="title text-center">What i do !</h2>

        <div className='skill_boxes'>
            

            {

              icons.map((item)=>{
                   
                return <div className="box_wrap">
                  <div className="logo_wrap">
                    <img src={require(`../img/${item.logo}`)} alt="" />
                  </div>
                  <span>{item.text}</span>
            </div> 
              })
            }


        </div>
        </div>
      </section>
  )
}

export default Myskill
