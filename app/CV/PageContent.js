import React from 'react'
import { Lato } from 'next/font/google'

const lato = Lato({ subsets: ['latin'],
  weight: ['100','300','400','700','900'],

})

function PageContent() {
  return (
    <div className='bg-white mx-auto text-gray-700 pt-4 w-[794px] h-[1122px]'>
      <div className='leading-[52px]'>
        <div className='text-[#666666] font-light text-center text-[48px]'>Arunkumar</div>
        <div className='text-[#666666] leading-[18px] text-center text-[16px]'>
           <div className={lato.className}><a href='https://arunzeds.com/'>arunzeds.com</a> | github/aruncodr<br />
           <span className='text-[14px] leading-6'>97867 87507</span> | arunzeds@gmail.com</div>
        </div>
      </div>

      <hr className="h-[1px] mt-2 bg-gray-400 border-0 dark:bg-gray-400" />

      <div className='grid pt-4 grid-cols-3 px-12'>

      <div className='FIRSTSECTION'>
        {/* ------------ LINK ------------ */}
        <div>
            <h1 className={lato.className}><span className='text-[#666666] text-2xl font-light'>LINKS</span></h1>

            <div className='flex'>
                <div className='text-[13px] font-bold'>
                      <span className='text-base'>A</span>BOUT 
                      <span className='text-base font-medium'>&nbsp;|&nbsp;</span>
                </div>
                <div className='text-[12px] leading-[26px] font-medium'><span className='text-sm'>A</span>RUN <span className='text-sm'>Z</span>EDS</div>
            </div>

            <div className='flex'>
              <div className='text-[12px] leading-4 font-medium'><span className='text-sm'>P</span>ORTFOLIO</div>
              <div className='text-sm font-medium'>&nbsp;|&nbsp;</div>
              <div className='text-[12px] leading-4 font-medium'><span className='text-sm'> M</span>E</div>
            </div>
            <div className={lato.className}>
                <div className='leading-[18px] tracking-wide text-black text-sm font-light'><a href='https://arunzeds.com/'>arunzed.com</a></div>
            </div>

            <div className='flex pt-1'>
              <div className='text-[12px] leading-4 font-medium'><span className='text-sm'>R</span>ESUME</div>
              <div className='text-sm font-medium'>&nbsp;|&nbsp;</div>
              <div className='text-[12px] leading-4 font-medium'><span className='text-sm'> CV</span></div>
            </div>
            <div className={lato.className}>
                <div className='leading-[18px] tracking-wide text-black text-sm font-light'><a href='https://arunzeds.com/cv'>arunzed.com/cv</a></div>
            </div>

            <div className='flex pt-1'>
              <div className='text-[12px] leading-3 font-medium'><span className='text-sm'>P</span>ROFILE</div>
            </div>
            <div className={lato.className}>
                <div className='leading-[18px] tracking-wide text-black text-sm font-light'><a href='https://arunzeds.com/cv'>Linked.in/aruncodr</a></div>
                <div className='leading-[18px] tracking-wide text-black text-sm font-light'><a href='https://arunzeds.com/cv'>github/aruncodr</a></div>
            </div>
            
            <div className='flex pt-1'>
              <div className='text-[12px] leading-3 font-medium'><span className='text-sm'>C</span>ONTACT</div>
            </div>
            <div className={lato.className}>
                <div className='leading-[18px] tracking-wide text-black text-sm font-light'><a href='https://arunzeds.com/cv'>Arunkumar - Arunzeds</a></div>
                <div className='leading-[18px] tracking-wide text-black text-[13px] font-light'><a href='https://arunzeds.com/cv'>9786787507</a></div>
                <div className='leading-[18px] tracking-wide text-black text-sm font-light'><a href='https://arunzeds.com/cv'>Pondicherry</a></div>
                <div className='leading-[18px] tracking-wide text-black text-sm font-light'><a href='https://arunzeds.com/cv'>arunzeds@gmail  @outlook</a></div>
                <div className='leading-[18px] tracking-wide text-black text-sm font-light'><a href='https://arunzeds.com/cv'>aruncodr@gmail  @outlook</a></div>
            </div>
          </div>
              {/* -------------------- MORE ---------------- */}
        <div className='pt-3'>
          <h1 className={lato.className}><span className='text-[#666666] text-2xl font-light'>MORE</span></h1>
          <div className='flex'>
                <div className='text-[13px] font-bold'>
                      <span className='text-base'>C</span>RAFTS 
                      <span className='text-base font-medium'>&nbsp;|&nbsp;</span>
                </div>
                <div className='text-[12px] leading-[26px] font-medium'><span className='text-sm'>P</span>ROJECTS</div>
            </div>
            <div className='text-[12px] leading-3 font-medium'><span className='text-sm'>R</span>ESUME <span className='text-sm'>B</span>ILUDER</div>
            <div className={lato.className}>
                <div className='leading-[18px] tracking-wide text-black text-sm font-light'>Our website helps users create and customize professional resumes, enhancing their job prospects.</div>
            </div>
           <div className='pt-0.5 text-[12px] leading-3 font-medium'><span className={lato.className}>3</span>D 
            <span className='text-sm'> P</span>ORTFOLIO - Three.js</div>
            <div className={lato.className}>
                <div className='leading-[18px] tracking-wide text-black text-sm font-light'>A 3D Portfolio is an interactive, three-dimensional digital showcase of my projects.</div>
            </div>

        </div>






      </div>





      {/* ------------ Second column ------------ */}
      <div className='col-span-2 pl-4'>
        
          {/* ------------------SKILLS---------------- */}
          <div className=''>
            <h1 className={lato.className}><span className='text-[#666666] text-2xl font-light'>SKILLS</span></h1>
            {/* ----------------- Frontend section ----------- */}
            <div className=''>
            <div className='flex'>
                <div className='text-[13px] font-bold'>
                      <span className='text-base'>F</span>RONT 
                      <span className='text-base'> E</span>ND
                      <span className='text-base font-medium'>&nbsp; |&nbsp;</span>
                </div>
                <div className='text-[12px] leading-[26px] font-medium'><span className='text-sm'>L</span>IBRARIES</div>
              </div>          
              <div className={lato.className}>
                <div className='leading-4 tracking-wide text-black text-sm font-light'>Tailwind, JavaScript, React and Next.js</div>
              </div>
            </div>
            {/* ----------------- Backend section ----------- */}
            <div className='pt-1.5'>
            <div className='flex'>
                <div className='text-[13px] font-bold'>
                      <span className='text-base'>B</span>ACK
                      <span className='text-base'> E</span>ND
                      <span className='text-base font-medium'>&nbsp; |&nbsp;</span>
                </div>
                <div className='text-[12px] leading-[26px] font-medium'><span className='text-sm'>T</span>ECHNOLOGIES</div>
              </div>           
              <div className={lato.className}>
                <div className='leading-4 tracking-wide text-black text-sm font-light'>Node.js, No SQL databases (Mongo db)</div>
              </div>
            </div>
                  {/* ----------------- Designing section ----------- */}
            <div className='pt-1.5'>
            <div className='flex'>
                <div className='text-[13px] font-bold'>
                      <span className='text-base'>D</span>ESIGNING
                      <span className='text-base font-medium'>&nbsp; |&nbsp;</span>
                </div>
                <div className='text-[12px] leading-[26px] font-medium'><span className='text-sm'>T</span>OOLS 
                <span className='text-base font-medium'>&nbsp; |&nbsp;</span>
                <span className='text-sm'>V</span>ERSION CONTROL</div>
              </div>           
              <div className={lato.className}>
                <div className='leading-4 tracking-wide text-black text-sm font-light'>
                  <div className=''>Attentive to UI/UX details and high quality.</div>
                  <div>Flow on Figma and Adobe Illustator. Fan of Github.</div>
                </div>
              </div>
            </div>

          </div>

          {/* ---------------PROJECT EXPERIENCE------------ */}
          <div className='pt-3'>
            <h1 className={lato.className}><span className='text-[#666666] text-2xl font-light'>PROJECT EXPERIENCE</span></h1>
            {/* ----------------- Mother cabs ----------- */}
            <div className=''>
              <div className='flex'>
                <div className='text-[13px] font-bold'>
                      <span className='text-base'>M</span>OTHER 
                      <span className='text-base'> C</span>ABS
                      <span className='text-base font-medium'>&nbsp; |&nbsp;</span>
                </div>
                <div className='text-[12px] leading-[26px] font-medium'><span className='text-sm'>
                  C</span>AB <span className='text-sm'>B</span>OOKING <span className='text-sm'>W</span>EBSITE</div>
                <div>
                <span className='text-base font-medium'>&nbsp;|&nbsp;</span>
                <span className='text-[12px] leading-[26px] font-medium'>
                <span className='text-sm'>G</span>OOGLE <span className='text-sm'>M</span>AP <span className='text-sm'>A</span>PI</span>
                </div>
              </div>
              <div className='leading-4 tracking-wide text-[13px] font-normal'>mothercabs.com</div>
              <div className={lato.className}>
                <ul role="list" className='leading-[18px] tracking-wide text-black text-sm pt-1 font-light
                marker:text-[#666666] list-disc pl-5 space-y-1.5'>
                  <li>A Cab Booking System is essentially an online platform where users can request a taxi ride by selecting their desired vehicle type, 
                  inputting their pickup and drop-off locations</li>
                  <li>The system automatically notify to my client authorized drivers to pick them up.</li>
                  <li>Providing features like estimated fare calculation , allowing customers to easily schedule trips and receive updates on 
                    their ride status.</li>
                </ul>
              </div>
            </div>
            {/* ----------------- Mobile Specification ----------- */}
            <div className='pt-1.5'>
              <div className='flex'>
                <div className='text-[13px] font-bold'>
                      <span className='text-base'>AZ</span>
                      <span className='text-base'> S</span>PCES
                      <span className='text-base font-medium'>&nbsp; |&nbsp;</span>
                </div>
                <div className='text-[12px] leading-[26px] font-medium'><span className='text-sm'>M</span>OBILE 
                <span className='text-sm'> S</span>PECIFICATION <span className='text-sm'>W</span>EBSITE</div>
              </div>
              <div className='leading-4 tracking-wide text-[13px] font-normal'>azspecs.com</div>
              <div className={lato.className}>
                <ul role="list" className='leading-[18px] tracking-wide text-black text-sm pt-1 font-light
                marker:text-[#666666] list-disc pl-5 space-y-1.5'>
                  <li>AZ Spces is newly recognized as one of the top resources for in-depth technical information on mobile phones.</li>
                  <li>The site offers extensive specifications and comparisons across a large database of smartphone models, covering aspects 
                    like display, processor, camera, battery, and other hardware components.</li>
                </ul>
              </div>
            </div>
            {/* ----------------- Puducherry store ----------- */}
            <div className='pt-1.5'>
              <div className='flex'>
                <div className='text-[13px] font-bold'>
                      <span className='text-base'>P</span>ONDY 
                      <span className='text-base'> S</span>TORE
                      <span className='text-base font-medium'>&nbsp; |&nbsp;</span>
                </div>
                <div className='text-[12px] leading-[26px] font-medium'><span className='text-sm'>E</span>XPLORE <span className='text-sm'>P</span>ONDICHERY</div>
                <div>
                <span className='text-base font-medium'>&nbsp;|&nbsp;</span>
                <span className='text-[12px] leading-[26px] font-medium'><span className='text-sm'>T</span>ORISIUM</span>
                <span className='text-base font-medium'>&nbsp;|&nbsp;</span>
                <span className='text-[12px] leading-[26px] font-medium'><span className='text-sm'>B</span>EST <span className='text-sm'>S</span>HOPPING</span>
                </div>
              </div>
              <div className='leading-4 tracking-wide text-[13px] font-normal'>pondystore.com</div>
              <div className={lato.className}>
                <ul role="list" className='leading-[18px] tracking-wide text-black text-sm pt-1 font-light
                marker:text-[#666666] list-disc pl-5 space-y-1.5'>
                  <li>Pondystore is a concept designed to explore the tourist attractions and top shopping spots in Pondicherry. </li>
                  <li>My website assists travelers in making informed decisions by offering reviews, price comparisons, and offering services.</li>
                </ul>
              </div>
            </div>

            {/* ----------------- EDUCATION -------------- */}
          <div className='pt-3'>
            <h1 className={lato.className}><span className='text-[#666666] text-2xl font-light'>EDUCATION</span></h1>
            {/* ----------------- B C A ----------- */}
            <div className=''>
              <div className='flex'>
                <div className='text-[13px] font-bold'>
                      <span className='text-base'>U</span>NDER 
                      <span className='text-base'> G</span>RADUATE
                      <span className='text-base font-medium'>&nbsp; |&nbsp;</span>
                </div>
                <div className='text-[12px] leading-[26px] font-medium'><span className='text-sm'>C</span>OMPUTER <span className='text-sm'>S</span>CIENCE</div>
              </div>
              <div className='leading-[18px] tracking-wide text-[13px] font-medium'>Bachelor of Computer Applications - B.C.A</div>
              <div className={lato.className}>
                <div className='leading-4 tracking-wide text-black text-sm pt-0.5 font-light'>Sri Aravindar Arts and Science College</div>
                <div className='leading-4 tracking-wide text-black text-sm pt-0.5 font-light'>College in Tamil Nadu</div>
              </div>
            </div>
          </div>
{/* ----------------- OTHER PERKS -------------- */}
        <div className='pt-3'>
            <h1 className={lato.className}><span className='text-[#666666] text-2xl font-light'>OTHER PERKS</span></h1>
            {/* ----------------- activities----------- */}
            <div className=''>
                <div className='flex text-[13px] font-bold'>
                  <div>
                      <span className='text-base'>L</span>ANGUAGES
                      <span className='text-base font-medium'>&nbsp;|&nbsp;</span>
                  </div>
                  <div className='text-[12px] leading-[26px] font-medium'><span className='text-sm'>S</span>PEAKING</div>
                </div>
                <div className={lato.className}>
                <div className='leading-4 tracking-wide text-black text-sm font-light'>Speaks Native Tamil, Conversational English.</div>
              </div>            
            </div>

            <div className='pt-1.5'>
                <div className='flex text-[13px] font-bold'>
                  <div>
                      <span className='text-base'>M</span>ORE
                      <span className='text-base font-medium'>&nbsp;|&nbsp;</span>
                  </div>
                  <div className='text-[12px] leading-[26px] font-medium'><span className='text-sm'>F</span>REE <span className='text-sm'>T</span>IME</div>
                </div>
                <div className={lato.className}>
                <div className='leading-4 tracking-wide text-black text-sm font-light'>Likes to Blog, Travel, Photoshoot and Explore Lifestyle.</div>
              </div>            
            </div>
          </div>
          


          </div>




      </div>



      </div>



    </div>
  )
}

export default PageContent