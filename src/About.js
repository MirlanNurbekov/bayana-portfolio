import React, { useEffect, useState } from 'react'; 
import './About.css';
import image from '../src/assets/IMG_4509 2.jpg';
import picturesOne from '../src/assets/Modern Certificate Template Layout.jpeg';
import picturesTwo from '../src/assets/_ (3).jpeg';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import instagramIcon from '../src/assets/icons8-instagram-24.png';
import whatsappIcon from '../src/assets/icons8-whatsapp-24.png';
import telegrammIcon from '../src/assets/icons8-telegram-app-24.png';
export function Slider({ label, initialValue }) {
  const [percentage, setPercentage] = useState(initialValue); 

  const handleSliderChange = (e) => {
    setPercentage(e.target.value);
  };

  
  return (
    <div className="sliderContainer" data-aos="zoom-in" data-aos-duration="500">
      <h1 className='sliderContainerTitle'>{label}</h1>
      <input
        type="range"
        min="0"
        max="100"
        value={percentage}
        onChange={handleSliderChange}
        className="slider"
      />
      <div className="percentageDisplay">{percentage}%</div>
    </div>
  );
}

function About() {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <div className='header'>
      <div className='headerContainer'>
      <h1 className='mainSubtitle'>Bayana Bakytbekova</h1>
        <ul className='headerMenu'> 
          <li><Link to="/header">MAIN</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/projects">PROJECTS</Link></li>
        </ul> 
      </div>
      <div className='main'>
        <h1 className='mainTitle' data-aos="fade-up" data-aos-duration="700">Web developer</h1>
      </div>
      <div className='sectionContainer'>
        <div className='sectionImage'>
          <img src={image} alt='Изображение' className='image'/>
          <div className='sectionBlockText' data-aos="fade-left" data-aos-duration="700">
            <p className='sectionTitle'>About me</p>
            <h1 className='sectionsubtitle'>
              Hello! I am Bayana Bakytbekova, and I am a web developer creating user-friendly and efficient websites. I specialize in front-end development, focusing on technologies like React.js, HTML, CSS, and JavaScript. My goal is to build websites that are not only visually appealing but also provide an excellent user experience.
            </h1>
          </div>
        </div>
      </div>
      <div className='sectionForth' data-aos="zoom-in" data-aos-duration="500">
          <div className='sectionForthAchiv'>
            <div className='sectionForthAchivBlock' data-aos="fade-up" data-aos-duration="700">
              <img src={picturesOne} alt='Сертификат за 3 место' className='picture'/>
              <h1 className='pictureTitle'>Certificate for receiving 3rd place in the competition</h1>
            </div>
            <div data-aos="fade-up" data-aos-duration="700">
              <img src={picturesTwo} alt='Сертификат за 2 место' className='picture'/>
              <h1 className='pictureTitle'>Certificate for receiving 2nd place in the competition</h1>
            </div>
          </div>
      </div>
      <div className='sectionThird'>
        <div className='sectionThirdTextBlock'>
          <h1 className='sectionThirdTextBlockTitle' data-aos="fade-up" data-aos-duration="700">My skills</h1>
        </div>
          <Slider label="React.js" initialValue={60} />
          <Slider label="HTML/CSS" initialValue={70} />
          <Slider label="JavaScript" initialValue={40} />
      </div>
      <footer className='footerContainer'>
      <div className='socialMedia'>
        <div className='footerContent'>
             <h1 className='mainSubtitle'>Bayana Bakytbekova</h1>
             <h1 className='footerTitle'>Made by Bakytbekova Bayana</h1>
        </div>
        <div className='socialMediaIcons'>
         <a href='https://www.instagram.com*/_bakytbekova_b'><img src={instagramIcon} alt="Instagram" className="icon" /></a>
          <a href='https://web.whatsapp.com/'><img src={whatsappIcon} alt="WhatsApp" className="icon" /></a>
          <a href='https://web.telegram.org/a/'><img src={telegrammIcon} alt="Telegramm" className="icon"/></a>
       </div>
      </div>
      </footer>
    </div>
  );
}

export default About;
