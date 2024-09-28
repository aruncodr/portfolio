import React from 'react'
import { Lato } from 'next/font/google'

const lato = Lato({ subsets: ['latin'],
  weight: ['100','300','400','700','900'],

})

function PageContent() {
  return (
    <div className='bg-white mx-auto text-gray-800 pt-4 w--[820px] w-[794px] h-[1122px]'>

      <div className='leading-[52px]'>
        <div className='text-[#666666] font-light text-center text-[48px]'>Arunkumar</div>
        <div className='text-[#666666] leading-[18px] text-center text-[16px]'>
           <div className={lato.className}><a href='https://arunzeds.com/'>arunzeds.com</a> &nbsp;|&nbsp; github/aruncodr<br />
           <span className='text-[14px] leading-6'>97867 87507</span> &nbsp;|&nbsp; arunzeds@gmail.com</div>
        </div>
      </div>

      <div className="h-[1px] mt-2 bg-gray-400 border-1 border-gray-400 dark:bg-gray-400" ></div>

      <div className='grid grid-cols-3 pt-1 px-10 '>

      <div className='pr-8 leading-none FIRSTSECTION'>
        {/* ------------ LINK ------------ {`${lato.className}`} */}
        <div>
            <h1 className={lato.className}>LINKS</h1>
            <h2>
              <span className='head-bold'>ABOUT</span> &nbsp;|&nbsp; 
               A<span className='head-xs'>RUN </span>
               Z<span className='head-xs'>EDS</span>
            </h2>
            <p className={lato.className}><a href='https://arunzeds.com/'>arunzeds.com</a></p>

            <h2>
               R<span className='head-xs'>ESUME</span> &nbsp;|&nbsp; 
               CV<span className='head-xs'></span>
            </h2>
            <p className={lato.className}><a href='https://arunzeds.com/cv'>arunzeds.com/cv</a></p>

            <h2>
               P<span className='head-xs'>ROFILE</span>
            </h2>
            <p>
            <span className={lato.className}><a href='https://arunzeds.com/cv'>Pintest/arunzeds</a></span><br />
            <span className={lato.className}><a href='https://arunzeds.com/cv'>Linked.in/arunzeds</a></span><br />
            <span className={lato.className}><a href='https://arunzeds.com/cv'>github/aruncodr</a></span><br />
            </p>
            <h2>
               C<span className='head-xs'>ONTACT</span>
            </h2>
            <p>
            <span className={lato.className}><a href='https://arunzeds.com/cv'>Arunkumar - Arunzeds</a></span><br />
            <span className={lato.className}><a href='https://arunzeds.com/cv'>9786787507</a></span><br />
            <span className={lato.className}><a href='https://arunzeds.com/cv'>Pondicherry</a></span><br />
            <span className={lato.className}><a href='https://arunzeds.com/cv'>arunzeds@gmail @outlook</a></span><br />
            <span className={lato.className}><a href='https://arunzeds.com/cv'>aruncodr@gmail @outlook</a></span><br />
            </p>
      </div>

          {/* ----------------- OTHER PERKS -------------- */}
      <div>
          <h1 className={lato.className}>OTHER PERKS</h1>
          <h2>
            <span className='head-bold'>FOCUS</span> &nbsp;|&nbsp; 
            L<span className='head-xs'>EARNING </span>
          </h2>
          <p className={lato.className}>Continue Focusing on Full-Stack Development and DevOps.</p>
          <h2>
            <span className='head-bold'>COMMUNICATE</span> &nbsp;|&nbsp; 
            L<span className='head-xs'>ANGUAGES</span>
          </h2>
          <p className={lato.className}>Speaks Native Tamil, Conversational English.</p>
          <h2>
            <span className='head-bold'>MORE</span> &nbsp;|&nbsp; 
            F<span className='head-xs'>REE </span>
            T<span className='head-xs'>IME</span>
          </h2>
          <p className={lato.className}>To Blog, Travel, take Photographs, and Explore Men's Lifestyles.</p>
      </div>
              {/* -------------------- MORE ---------------- */}
      <div>
          <h1 className={lato.className}>MORE</h1>
          <h2 className=''>
            <span className='head-bold'>CRAFTS</span> &nbsp;|&nbsp; 
            P<span className='head-xs '>ROJECTS</span>
            <div className='pt-1.5 text-[#666666] text-[13px]'>
            R<span className='head-xs'>ESUME </span>
            B<span className='head-xs'>UILDER</span></div>
          </h2>
          <p className={lato.className}>Our website helps users create and customize professional resumes, enhancing their job prospects.</p>
          <h2 className='text-[#666666] text-[13px]'>
            3<span className='head-xs'>D </span>
            P<span className='head-xs'>ORTFOLIO - </span>
            T<span className='head-xs'>hree JS</span>
          </h2>
          <p className={lato.className}>A 3D Portfolio is an interactive, three-dimensional digital showcase of my projects.</p>

      </div>
    </div>

    {/* ------------ Second column ------------ */}
    <div className='col-span-2 pl-4 pr-2'>
      {/* ------------------SKILLS---------------- */}
      <div>
          <h1 className={lato.className}>SKILLS</h1>
          <h2>
            <span className='head-bold'>FRONT </span>
            <span className='head-bold'>END</span> &nbsp;|&nbsp; 
            L<span className='head-xs'>IBRARIES </span>
          </h2>
          <p className={lato.className}>Tailwind, JavaScript, React and Next.js</p>
          <h2>
            <span className='head-bold'>BACK </span>
            <span className='head-bold'>END</span> &nbsp;|&nbsp; 
            T<span className='head-xs'>ECHNOLOGIES </span>
          </h2>
          <p className={lato.className}>Node.js, No SQL databases (Mongo db)</p>
          <h2>
            <span className='head-bold'>DESIGNING</span> &nbsp;|&nbsp; 
            T<span className='head-xs'>OOLS </span> &nbsp;|&nbsp; 
            V<span className='head-xs'>ERSION </span>
            C<span className='head-xs'>ONTROL</span>

          </h2>
          <p className={lato.className}>Attentive to UI/UX details and high quality.<br />Flow on Figma and Adobe Illustator. Fan of Github.</p>
      </div>
      {/* ----------------- EDUCATION -------------- */}
      <div>
          <h1 className={lato.className}>EDUCATION</h1>
          <h2>
            <span className='head-bold'>UNDER GRADUATE</span> &nbsp;|&nbsp; 
            C<span className='head-xs'>OMPUTER </span>
            S<span className='head-xs'>CIENCE</span><br />
          </h2>
          <div className='leading-none pt-1.5 text-[#666666] tracking-wide text-[13px] font-medium'>Bachelor of Computer Applications - B.C.A</div>
          <p className={lato.className}>Sri Aravindar Arts and Science College<br />College in Tamil Nadu</p>
      </div>
      {/* ---------------PROJECT EXPERIENCE------------ */}
      <div>
          <h1 className={lato.className}>PROJECT EXPERIENCE</h1>
          <h2>
            <span className='head-bold'>MOTHER CABS</span> &nbsp;|&nbsp; 
            C<span className='head-xs'>AB </span>
            B<span className='head-xs'>OOKING</span> &nbsp;|&nbsp; 
            W<span className='head-xs'>EBSITE</span>

          </h2>
          <h3>mothercabs.com</h3>
          <ul role="list" className=''>
            <li>A Cab Booking System is essentially an online platform where users can request a taxi ride by selecting their desired vehicle type, 
                inputting their pickup and drop-off locations</li>
            <li>The system automatically notify to my client authorized drivers to pick them up.</li>
            <li>Providing features like estimated fare calculation , allowing customers to easily schedule trips and receive updates on 
                their ride status.</li>
          </ul>

          <h2>
            <span className='head-bold'>AZ SPECS</span> &nbsp;|&nbsp; 
            M<span className='head-xs'>OBILE </span>
            S<span className='head-xs'>PECIFICATION </span>
            W<span className='head-xs'>EBSITE</span>
          </h2>
          <h3>azspecs.com</h3>
          <ul role="list" className=''>
            <li>AZ Spces is newly recognized as one of the top resources for in-depth technical information on mobile phones.</li>
            <li>The site offers extensive specifications and comparisons across a large database of smartphone models, covering aspects 
                like display, processor, camera, battery, and other hardware components.</li>
          </ul>

          <h2>
            <span className='head-bold'>PONDY STORE</span> &nbsp;|&nbsp; 
            E<span className='head-xs'>XPLORE </span>
            P<span className='head-xs'>ONDICHERRY</span> &nbsp;|&nbsp; 
            T<span className='head-xs'>ORSIUM</span> &nbsp;|&nbsp; 
            S<span className='head-xs'>HOPPING</span>
          </h2>
          <h3>pondystore.com</h3>
          <ul role="list" className=''>
            <li>Pondystore is a concept designed to explore the tourist attractions and top shopping spots in Pondicherry. </li>
            <li>My website assists travelers in making informed decisions by offering reviews, price comparisons, and offering services.</li>
          </ul>
      </div>

    </div>

  </div>

</div>
  )
}

export default PageContent