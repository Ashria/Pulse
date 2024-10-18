import './App.css';
import  {React, useEffect ,useState} from 'react';
import './App.css';
import vid3 from './images/3.mp4'
import { Link, useNavigate } from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import a1 from "./images/about1.jpeg"
import a5 from "./images/about5.jpg"
import a6 from './images/about6.jpg'
import a2 from "./images/about2.jpg"
import a3 from "./images/about3.jpg"
import a4 from "./images/about4.jpg"
import t1 from "./images/team1.png"
import vid from './images/aout1.mp4'  
import vid1 from './images/about2.mp4'  
import vid2 from './images/about3.mp4'  
import vid4 from './images/about4.mp4'  

function About() {
  useEffect(()=>{
    Aos.init();
      },[])
   
  return (
    <body className='Caviar  overflow-x-hidden aboutus'>
      <nav className="w-full z-50 " id='nav'>
  <div className="container border-b-4 border-b-black Caviar px-5 py-3 lg:px-8  w-11/12 flex mx-auto justify-between">
  <Link to={"/"}><h1 className="Aurora text-xl lg:text-4xl w-2/3 lg:w-1/3 lg:p-5 text-left font-extrabold" data-aos="fade-down" data-aos-duration="800">
    Pulse
    </h1></Link>

    <ul className="justify-evenly ml-auto hidden lg:flex">
      <Link to={"/about"}>
        <li className="text-xl lg:text-2xl transition-all p-5 font-extrabold hover:font-light" data-aos="fade-down" data-aos-duration="800" data-aos-delay="100">
          About
        </li>
      </Link>
      <Link to={"/shop"}>
        <li className="text-xl lg:text-2xl transition-all p-5 font-extrabold hover:font-light" data-aos="fade-down" data-aos-duration="800" data-aos-delay="200">
          Shop
        </li>
      </Link>
      <Link to={"/contact"}>
        <li className="text-xl lg:text-2xl transition-all p-5 font-extrabold hover:font-light" data-aos="fade-down" data-aos-duration="800" data-aos-delay="300">
          Contact
        </li>
      </Link>
    </ul>

    <div className=" z-50   lg:hidden block">
    <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="bg-transparent m-1"><FontAwesomeIcon icon={faBars} className=' text-sm' /></div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100  rounded-box z-[1] w-24 p-2 shadow">
  <Link to={"/about"}>
        <li className="text-lg transition-all px-2 py-4 font-extrabold Mangiola hover:bg-blue-700 hover:text-white" data-aos="fade-down" data-aos-duration="800" data-aos-delay="100">
          About
        </li>
      </Link>
      <Link to={"/shop"}>
        <li className="text-lg transition-all px-2 py-4 font-extrabold Mangiola hover:bg-blue-700 hover:text-white" data-aos="fade-down" data-aos-duration="800" data-aos-delay="200">
          Shop
        </li>
      </Link>
      <Link to={"/contact"}>
        <li className="text-lg transition-all px-2 py-4 font-extrabold Mangiola hover:bg-blue-700 hover:text-white" data-aos="fade-down" data-aos-duration="800" data-aos-delay="300">
          Contact
        </li>
      </Link>
  </ul>
</div>
    </div>
  </div>
</nav>

<div  className='z-50' id='aboutus'>
<video className='w-full mb-4 z-50' loop muted autoPlay>
        <source src={vid4} type="video/mp4" />
          </video>
          <section id="about">
  <div class="container mx-auto flex px-7 py-24 md:flex-row flex-col items-center">
    <div class=" md:w-1/2 w-5/6 mb-10 md:mb-0">
    <h2 class="title-font text-4xl text-center lg:text-left lg:text-7xl mb-4 font-bold Aurora text-blue-900">About Us
    </h2>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
   
      <p class="mb-8 leading-loose">Pulse consists of a state-of-the-art design studio, a fully integrated production facility, and advanced quality control systems. Our creative hub includes areas for conceptual design, pattern development, and fabric selection, ensuring each piece reflects our commitment to innovation. <br />The production section features cutting-edge machinery for garment manufacturing, tailored to meet high efficiency and precision. Our dedicated quality control team ensures every product is crafted to perfection before reaching customers. <br />
      The design and production sectors are distinct yet seamlessly connected, functioning independently to maintain high standards of creativity, craftsmanship, and quality across all operations.</p>
    
    </div>
  </div>
</section>
  <div class=" px-7 py-24 mx-auto flex flex-col">
    <div class="lg:w-5/6 mx-auto">
      <div class="rounded-lg h-64 lg:h-80 overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" src={a1}/>
      </div>
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            
        <img alt="content" class="object-cover object-center h-full w-full rounded-full" src={t1}/>
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-red-900 text-lg Aurora">Sophia Reyes </h2>
            <p class="text-sm">  – Product Development Manager</p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-sm mb-4">Here , Product development begins with a deep dive into current fashion trends, combined with our unique brand vision. We collaborate closely with designers to ensure every piece not only meets market demands but also aligns with our commitment to quality and style. From sourcing premium fabrics to creating tailored fits, our development process is meticulous. Each product goes through multiple stages of testing and refinement before reaching our customers, ensuring it embodies the essence of Watch Pulse—modern, comfortable, and durablep</p>
         
        </div>
      </div>
    </div>
  </div>
  <section id='gallery'>
  <div class=" px-7 py-24 mx-auto flex flex-wrap">
   
    <div class="md:flex flex-wrap block md:-m-2 -m-1">
      <div class="flex flex-wrap  w-full md:w-1/2 py-3">
        <div class="md:p-2 p-1 w-1/2">
          <video className='w-full mb-4 z-50' loop muted autoPlay>
        <source src={vid2} type="video/mp4" />
          </video>
        </div>
        <div class="md:p-2 p-1 w-1/2"> 
        
        <img alt="gallery" class="w-full object-cover  object-center block" src={a2}/>
    
        </div>
        <div class="md:p-3 p-1 w-full">
          <h2 className='text-lg md:text-xl lg:text-2xl font-bold tracking-wide leading-relaxed'>The utmost care is taken to ensure the finest material quality with us, using advanced fabric selection techniques and precision cutting technology. Each product is crafted in a controlled environment, where stringent quality standards are maintained through automated stitching processes and detailed hand-finishing procedures.</h2>
        </div>
      </div>
      <div class="flex flex-wrap  w-full md:w-1/2 py-3">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full  object-cover object-center block" src={a5}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
        
        <img alt="gallery" class="w-full object-cover object-center block" src={a6}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <video className='w-full mb-4 z-50' loop muted autoPlay>
        <source src={vid1} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </div>
</section>
  <section >
  <div class=" px-5 py-24 mx-auto">
    <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p class="leading-relaxed text-lg">Capturing the true essence of <font className='font-bold text-red-800'>Pulse</font>  goes beyond just taking a photo—it's about conveying the personality of each piece. Whether it's the texture of the fabric or the silhouette of the design, finding the right angle and light is crucial. My goal is to ensure every shot tells a story that reflects our brand’s dedication to style and quality.</p>
      <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
      <h2 class="text-blue-900 font-bold Aurora title-font tracking-wider text-base">Liam Carter</h2>
      <p class="text-yellow-500 text-xs"> - Lead Photographer</p>
    </div>
  </div>
</section>
</div>
<video className='w-full mt-10 z-50' loop muted autoPlay>
        <source src={vid} type="video/mp4" />
          </video>
<footer className="bg-blue-600 Caviar text-white overflow-x-hidden w-full z-[50" id='footer'>
  <div className="block container  mx-auto px-5 py-12 w-11/12 justify-center" data-aos="fade-down" data-aos-duration="800">
    <h2 className="font-extrabold text-3xl text-center Aurora lg:text-7xl lg:text-left tracking-wider py-8 border-b-8 border-b-white">
      Contact Us.
    </h2>
    <p className="py-8 text-lg font-bold">
      Email us: <br />
      <span className="font-extrabold text-xl text-center lg:text-5xl lg:text-left py-8 hover:line-through transition-all">
        ashriamahmud2627@gmail.com
      </span>
    </p>
    <div className="flex py-5 px-8 justify-between">
      <address className="text-base lg:text-xl leading-9 w-1/2">
        <b>Address:</b> <br />
        Korte Hofstraat 1A <br />
        2011 DT <br />
        Haarlem <br />
        The Netherlands
      </address>

      <a href="#about"><button className="button mt-24 ml-auto">
       
        <svg className="svgIcon" viewBox="0 0 384 512">
          <path
            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
          ></path>
        </svg>
      
      </button>  </a>
    </div>
  </div>
</footer>
    </body>
  );
}

export default About;