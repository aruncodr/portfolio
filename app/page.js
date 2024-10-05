"use client"
import Link from 'next/link'
import Header from './Header';
import { Montserrat,Lato } from 'next/font/google'
import Image from 'next/image';
import getWork from './getWork/page';
const mont = Montserrat({ subsets: ['latin'],
   weight: ['100','300','400','500','600','700','900'],
})
const lato = Lato({ subsets: ['latin'],
  weight: ['100','300','400','700','900'],
})
export default function Home() {

  return (
<div className='text-stone-600 //color: rgb(20 184 166); 20,184,166 :  204,251,241'>

    <div>
      <Header/>
    </div>
    
    <div className='flex h-[640px]'>
        <Image className='absolute z-[-2] top-16 right-0' src="/arun.svg" width={900} height={1000}></Image>

    {/* <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]" /> */}
      {/* ------lower------- */}

      {/* -----upper------ */}
    {/* <div class="absolute top-0 left-10  h-screen w-[1200px]
      bg-[radial-gradient(100%_50%_at_50%_0%,rgba(153,246,228,0.1)_0,rgba(20,184,166,0)_50%,rgba(20,184,166,0)_100%)]"></div> */}
      {/* ------left lower------- */}

      <div className='md:w-1/2 pt-20 pl-12 md:pl-52'>
          <div className={`${lato.className} leading-none font-semibold text-5xl md:text-[76px]`}>
              Arun Zeds<span className='text-teal-500'>;</span>
          </div>
            {/* h1 - 7xl | h2 - xs | test - 14px */}
          <div className='leading-none tracking-widest text-[0.83em] text-stone-400 pt-2.5 font-semibold'>
              FULL STACK DEVELOPER&nbsp;<span className='text-teal-500'>|</span>&nbsp;PONDICHERRY, INDIA
          </div>
          <div className={`${lato.className} pt-1.5 pb-0.5 text-sm text-[1.20rem] font-[400] tracking-wider md:w-[360px]`}>           
            <div className='text-teal-500 pt-0.5 text-[15px] font-medium'>
              Desc<snap className="font-semibold">&nbsp; (&nbsp; )</snap>
              <span className='text-teal-500 text-[15px] font-semibold'>&nbsp; &#123;</span>
            </div>
            <div className='leading-[22px] py-1 text-[15px] text-stone-500'>
              We mainly use<span className='text-teal-500 font-normal'> Tailwind, Next js and App write </span> 
              to create innovative website with great user experience to our clients.
            </div>
            <div className='text-teal-500 text-[15px] font-semibold'>&#125;</div>
          </div>
          <Link href="./cv">
            <button className='mt-2 h-10 w-36 font-medium text-[15px] mx-auto bg-teal-500 text-white rounded-lg'>
            getProject<snap className="font-semibold">&nbsp; (&nbsp; )</snap></button>
          </Link>
      </div>
      <div className='w-1/2'>

      </div>
    </div>

    {/* ----------------------WORK () page ---------------------- <span className='text-teal-500 font-semibold'>&nbsp; (&nbsp; )</span> */}
    <div className="bg-stone-50 pt-12 mx-auto pb-20 px-40">
      <div className={`${lato.className} pl-8 pb-12 text--center text-xl font-medium `}>
        Work<span className='text-teal-500 font-semibold'>&nbsp; (&nbsp; )</span>
      </div>
      <div className='md:flex'>
        <div className="mx-auto p-5 w-[500px] bg-white rounded-2xl shadow-sm">
            <Image className="rounded-2xl h-[250px] object-cover object-top shadow-sm" src="/land1.png" width={500} height={500}></Image>
            <div className={`tracking-wider pt-4 text-xl text-stone-500 font-medium`}>
            MOTHER CAB BOOKING PAGE
            </div>

            <div className={`${lato.className} leading-[22px] pt-0.5 pb-1 text-[14px] text-stone-600 tracking-wide`}>
            To book a cab taxi ride by selecting vechicle type, pickup and drop off location using Google API.
            </div>
            {/* <div className={`${lato.className} leading-[22px] tracking-wide text-[13px] text-stone-400`}>
              Cab Booking | Google API
            </div> */}
            <div className={`${lato.className} pt-2 text-stone-500 font-medium gap-3 flex text-xs`}>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">Tailwind</div>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">Next js</div>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">App write</div>
            </div>
        </div>

        <div className="mx-auto p-5 w-[500px] bg-white rounded-2xl shadow-sm">
            <div className=''>
              <Image className="rounded-2xl h-[250px] object-cover object-top shadow-sm" src="/land2.png" width={500} height={500}></Image>
            </div>
            <div className={`tracking-wider pt-4 text-xl text-stone-500 font-medium`}>
              PONDICHERRY TORISIUM
            </div>

            <div className={`${lato.className} leading-[22px] pt-0.5 pb-1 text-[14px] text-stone-500 tracking-wide`}>
            Explore pondicherry tourist attraction spots and assist travellers to making Decisions by offering reviews.
            </div>
            {/* <div className={`${lato.className} leading-[22px] tracking-wide text-[13px] text-stone-400`}>
              Cab Booking | Google API
            </div> */}
            <div className={`${lato.className} pt-2 text-stone-500 font-medium gap-3 flex text-xs`}>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">Tailwind</div>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">Next js</div>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">App write</div>
            </div>
        </div>

      </div>
      {/* ---------------- 2 FLEX ----------------- */}
    <div className='md:flex pt-12'>
      <div className="mx-auto p-5 w-[500px] bg-white rounded-2xl shadow-sm">
            <div className=''>
              <Image className="rounded-2xl h-[250px] object-cover object-top shadow-sm" src="/land3.png" width={500} height={500}></Image>
            </div>
            <div className={`tracking-wider pt-4 text-xl text-stone-500 font-medium`}>
              AZ MOBILE SPECIFICATION
            </div>

            <div className={`${lato.className} leading-[22px] pt-0.5 pb-1 text-[14px] text-stone-500 tracking-wide`}>
            Indepth Technical Information on Mobile Phone, Offers extensive specifications like display, 
            processor, camera, battery and more.

            </div>
            {/* <div className={`${lato.className} leading-[22px] tracking-wide text-[13px] text-stone-400`}>
              Cab Booking | Google API
            </div> */}
            <div className={`${lato.className} pt-2 text-stone-500 font-medium gap-3 flex text-xs`}>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">Tailwind</div>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">Next js</div>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">App write</div>
            </div>
        </div>
        <div className="mx-auto p-5 w-[500px] bg-white rounded-2xl shadow-sm">
            <div className=''>
              <Image className="rounded-2xl h-[250px] object-cover object-top shadow-sm" src="/land4.png" width={500} height={500}></Image>
            </div>
            <div className={`tracking-wider pt-4 text-xl text-stone-500 font-medium`}>
              PONDICHERRY TORISIUM
            </div>

            <div className={`${lato.className} leading-[22px] pt-0.5 pb-1 text-[14px] text-stone-500 tracking-wide`}>
            Explore Pondicherry Tourist Attraction spots and Assist travellers to making Decisions by offering reviews.
            </div>
            {/* <div className={`${lato.className} leading-[22px] tracking-wide text-[13px] text-stone-400`}>
              Cab Booking | Google API
            </div> */}
            <div className={`${lato.className} pt-2 text-stone-500 font-medium gap-3 flex text-xs`}>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">Tailwind</div>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">Next js</div>
              <div className="bg-stone-200 rounded-full py-0.5 px-3">App write</div>
            </div>
        </div>
      </div>

    </div>
    {/* --------------------- About () ------------------------- */}
    <div className='mx-auto pt-12 pb-72 px-40'>
      <div className={`${lato.className} pl-8 text--center text-xl font-medium `}>
        About<span className='text-teal-500 font-semibold'>&nbsp; (&nbsp; )</span>
      </div>
 
    <div className='flex gap-12 centent-center pt-16 mr-'>
      <div className={`${lato.className} w-6/12 text-right md:pl-80 leading-none font-semibold text-5xl md:text-[76px]`}>
            Arun<br />Zeds<span className='text-teal-500'>;</span>
      </div>
      <div className={`${lato.className} w-7/12 pt-5 pr-[184px] text-left font-[400] text-base tracking-wide leading-[24px] text-stone-600`}>
              <span className='text-teal-500'>"</span>
              I am arun zeds, full stack web developer dedicated to <span className='text-teal-500'> turning ideas into creative solutions. </span>
              <div className='pt-3 pb-[18px]'></div>
              <span className='text--teal-500'> Outside</span> of coding, I love <span className='text-teal-500'>photography</span> and exploring <span className='text-teal-500'>men's lifestyles.</span>
              <span className='text-teal-500 font-semibold'>"</span> 
              {/* <span className='text-teal-500 font-medium'> Let's connect!</span> */}
      </div>
    </div>

      <div className='text-teal-500 py-9 text-3xl text-center font-semibold'>Let's Talk About Your Dream</div>
      <div className='flex justify-center gap-12 text-stone-500'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50">
          <path fill="#78716c" d="M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z"></path>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50">
              <path fill="#78716c" d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 64 64">
          <path fill="#78716c" d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 64 64">
          <path fill="#78716c" d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
          </svg>
      </div>

    </div>


</div>
  );
}
