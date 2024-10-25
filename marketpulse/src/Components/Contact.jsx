import './App.css';
import  {React, useEffect ,useState} from 'react';
import './App.css';
import vid3 from './images/3.mp4'
import { Link, useNavigate } from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
function Contact() {
  useEffect(()=>{
    Aos.init();
      },[])
  return (
    <body className='bg-red-600 text-white Caviar'  data-theme="light">
      <nav className="w-full z-50 " id='nav'>
  <div className="container border-b-4 border-b-white Caviar px-5 py-3 lg:px-8 mb-2 w-11/12 flex mx-auto justify-between">
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
  <ul tabIndex={0} className="dropdown-content menu bg-red-700  rounded-box z-[1] w-24 p-2 shadow">
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

    <footer className="  overflow-x-hidden w-full z-[-10]" id='footer'>
  <div className="block container  mx-auto px-5 py-12 w-11/12 justify-center" data-aos="fade-down" data-aos-duration="800">
    <h2 className="font-extrabold text-3xl text-center Aurora lg:text-7xl lg:text-left tracking-wider py-16 border-b-8 border-b-white">
      Reach Out to Us.
    </h2>
    <p className="py-8 text-lg font-bold">
      Email us: <br />
      <span className="font-extrabold text-xl text-center lg:text-5xl lg:text-left py-8 hover:line-through transition-all">
        ashriamahmud2627@gmail.com
      </span>
    </p>
    <div className="flex py-5 px-8 justify-between">
      <address className="text-lg lg:text-4xl leading-9 w-1/2">
        <span className='font-extrabold'>Address:</span> <br /><br />
        Korte Hofstraat 1A <br />
        2011 DT <br />
        Haarlem <br />
        The Netherlands
      </address>

    </div>
  </div>
</footer>
    </body>
  );
}

export default Contact;