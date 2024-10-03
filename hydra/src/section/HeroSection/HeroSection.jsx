import React, { useRef, useState } from 'react';
import "./style.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import Logo from "../../Img/logo.svg";
import LogoText from "../../Img/LogoText.svg";
import HeroImg from "../../Img/HeroImg.svg";
import Arrow from "../../Img/Arrow.svg";
import Location from "../../Img/Location.svg";
import Call from "../../Img/Call.svg";
import Mail from "../../Img/Mail.svg";
import Button from "../../components/button/Button";
import Vertical from "../../Img/Vertical.svg";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const HeroSection = () => {
  const closeMenu = () => {
    document.getElementById("menu__toggle").checked = false;
  };

  return (
    <div className="section">
      <div className="navigation">
        <div className="Logo">
          <a className="logo" href="#">
            <img src={Logo} alt="logo-img" style={{ marginRight: 15 }} className="LogoImg"/>
            <img src={LogoText} alt="logo-text" />
          </a>
        </div>
        <div
          className="navigationLink"
          style={{ marginLeft: 205, marginRight: 140 }}
        >
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#tech">TECHNOLOGIES</a>
          <a href="#how">HOW TO</a>
        </div>

        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>
          <ul className="menu__box">
            <li>
              <a href="#about" onClick={closeMenu}>ABOUT</a>
            </li>
            <li>
              <a href="#services" onClick={closeMenu}>SERVICES</a>
            </li>
            <li>
              <a href="#tech" onClick={closeMenu}>TECHNOLOGIES</a>
            </li>
            <li>
              <a href="#how" onClick={closeMenu}>HOW TO</a>
            </li>
          </ul>
        </div>

        <div className="button">
          <Button ButtonName="CONTACT US" />
          <Button ButtonName="JOIN HYDRA" />
        </div>
      </div>

      <div className="about">
        <div className="AboutText">
          <h1>
            <span className="gradient-text">Dive</span> Into The Depths Of{" "}
            <span className="gradient-text">Virtual Reality</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae.
          </p>
          <div className="Build">
            <Button ButtonName="BUILD YOUR WORLD" />
            <img src={Arrow} alt="arrow" />
          </div>
        </div>

        <div className="AboutImg">
          <div className="ImgBg">
            <img className="HeroImg" src={HeroImg} alt="hero-image" />
          </div>
        </div>
      </div>

      <div className="contactContainer">
        <div className='Desktop'>
        <div className="contact">
          <img src={Location} alt="location-icon" style={{ height: 60 }} />
          <div>
            <h3>Pay Us a Visit</h3>
            <p>Union St, Seattle, WA 98101, United States</p>
          </div>
        </div>
        <img src={Vertical} alt="" />
        <div className="contact">
          <img src={Call} alt="call-icon" style={{ height: 45 }} />
          <div>
            <h3>Give Us a Call</h3>
            <p>(110) 1111-1010</p>
          </div>
        </div>
        <img src={Vertical} alt="" />
        <div className="contact">
          <img src={Mail} alt="mail-icon" style={{ height: 40 }} />
          <div>
            <h3>Send Us a Message</h3>
            <p>Contact@HydraVTech.com</p>
          </div>
          </div>
        </div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="contact">
            <img src={Location} alt="location-icon" style={{ height: 60 }} />
            <p>Union St, Seattle, WA 98101, United States</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="contact">
            <img src={Call} alt="call-icon" style={{ height: 45 }} />
            <p>(110) 1111-1010</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="contact">
            <img src={Mail} alt="mail-icon" style={{ height: 40 }} />
            <p>Contact@HydraVTech.com</p>
        </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
