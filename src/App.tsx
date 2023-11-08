import { useState } from 'react'
import './App.css'


import{FaBars} from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'


function App() {

  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <div className=' items-center flex justify-center flex-col'>
      {/* HEADER */}
      <div className="w-96 h-[518px] 
       bg-[url('./assets/mobile/image-header.jpg')] bg-cover bg-center bg-no-repeat
       flex flex-col items-center gap-20 
       lg:w-full lg:h-[800px] lg:bg-[url('./assets/desktop/image-header.jpg')] "  >
          <div className='  w-5/6 h-8 p-6  flex items-center justify-between'>
            <div className=' w-44 h-8 bg-[url("./assets/logo.svg")] bg-cover bg-no-repeat'></div>
            <FaBars className=" w-6 h-4 text-white cursor-pointer lg:hidden" onClick={()=>setToggle(!toggle)}/>
            
            <div className='hidden lg:flex flex-row items-center justify-center gap-8'>
              <div className='cursor-pointer text-xl font-semibold text-[#FFFFFF]'>About</div>
              <div className='cursor-pointer text-xl font-semibold text-[#FFFFFF]'>Services</div>
              <div className='cursor-pointer text-xl font-semibold text-[#FFFFFF]'>Projcets</div>
              <button className=' cursor-pointer rounded-full bg-[#FFFFFF] h-10 w-36 text-base font-bold]'>Contanct</button>
            </div>
          </div>

          {toggle ? 
            <div className=' w-80 h-80 bg-[#FFFCF8] flex flex-col items-center justify-center gap-8'>
              <div className='cursor-pointer text-xl font-semibold text-[#808397]'>About</div>
              <div className='cursor-pointer text-xl font-semibold text-[#808397]'>Services</div>
              <div className='cursor-pointer text-xl font-semibold text-[#808397]'>Projcets</div>
              <button className=' rounded-full bg-[#FBD600] h-10 w-36 text-base font-bold'>Contanct</button>
            </div>
           : <h2 className=' font-bold text-4xl text-white text-center'>
            WE ARE <br/> CREATIVES</h2>
            }
      </div>

      {/* BODY */}
      
      <div className=' lg:w-full lg:justify-between lg:flex lg:flex-row-reverse lg:items-center items-center '>
        <div className=' w-96 h-[310px] 
        bg-[url("./assets/desktop/image-transform.jpg")] bg-cover bg-no-repeat
        lg:w-1/2 lg:h-[600px]
        '></div>

        <div className='w-96 h-[310px] lg:ml-28 flex flex-col items-center justify-between gap-7'> 
          <h2 className=' text-center font-bold text-3xl'>TRANSFORM YOUR <br/> BRAND </h2>

          <p className=' text-center'>We are a full-service creative agency specializing in
            helping brands grow fast. Engage your clients through compelling visuals 
            that do most of the marketing for you.
          </p>
          <h3 className=' cursor-pointer font-bold text-base border-b-4 border-[#FAD400] mb-[64px]'>LEARN MORE</h3>
        </div>
      </div>

      <div className='lg:w-full lg:justify-between lg:flex lg:flex-row-reverse items-center'>
        <div className=' w-96 h-[310px] 
        bg-[url("./assets/mobile/image-stand-out.jpg")] bg-cover bg-no-repeat
        lg:w-1/2 lg:h-[600px]
        '></div>

        <div className='w-96 h-[310px] lg:ml-28 flex flex-col items-center justify-between gap-7'>
          <h2 className=' text-center font-bold text-3xl uppercase'>Stand out to the <br/> right audience</h2>

          <p className=' text-center'>
            Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, 
            we’ll build and extend your brand in digital places. 
          </p>

          <h3 className=' cursor-pointer font-bold text-base border-b-4 border-[#FE7766] mb-[64px]'>LEARN MORE</h3>
        </div>
      </div>



      <div className=' lg:flex'>
          <div className=' w-96 h-[600px] 
          bg-[url("./assets/mobile/image-graphic-design.jpg")] bg-cover bg-no-repeat
          flex flex-col gap-7 items-center justify-end first-letter 
          lg:w-1/2 lg:bg-[url("./assets/desktop/image-graphic-design.jpg")]
          '>
            <h2 className=' font-bold text-2xl text-[#24554A]'>GRAPHIC DESIGN</h2>

            <p className=' text-center text-[#24554A]'>
              Great design makes you memorable. 
              We deliver artwork that underscores your brand message 
              and captures potential clients’ attention.
            </p>
          </div>

          <div className=' w-96 h-[600px] 
          bg-[url("./assets/mobile/image-photography.jpg")] bg-cover bg-no-repeat
          flex flex-col gap-7 items-center justify-end
          lg:w-1/2 lg:bg-[url("./assets/desktop/image-photography.jpg")]
          '>
            <h2 className=' font-bold text-2xl text-[#052C3B]'>Photography</h2>

            <p className=' text-center text-[#052C3B]'>
            Increase your credibility by getting the most stunning,
            high-quality photos that improve your business image.
            </p>
          </div>
      </div>

     {/* PERSONS */}
      <h2 className=' text-base font-bold tracking-[4px] text-[#A7AAAD] lg:mt-[160px]'>
       CLIENT TESTIMONIALS
      </h2>
      <div className=' w-96 h-[1108px] flex flex-col gap-16 items-center mt-16 lg:flex-row lg:w-full lg:h-[450px]'>
        <div className='flex flex-col gap-8 items-center justify-center'> 
          <div className=' w-20 h-20 
          bg-[url("./assets/image-emily.jpg")] bg-cover rounded-full'>
          </div>

          <p className='text-center font-semibold text-lg text-[#5B636D]'>
            We put our trust in Sunnyside and they delivered,
            making sure our needs were met and deadlines were always hit.
          </p>

          <div className=' flex flex-col items-center'>
              <h2 className=' font-bold text-lg text-[#24303E]'>Emily R.</h2>
              <p className=' font-semibold text-sm text-[#A7AAAD]'>Marketing Director</p>
          </div>
        </div>

        <div className=' flex flex-col gap-8 items-center justify-center'>
          <div className=' w-20 h-20 
          bg-[url("./assets/image-thomas.jpg")] bg-cover rounded-full'>
          </div>

          <p className=' text-center font-semibold text-lg text-[#5B636D]'>
          Sunnyside’s enthusiasm coupled with their keen interest 
          in our brand’s success made it a satisfying and enjoyable experience.
          </p>

          <div className=' flex flex-col items-center'>
              <h2 className=' font-bold text-lg text-[#24303E]'>Thomas S.</h2>
              <p className=' font-semibold text-sm text-[#A7AAAD]'>Chief Operating Officer</p>
          </div>
        </div>

        <div className=' flex flex-col gap-8 items-center justify-center'>
          <div className=' w-20 h-20 
          bg-[url("./assets/image-jennie.jpg")] bg-cover rounded-full'>
          </div>

          <p className=' text-center font-semibold text-lg text-[#5B636D]'>
          Incredible end result! Our sales increased over 
          400% when we worked with Sunnyside. Highly recommended!                                                                                                                                                                                                                                                                                                                                                                                                                                          
          </p>

          <div className=' flex flex-col items-center'>
              <h2 className=' font-bold text-lg text-[#24303E]'>Jennie F.</h2>
              <p className=' font-semibold text-sm text-[#A7AAAD]'>Business Owner</p>
          </div>
        </div>
      </div>  

      <div className=' w-96 flex flex-wrap lg:w-full'>
        <div className=' w-[192px] h-[188px]
        bg-[url("./assets/mobile/image-gallery-milkbottles.jpg")] bg-cover lg:w-1/4 lg:h-[450px]'></div>
        <div className='w-[192px] h-[188px] 
        bg-[url("./assets/mobile/image-gallery-orange.jpg")] bg-cover lg:w-1/4 lg:h-[450px]'></div>
        <div className=' w-[192px] h-[188px] 
        bg-[url("./assets/mobile/image-gallery-cone.jpg")] bg-cover lg:w-1/4 lg:h-[450px]'></div>
        <div className=' w-[192px] h-[188px] 
        bg-[url("./assets/mobile/image-gallery-sugar-cubes.jpg")] bg-cover lg:w-1/4 lg:h-[450px]'></div>
      </div>

      {/* FOOTER */}

      <div className='w-96 h-96 bg-[#90D4C6] lg:w-full 
        flex flex-col justify-center items-center gap-10
      '>
         <div className=' w-44 h-8 bg-[url("./assets/logo.svg")] bg-cover bg-no-repeat cursor-pointer'></div>
        
        <div className=' flex flex-row gap-12'>
          <h2 className=' cursor-pointer text-lg font-semibold text-[#458D7E] hover:text-[#FFFFFF]'>About</h2>
          <h2 className=' cursor-pointer text-lg font-semibold text-[#458D7E] hover:text-[#FFFFFF]'>Services</h2>
          <h2 className=' cursor-pointer text-lg font-semibold text-[#458D7E] hover:text-[#FFFFFF]'>Projects</h2>
        </div>

        <div className=' flex flex-row gap-7'>
          <FaFacebook className=' cursor-pointer w-5 h-5 text-[#2C7566] hover:text-[#FFFFFF]'/>
          <FaInstagram className=' cursor-pointer w-5 h-5 text-[#2C7566] hover:text-[#FFFFFF]'/>
          <FaTwitter className=' cursor-pointer w-5 h-5 text-[#2C7566] hover:text-[#FFFFFF]'/>
          <FaPinterest className=' cursor-pointer w-5 h-5 text-[#2C7566] hover:text-[#FFFFFF]'/>
        </div>
      </div>
    </div>
  )
}

export default App
