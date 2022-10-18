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
    <div className='services' style={{width:"100%",textAlign:"center"}}>
      <h1 style={{fontSize:"1.5rem",fontWeight:"800"}}>Our Specialities</h1>
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
    <div className='about' style={{width:"100%",textAlign:"left",padding:"25px 20px 0 20px",boxSizing:"border-box"}}>
      <h1 style={{fontSize:"2rem",fontWeight:"800"}}>About Us</h1>
      <p style={{fontSize:"1rem",fontWeight:"700",color:"black",width:"80%",paddingTop:"0px"}}>We are a group of 
      talented and enthusiastic professionals our journey started in Newcastle, the UK as 2 university students
      looking to impact the world in a way that seemed impossible
      Our sole mission is to help businesses be more profitable by making them reach a wider
      audience and making their website rank the highest and running the most efficient ads campaign 
      If you want to enjoy our expertise contact us</p>
    </div>
    </>
  )
}

export default Home