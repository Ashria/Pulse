import './App.css';
import  {React, useEffect ,useState} from 'react';
import './App.css';
import { Link, useNavigate } from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import a1 from "./images/shop1.jpg"
import a2 from "./images/shop2.jpg"
import a3 from "./images/shop3.jpg"
import a4 from "./images/shop4.jpg"
import a5 from "./images/shop5.jpg"
import t3 from './images/about6.jpg'
import t4 from "./images/about2.jpg"
import t6 from "./images/about4.jpg"
import a7 from "./images/shop7.jpg"
import a10 from "./images/shop8.jpg"
import a8 from "./images/shop1.mp4"
import a9 from "./images/shop2.mp4"

function Shop() {
  useEffect(()=>{
    Aos.init();
      },[])
   
  return (
  
    <body className='Cavier overflow-x-hidden' data-theme="light">
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
<section  id='shop'>
  <div class=" px-8 py-12 mx-auto flex flex-wrap">
  
    <div class="md:flex block py-5 flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap md:w-1/2 w-full" data-aos="fade-right" data-aos-duration="800">
        <div class="md:p-2 p-1 w-1/2">
        <Link to={"/product1"}> <img alt="gallery" class="w-full object-cover h-full hover:p-2 transition-all shadow-xl bg-yellow-400 object-center block" src={a1}/></Link>
        </div>
        <div class="md:p-2 p-1 w-1/2">
        <Link to={"/product2"}>   <img alt="gallery" class="w-full object-cover h-full hover:p-2 transition-all shadow-xl bg-blue-400 object-center block" src={a2}/></Link>
        </div>
        <div class="md:p-2 p-1 w-full">
          <video className='w-full shadow-xl  rounded-full z-50' loop muted autoPlay>
        <source src={a9} type="video/mp4" />
          </video>
        </div>
      </div>
      <div class="flex flex-wrap md:w-1/2 w-full" data-aos="fade-left" data-aos-duration="800">
        <div class="md:p-2 p-1 w-full">
        <Link to={"/product3"}> <img alt="gallery" class="w-full object-cover h-full hover:p-2 transition-all shadow-xl bg-amber-500 object-center block" src={a4}/></Link>
        </div>
        <div class="md:p-2 p-1 w-1/2">
        <Link to={"/product4"}> <img alt="gallery" class="w-full object-cover h-full hover:p-2 transition-all shadow-xl bg-orange-500 object-center block" src={a3}/></Link>
        </div>
        <div class="md:p-2 p-1 w-1/2">
        <Link to={"/product5"}>    <img alt="gallery" class="w-full object-cover h-full hover:p-2 transition-all shadow-xl bg-violet-500 object-center block" src={a5}/></Link>
        </div>
      </div>
    </div>
    <div class="md:flex block flex-wrap md:-m-2 -m-1">
    <div class="flex flex-wrap md:w-1/2 w-full" data-aos="fade-right" data-aos-duration="800">
        <div class="md:p-2 p-1 w-full">
        <Link to={"/product6"}> <img alt="gallery" class="w-full object-cover h-full hover:p-2 transition-all shadow-xl bg-sky-400 object-center block" src={t6}/></Link>
        </div>
        <div class="md:p-2 p-1 w-1/2">
        <Link to={"/product7"}>   <img alt="gallery" class="w-full object-cover h-full hover:p-2 transition-all shadow-xl bg-yellow-500 object-center block" src={t3}/></Link>
        </div>
        <div class="md:p-2 p-1 w-1/2">
        <Link to={"/product8"}> <img alt="gallery" class="w-full object-cover h-full hover:p-2 transition-all shadow-xl bg-red-800 object-center block" src={t4}/></Link>
        </div>
      </div>
      <div class="flex flex-wrap md:w-1/2 w-full" data-aos="fade-left" data-aos-duration="800">
        <div class="md:p-2 p-1 w-1/2">
        <Link to={"/product9"}>    <img alt="gallery" class="w-full object-cover h-full hover:p-2 transition-all shadow-xl bg-yellow-500 object-center block" src={a7}/></Link>
        </div>
        <div class="md:p-2 p-1 w-1/2">
        <Link to={"/product10"}>   <img alt="gallery" class="w-full object-cover h-full hover:p-2 transition-all shadow-xl bg-stone-300 object-center block" src={a10}/></Link>
        </div>
        <div class="md:p-2 p-1 w-full"> 
               <video className='w-full shadow-xl  rounded-full z-50' loop muted autoPlay>
        <source src={a8} type="video/mp4" />
          </video>
        </div>
      </div>
     
    </div>
  </div>
</section>
<footer className="bg-yellow-400 Caviar text-white overflow-x-hidden w-full z-50" id='footer'>
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

      <a href="#shop"><button className="button mt-24 ml-auto">
       
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

export default Shop;