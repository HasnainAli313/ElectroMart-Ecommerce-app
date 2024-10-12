import logo from '../assets/Group.png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
    <footer className="text-center fixed bottom-0 w-[100%] text-white p-5 bg-[#1D2128]">
        <h3>Subscribe to our newsletter</h3>
        <div className="flex  justify-center p-2">
          <input className="border bg-[#1D2128] p-1 border-white rounded-l-xl pl-1" type="email" placeholder="Enter your email"/>
          <button className="border bg-[#636AE8]  border-white rounded-r-xl p-1">Subscribe</button>
        </div>

      {/* Footer details */}
      <div className='lg:flex m-10 place-items-center lg:justify-around'>
        <div className=' justify-center gap-1  flex place-items-center ' >
          <img  className="w-[35px]" src={logo} alt="logo" />
          <h4 className='text-xl'>ElectroMart</h4>
        </div>

        <div>
          <ul className='lg:flex  gap-10 justify-between'>
            <li className='cursor-default'>Pricing</li>
            <li className='cursor-default'>About Us</li>
            <li className='cursor-default'>Help Center</li>
            <li className='cursor-default'>Contact Us</li>
            <li className='cursor-default'>FAQs</li>
            <li className='cursor-default'>Careers</li>
          </ul>
        </div>
      </div>

      {/* horizontal line */}
      <div className='border border-white m-auto mt-2 lg:w-[80%]'></div>

        <div className='lg:flex m-5 justify-around'>
          {/* language */}
          <select className='text-white border p-1 w-[100px] rounded-lg bg-[#1D2128]' name="" id="">
            <option value="">English</option>
            <option value="">Urdu</option>
          </select>
        

        {/* credits */}
        <p>© 2024 Brand, Inc. • Privacy • Terms • Sitemap</p>

        {/* Social */}
        <div className='flex justify-center gap-5'>
          <a  href="">
            <FaFacebook/>
          </a>
          <a href="">
          < FaTwitter/>
          </a>
          <a href="">
            <FaInstagram/>
          </a>
          <a href="">
            <FaYoutube/>
          </a>
        </div>  
        </div>

    </footer>
    </>
  )
}

export default Footer