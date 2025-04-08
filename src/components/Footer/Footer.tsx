import { useState } from 'react';
import image from '../../assets/wave.svg'
import './Footer.css'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import amex from '../../assets/footerImages/amex.png'
import disc from '../../assets/footerImages/discover.png'
import icon from '../../assets/footerImages/icon.png'
import visa from '../../assets/footerImages/visa.png'  
import imageicon from '../../assets/footerImages/imageicon.png'
import pay from '../../assets/footerImages/pay.png'


export default function Footer() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e:any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Email submitted:", email);
  };


  

  return (
    <div className="relative">
      <img src={image} alt="Wave" className="w-full h-16 object-cover" />

      <div className="footer bg-[#fef7f4] text-black px-14 m-auto py-16 text-sm">
        <div className="header pb-10 relative flex justify-between items-center max-w-3xl mx-auto pb-4 mb-4">
          <h4 className="">
            Speak to our expert at <span className="text-orange-400">1-800-453-6744</span>
          </h4>
          <h4 className="">Follow Us</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-20">
          {/* Contact Section */}
          <div>
            <h4 className="font-bold mb-2">Contact</h4>
            <p>328 Queensberry Street, North Melbourne VIC3051, Australia.</p>
            <p>hi@viatours.com</p>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="font-bold mb-2">Company</h4>
            <ul  className="pb-6">
              <li className="pb-2">About Us</li>
              <li className="pb-2">Tourz Reviews</li>
              <li className="pb-2">Contact Us</li>
              <li className="pb-2">Data Policy</li>
              <li className="pb-2">Cookie Policy</li>
              <li className="pb-2">Legal</li>
              <li className="pb-2">Sitemap</li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="font-bold mb-2">Support</h4>
            <p>Help Center</p>
            <p>FAQ</p>
            <p>Shipping & Returns</p>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="font-bold mb-2">Newsletter</h4>
            <p className="mb-2">Subscribe to the newsletter and stay updated.</p>

 {/* Email Input and Submit Button */}
 <div className="newsletter-form flex bg-white  py-4 px-7  rounded-md">
              <InputText
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="w-full sm:w-4/5    mr-2" 
                
              />
                            <Button
                label="Submit"
                onClick={handleSubmit}
                className="p-button-sm px-3 "
              />

            </div>
                        {/* Mobile Apps List */}
                        <div className="mt-4">
              <h4 className="font-bold mb-2">Mobile Apps</h4>
              <ul>
                <li>iOS App</li>
                <li>Android App</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-7">
        <div>
          <p>© Copyright Viatours 2024</p>
        </div>
        <div className="flex gap-4">
          <img src={amex} alt="Amex" className="w-10 h-10" /> 
          <img src={pay} alt="Paypal" className="w-10 h-10"/>
          <img src={disc} alt="discoverimage" className="w-10 h-10" />
          <img src={icon} alt="icon" className="w-10 h-10" />
          <img src={visa} alt="visa" className="w-10 h-10" />
          <img src={imageicon} alt="imageicon" className="w-10 h-10" />


        </div>

      </div>
    </div>
  );
}
