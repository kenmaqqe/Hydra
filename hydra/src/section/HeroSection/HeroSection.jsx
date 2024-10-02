import React from 'react'
import './style.css'
import Logo from '../../Img/logo.svg'
import LogoText from '../../Img/LogoText.svg'
import HeroImg from '../../Img/HeroImg.svg'
import Arrow from '../../Img/Arrow.svg'
import Location from '../../Img/Location.svg'
import Call from '../../Img/Call.svg'
import Mail from '../../Img/Mail.svg'

const HeroSection = () => {
  return (
    <div className='section'>
        <div className='navigation'>
            <div>
                <a className='logo' href=''>
                    <img src={Logo} alt='logo-img' style={{marginRight: 15}}/>
                    <img src={LogoText} alt='logo-text'/>
                </a>
            </div>
            <div className='navigationLink' style={{marginLeft: 205, marginRight: 140}}>
                <a href="#about">
                    ABOUT
                </a>
                <a href="#services">
                    SERVICES
                </a>
                <a href="#tech">
                    TECHNOLOGIES
                </a>
                <a href="#how">
                    HOW TO
                </a>
            </div>
            <div className='button'>
                <button className='ContactUsButton'>
                    CONTACT US
                </button>
                <button className='JoinButton'>
                    JOIN HYDRA
                </button>
            </div>
        </div>
        <div className='about'>
            <div className='AboutText'>
            <h1>
                <span class="gradient-text">Dive</span> Into The Depths Of <span class="gradient-text">Virtual Reality</span>
            </h1>   
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore 
nisl tincidunt eget. Lectus mauris eros in vitae .
                </p>
                <div className='Build'>
                    <button>BUILD YOUR WORLD</button>
                    <img src={Arrow} alt='arrow'/>
                </div>
            </div>
            <div className='AboutImg'><div className='ImgBg'><img className='HeroImg' src={HeroImg} alt='hero-image'/></div></div>
        </div>  
        <div className='contactContainer'>
            <div className='contact'>
                <img src={Location} alt='locaion-icon'/>
                <div>
                    <h3>Pay Us a Visit</h3>
                    <p>Union St, Seattle, WA 98101, United States</p>
                </div>
            </div>
            <div className='contact'>
                <img src={Call} alt='call-icon'/>
                <div>
                    <h3>Give Us a Call</h3>
                    <p>(110) 1111-1010</p>
                </div>
            </div>
            <div className='contact'>
                <img src={Mail} alt='mail-icon'/>
                <div>
                    <h3>Send Us a Message</h3>
                    <p>Contact@HydraVTech.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection