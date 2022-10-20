import React from 'react'
import './Home.css'
import {BannerImage} from '../../index'
import { Link } from 'react-router-dom'
import {IoBuildOutline} from 'react-icons/io5'
import {MdOutlineAutoFixHigh} from 'react-icons/md'
import {TbWritingSign} from 'react-icons/tb'

function Home() {
  const serviceList = [{
    mal_id:0,
    name: "Redesign existing website + SEO",
    icon: MdOutlineAutoFixHigh
  },
  {
    mal_id:1,
    name: "Build website up from scratch + Ads and SEO",
    icon: IoBuildOutline
  },
  {
    mal_id:2,
    name: "Web audit and consultation",
    icon: TbWritingSign
  }
]

const testimonialList = [{
  mal_id:0,
  name: "Carla Clark",
  description: "This group is insane they literally save my business. My business was running low in sales and I was about to close to the business."
},
{
  mal_id:1,
  name: "Ludovica Silvestri",
  description: "I somehow got in touch with this group. They, therefore, helped me redesign my website and market, in order words bringing it back to life after the work they put into business started booming I am forever grateful to them"
},
{
  mal_id:2,
  name: "John Armstrong",
  description: "I own a relatively small restaurant in my area. After covid, I was at the verge of closing. I was contacted by an agency that helped me set up service online where I was selling and shipping ingredients to keep the restaurant a float after covid they helped me design and market a website which now allows me to that orders online"
},
{
  mal_id:3,
  name: "Caty Benson",
  description: "I own a barber shop. I was having trouble with keeping up with clients and them booking appointments. this was making things very rough. I reached out to this group for help and they just did the best job I've ever seen my booking system now works beautifully"
}
]
  return (
    <>
    <div className='banner'>
      <div className='container'>
      <div className='descriptionBx'>
        <h1>WebM Agency</h1>
        <p>Rebuild your website into a masterpiece!</p>
        <a href='https://zorocut.com/Projects' target="_blank" className='btn-Portfolio'>PORTFOLIO</a>
      </div>
        <div className='imgBx'><img src={BannerImage}/></div>
        
      </div>
      
    </div>
    <div id="Services" className='services' style={{width:"100%",textAlign:"center"}}>
      <h1 style={{fontSize:"1.5rem",fontWeight:"800"}}>Our Services</h1>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap",animationName:"fading",animationDuration:"2s",width:"100%"}}>
      {serviceList.map( service => (
        <div className='serviceBx' key={service.mal_id}>
          <div className='imgBx'><service.icon className='icon'/></div>
          <div className='description'>{service.name}</div>
        </div>
      ))}
      </div>
      <p style={{fontSize:"0.9rem",fontWeight:"700",color:"rgb(83, 83, 83)",width:"80%",margin:"auto",paddingTop:"20px",animationName:"fading",animationDuration:"2s"}}>We as a team are developers, SEO experts and marketing experts
        Our services Have a wide range such as redesigning and promoting your 
        website to make it rank higher, designing the 
        website from scratch with the marketing included to even consulting.<br/>
        we list is not inclusive at all and was just made to give an idea of
         what we offer please contact us in order fro us to make a tailored plan for you</p>
    </div>
    <div className='about' id='About'>
      <section style={{textAlign:"center"}}>
      <h1 style={{fontSize:"2rem",fontWeight:"800",margin:"auto"}}>About Us</h1>
      <p style={{fontSize:"1rem",fontWeight:"700",color:"rgb(83, 83, 83)",width:"80%",paddingTop:"0px",margin:"auto",animationName:"fading",animationDuration:"2s"}}>
      We are a fast-growing global software development, marketing and consulting platform on our way to becoming a leading digital transformation champion.<br/><br/>
      We are a growing team with an extraordinary breadth of experience that yields continuous innovation so that our clients can deliver lasting value and thus make a difference.
      </p>
    </section>
    <section className='testimonial'>
      <div className='list'>
      {testimonialList.map( testimonial => (
        <div className='card' key={testimonial.mal_id}>
          <div className='container'>
            <h1>{testimonial.name},</h1>
            <p>{testimonial.description}</p>
          </div>       
        </div>
      ))}
      </div>
    </section>
    </div>
    </>
  )
}

export default Home