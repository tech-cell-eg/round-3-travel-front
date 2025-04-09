import { useState } from "react";
import image from "../../assets/wave.svg";
import "./Footer.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
const images = import.meta.glob("../../assets/footerImages/*.png", {
  eager: true,
});
const imageList = Object.values(images).map((mod: any) => mod.default);

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: any) => {
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
            Speak to our expert at{" "}
            <span className="text-orange-400">1-800-453-6744</span>
          </h4>
          <h4 className="">Follow Us</h4>
        </div>

        <div className="grid lg:grid-cols-4 sm:grid-col-1  md:grid-cols-4 gap-6 px-20">
          {/* Contact Section */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="pb-4 ">328 Queensberry Street , North Melbourne VIC3051, Australia.</p>
            <p>hi@viatours.com</p>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="pb-6">
              <li className="pb-3">About Us</li>
              <li className="pb-3">Tourz Reviews</li>
              <li className="pb-3">Contact Us</li>
              <li className="pb-3">Data Policy</li>
              <li className="pb-3">Cookie Policy</li>
              <li className="pb-3">Legal</li>
              <li className="pb-3">Sitemap</li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul>
              <li className="pb-3">Get in Touch</li>
              <li className="pb-3">Help center</li>
              <li className="pb-3">Live chat</li>
              <li className="pb-3">How it works</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="font-bold mb-2">Newsletter</h4>
            <p className="mb-2">
              Subscribe to the free newsletter and stay up to date.
            </p>

            {/* Email Input and Submit Button */}
            <div className="newsletter-form flex bg-white  py-4   rounded-lg ">
              <InputText
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="w-full sm:w-4/5 ps-3  mr-2"
              />
              <Button
                label="Send"
                onClick={handleSubmit}
                className="p-button-sm px-4  "
              />
            </div>
            {/* Mobile Apps List */}
            <div className="mt-4">
              <h4 className="font-bold mb-4">Mobile Apps</h4>
              <ul>
                <li  className="pb-3">IOS App</li>
                <li  className="pb-3">Android App</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-7 items-center m-auto px-20">
        <div>
          <p>© Copyright Viatours 2024</p>
        </div>
        <div className="flex gap-4">
          {imageList.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`footer-icon-${index}`}
              className="w-10 h-10"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
