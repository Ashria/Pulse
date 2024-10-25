import  {React, useEffect,useState } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import a1 from "../images/shop4.jpg"

const Product3 = () => {
    useEffect(()=>{
        Aos.init();
          },[])

          const [show, setShow] = useState(false);
          const [show2, setShow2] = useState(true);

    return (
        <div className='Caviar overflow-x-hidden' data-theme="light">
                <nav className="w-full z-50 " id='nav'>
  <div className="container border-b-4 border-b-black Caviar px-5 py-3 lg:px-8 mb-2 w-11/12 flex mx-auto justify-between">
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
  <div tabIndex={0} role="button" className="btn m-1"><FontAwesomeIcon icon={faBars} className=' text-sm' /></div>
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
<section class="text-gray-600  overflow-hidden">
  <div class=" px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0" data-aos="fade-left" data-aos-duration="2000">
        <h2 class="text-xs title-font  text-yellow-500 tracking-widest">Pulse</h2>
        <h1 class="text-blue-700 text-3xl title-font font-bold Aurora my-4">SunRose</h1>
        <div className='transition-all'>
      <div className="flex border-b">
        <a 
          className={`flex-grow py-2 cursor-pointer text-lg px-1 ${show2 ? 'text-red-500 border-sky-500' : 'border-gray-300'}`} 
          onClick={() => { setShow2(true); setShow(false); }}
        >
          Description
        </a>
        <a 
          className={`flex-grow py-2 text-lg cursor-pointer px-1 ${show ? 'text-red-500 border-sky-500' : 'border-gray-300'}`} 
          onClick={() => { setShow(true); setShow2(false); }}
        >
          Reviews
        </a>
      </div>

      {show2 && (
        <p className="leading-relaxed mb-4 mt-10 transition-all">
          A vibrant shirt featuring bold, interlocking brick patterns in classic red, blue, yellow, and green colors. Scattered across the design are playful minifigure silhouettes in various action poses, adding a dynamic and fun element. The sleeves and collar have subtle block-inspired detailing, giving it a creative yet casual look perfect for fans of building and imagination. </p>
      )}

      {show && (
<div className='mb-10 '>
<h2 className='my-4 text-center text-sky-400 font-bold'> To see more scroll right</h2>
        <div className="carousel rounded-box w-full overflow-y-hidden">
        
        <div className="carousel-item w-full">
        <div class=" px-5  mx-auto">
    <div class="flex flex-wrap -m-4">
      
      <div class="p-4 w-full">
        <div class="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed mb-6">Great for Casual Wear <br />
          This shirt is both comfortable and stylish. The colors pop, and the block design is a conversation starter. I’ve worn it a few times, and it holds up well after washing.</p>
          <a class="inline-flex items-center">
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-bold text-sky-900">_-ANika</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>


        </div>
        <div className="carousel-item w-full">
        <div class=" px-5  mx-auto">
    <div class="flex flex-wrap -m-4">
      
      <div class="p-4 w-full">
        <div class="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed mb-6">Eye-Catching Design <br />
          I wore this to a casual event, and everyone loved it! The colors are bright, and the block-inspired design is fun without being over-the-top. It’s well-made and fits great.</p>
          <a class="inline-flex items-center">
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-bold text-blue-400">Tomaliu_</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
        </div>
       
        <div className="carousel-item w-full">
        <div class=" px-5  mx-auto">
    <div class="flex flex-wrap -m-4">
      
      <div class="p-4 w-full">
        <div class="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed mb-6">Nostalgic and Stylish <br />
          This shirt takes me back to my childhood! The block detailing is subtle yet noticeable, and the minifigure silhouettes add a fun touch. It’s comfortable and perfect for any fan of creative designs.</p>
          <a class="inline-flex items-center">
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-bold text-blue-900">Jhoney _-_</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
        </div>
        <div className="carousel-item w-full">
        <div class=" px-5  mx-auto">
    <div class="flex flex-wrap -m-4">
      
      <div class="p-4 w-full">
        <div class="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed mb-6">Creative and Fun! <br />
          I love the playful design of this shirt. The colors are vibrant, and the brick pattern is so unique. It’s perfect for casual outings and always gets compliments. Definitely one of my favorite shirts!</p>
          <a class="inline-flex items-center">
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-bold text-blue-400">_Alper Kamu</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
        </div>
       
      </div>
</div>
      )}
    </div>
        <div class="flex border-t border-gray-200 py-2 mt-10">
          <span class="text-red-500">Color</span>
          <span class="ml-auto text-blue-500">Multi</span>
        </div>
        <div class="flex border-t border-b mb-10 border-gray-200 py-2">
          <span class="text-blue-500">Size</span>
          <span class="ml-auto text-red-500">Medium</span>
        </div>
   
        <div class="flex">
          <span class="title-font font-bold text-2xl text-red-500">$58.00</span>
          <a href="https://www.okalpha.co/shop/okalpha-enamel-pin" target='_blank'className='flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded'>
            <button class="">BUY</button></a>
       
        </div>
      </div>
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-2xl  shadow-2xl" src={a1} data-aos="fade-right" data-aos-duration="2000"/>
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

    </div>
  </div>
</footer>
        </div>
    );
};

export default Product3;