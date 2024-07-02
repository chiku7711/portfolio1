import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Work(props) {

 
    const items = props.items;

    console.log(items);

    const slider = {    

        loop : true,
        items : 2,
        margin : 100,
        dots : false,
        center : true,
        // nav : true,
        autoplay : true,
        autoplayTimeout	: 4000,
        smartSpeed : 3000,
        autoplayHoverPause : true,

        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    }
  return (

        <section className='mywork spacer' id='worksection' >

           <div className="container">
                    <h2 className='title'>My Recent Works</h2>
                    <p className='para'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
            </div> 
        <OwlCarousel className='owl-theme' {...slider}>

            {/* {console.log(items.length)} */}
            {
                items?.map((item)=>{
                    // console.log(item);

                    return <div class='item'>
                    <div className="content_img">
                            <div className="img_wrap">
                                <img src={require(`../img/${item.img}`)} alt="" />
                            </div>
                            <div className="content_wrap">
                                <h4>{item.name}</h4>
                                <a href={item.link} className='btn btn_primary' target='blank'>Visit</a>
                            </div>
                    </div>                
                </div> 
                })

            }          
            
            
        </OwlCarousel>
        </section>
  )
}

export default Work
 