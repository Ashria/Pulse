import  {React, useEffect ,useState} from 'react';
import './App.css';
import vid from './images/vid1.mp4'
import vid1 from './images/1.mp4'
import vid3 from './images/3.mp4'
import { Link, useNavigate } from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faDownLong } from '@fortawesome/free-solid-svg-icons';
import t1 from "./images/team1.png"
import t2 from "./images/team2.png"
import t3 from "./images/team3.png"
import t4 from "./images/team4.png"


function Home() {
    useEffect(()=>{
        Aos.init();
          },[])
          const [scrollProgress1, setScrollProgress1] = useState(0);
          const [scrollProgress2, setScrollProgress2] = useState(0);
          const [scrollProgress3, setScrollProgress3] = useState(0);
          const [show, setShow] = useState(false);
          const [show2, setShow2] = useState(false);
          const [show3, setShow3] = useState(false);
          const [show4, setShow4] = useState(false);
        
          // Function to update the progress based on scroll
          const updateScrollProgress = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (scrollTop / scrollHeight) * 250;
        
            // Update each progress bar with different logic if needed
            setScrollProgress1(progress);
            setScrollProgress2(progress * 0.85); // 75% of scroll
            setScrollProgress3(progress * 1); // 50% of scroll
          };
        
          // Add the event listener on scroll
          useEffect(() => {
            window.addEventListener('scroll', updateScrollProgress);
            
            // Cleanup listener on unmount
            return () => window.removeEventListener('scroll', updateScrollProgress);
          }, []);
       
  return (
    <>
    <body className=' Caviar  overflow-x-hidden bg-blue-600 ' data-theme="light">
    <nav className="w-full z-50 bg-white " id='nav'>
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
<section id="intro" className="w-full py-24 px-8 lg:px-36" data-aos="fade-up" data-aos-duration="800">
  <h1 className='text-3xl lg:text-7xl text-white leading-loose tracking-wider Aurora font-extrabold'>Where Trends <br />
  Meet Deals </h1> <br />
<a href="#about">  <FontAwesomeIcon icon={faDownLong} className='text-4xl lg:text-7xl leading-loose tracking-wider Aurora font-extralight hover:text-red-500 text-red-300 px-10 ml-auto block' /></a>

</section>
<div id="about" className=' text-white  font-light px-12 py-32 text-lg lg:text-2xl    mx-auto block  ' data-aos="fade-up" data-aos-duration="2000">
<p><span className='text-2xl lg:text-5xl font-bold'>Welcome to <b> Pulse</b>, your go-to destination for discovering the latest products and deals across a wide range of categories. </span> <br /><br /> <br />Whether you're looking for fashion, electronics, home goods, or something unique, we've got you covered. Our platform offers a seamless shopping experience with user-friendly navigation, detailed product listings, and secure payment options to make your online shopping effortless and enjoyable. Explore our curated collections, stay up-to-date with the latest trends, and enjoy a personalized shopping experience with Market Pulse—where quality meets convenience.

</p>
</div>
<video className='w-full ' loop muted autoPlay>
        <source src={vid} type="video/mp4" />
          </video>

<div id="Service" className='py-24 block mx-auto px-5  bg-red-600' >
  
<h2  className='text-4xl lg:text-8xl  Aurora font-extrabold text-white pb-8 px-8 '>Services :</h2>
<progress className="progress progress-warning w-11/12  block mx-auto  h-12 lg:h-16 my-2 lg:my-4"  value={scrollProgress3} max="100"></progress> <br />
<progress className="progress progress-warning w-11/12  block mx-auto  h-12 lg:h-16 my-2 lg:my-4" value={scrollProgress2} max="100"></progress> <br />
<progress className="progress progress-warning w-11/12  block mx-auto  h-12 lg:h-16 my-2 lg:my-4" value={scrollProgress1} max="100"></progress> <br />
<section class="text-white body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="lg:w-1/2 w-full lg:mt-24 my-5 lg:mb-0 rounded-lg overflow-hidden"> 
    <video className='w-full  justify-center items-center block shadow-2xl  rounded-lg  z-50' loop muted autoPlay>
        <source src={vid1} type="video/mp4" />
          </video>
    </div>
    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-400 text-red-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-white text-2xl Aurora title-font font-medium mb-3">Storyboarding.</h2>
          <p class="leading-relaxed text-sm">e like drawing pictures just as much as we like animating them. Yup, we still draw things with our hands. Whether it’s an app run-through or a detailed animated narrative, storyboarding plays a key role in springboarding final picture. </p>
      
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-400 text-red-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-white text-2xl Aurora title-font font-medium mb-3">Illustration</h2>
          <p class="leading-relaxed text-sm">We like having something to animate, so we tend to illustrate what it is we are trying to showcase. Seems to make sense to us. Whether 2D based or something built in 3D space, illustration is a chance to buy good steel. And yes, that was a metaphor.</p>
         
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-400 text-red-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-white Aurora text-2xl title-font font-medium mb-3">Creative Direction</h2>
          <p class="leading-relaxed text-sm">Senior detail in all aspects of production makes for a peach of a final product. Us old timers have a good grasp on standards; which means we have plenty fun overseeing the subtleties, be they sound, content or movement related.</p>
      
        </div>
      </div>
    </div>
  </div>
</section>

</div>
<div className='bg-blue-600 text-white w-full py-28 px-4  lg:px-20 lg:container block mx-auto justify-center align-middle' id="team">
<h2 className='font-extrabold text-5xl lg:text-7xl Aurora py-12 text-center md:text-left px-9'> Our Team</h2>
<section class="font-light my-10 mx-auto block md:flex" id='t1' data-aos="fade-down" data-aos-duration="800">
  <div class="container mx-auto flex px-5  md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start  mb-16 md:mb-0 items-center text-center">
      <h3 class="font-bold lg:text-5xl Aurora text-3xl mb-4  lg:ml-auto">Sophia Reyes 
      </h3><span className='indent-4 text-sm text-light pb-8 lg:ml-auto'>  – Product Development Manager</span>
     {show ? <p class="mb-8 leading-relaxed font-bold ml-auto lg:text-right text-lg  transition-all">Sophia works closely with designers and manufacturers to ensure that every piece in the collection meets the brand’s quality and style standards.</p>:false}
    
    </div>
    <div class=" lg:w-5/12 md:w-1/2 w-7/12 block mx-auto mb-4 transition-all" onMouseEnter={()=> setShow(true)}  onMouseLeave={()=>setShow(false)}>
      <img class="object-cover object-center mx-auto rounded shadow-2xl  w-10/12 hover:w-11/12 transition-all" alt="hero" src={t1}/>
    </div>
  </div>
</section>
<section class="font-light my-10 mx-auto block md:flex" id='t2' data-aos="fade-down" data-aos-duration="800">
<div class=" lg:w-5/12  md:w-1/2 w-7/12 block mx-auto mb-4 transition-all " onMouseEnter={()=> setShow2(true)}  onMouseLeave={()=>setShow2(false)}>
      <img class="object-cover object-center mx-auto rounded shadow-2xl  w-10/12 hover:w-11/12 transition-all" alt="hero" src={t2}/>
    </div>
  <div class="container mx-auto flex px-5  md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start  mb-16 md:mb-0 items-center text-center">
      <h3 class="font-bold lg:text-5xl Aurora text-3xl mb-4  lg:mr-auto">Noah Bennett
      </h3><span className='indent-4 text-sm text-light pb-8 lg:mr-auto'>  – Marketing and Brand Strategist</span>
     {show2 ? <p class="mb-8 leading-relaxed font-bold ml-auto lg:text-left text-lg  transition-all">Noah focuses on creating and executing marketing strategies that increase brand visibility and customer engagement, both online and offline.</p>:false}
    
    </div>
  
  </div>
</section>
<section class="font-light my-10 mx-auto block md:flex" id='t3' data-aos="fade-down" data-aos-duration="800">
  <div class="container mx-auto flex px-5  md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start  mb-16 md:mb-0 items-center text-center">
      <h3 class="font-bold lg:text-5xl Aurora text-3xl mb-4  lg:ml-auto">Liam Carter 
      </h3><span className='indent-4 text-sm text-light pb-8 lg:ml-auto'> - Lead Photographer</span>
     {show3 ? <p class="mb-8 leading-relaxed font-bold ml-auto lg:text-right text-lg  transition-all">Liam is responsible for capturing the essence of each product through high-quality photography, bringing Watch Pulse’s collections to life.</p>:false}
    
    </div>
    <div class=" lg:w-5/12  md:w-1/2 w-7/12 block mx-auto mb-4 transition-all " onMouseEnter={()=> setShow3(true)}  onMouseLeave={()=>setShow3(false)}>
      <img class="object-cover object-center mx-auto rounded shadow-2xl  w-10/12 hover:w-11/12 transition-all" alt="hero" src={t3}/>
    </div>
  </div>
</section>
<section class="font-light my-10 mx-auto block md:flex" id='t4' data-aos="fade-down" data-aos-duration="800">
<div class=" lg:w-5/12  md:w-1/2 w-7/12 block mx-auto mb-4 transition-all " onMouseEnter={()=> setShow4(true)}  onMouseLeave={()=>setShow4(false)}>
      <img class="object-cover object-center mx-auto rounded shadow-2xl  w-10/12 hover:w-11/12 transition-all" alt="hero" src={t4}/>
    </div>
  <div class="container mx-auto flex px-5  md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start  mb-16 md:mb-0 items-center text-center">
      <h3 class="font-bold lg:text-5xl Aurora text-3xl mb-4  lg:mr-auto">Ava Mitchell
      </h3><span className='indent-4 text-sm text-light pb-8 lg:mr-auto'> – Head of Creative Direction</span>
     {show4 ? <p class="mb-8 leading-relaxed font-bold ml-auto lg:text-left text-lg  transition-all">Ava oversees the creative vision for all campaigns, ensuring the brand's aesthetics and messaging are cohesive and innovative.</p>:false}
    
    </div>
  
  </div>
</section>
</div>
<footer className="bg-yellow-400 Caviar text-white overflow-x-hidden w-full z-[-10]" id='footer'>
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

      <a href="#intro"><button className="button mt-24 ml-auto">
       
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
    </>
  );
}

export default Home;