// src/components/Footer.jsx
import { Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A1B3E] text-white">
      {/* Top CTA Section */}
     

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-20 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo */}
        <div>
          <img
            src="public/images/square_logo.png" // Replace with your actual logo path
            alt="SNS Square"
            className="w-46 mb-6"
          />
        </div>

        {/* Solutions */}
        <div>
          <h3 className="font-semibold text-blue-400 mb-4">Solutions</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Smart City & Manufacturing</li>
            <li>Healthcare</li>
            <li>Agriculture & Food</li>
            <li>Retail FMCG</li>
            <li>Automotive & Aerospace</li>
            <li>Defense, Government, Legal</li>
            <li>Real Estate</li>
            <li>Sports, Media & Entertainment</li>
            <li>BFSI – Fintech/Banking</li>
            <li>Power, Oil, Energy</li>
            <li>Personal Services</li>
          </ul>
        </div>

        {/* Use Cases */}
        <div>
          <h3 className="font-semibold text-blue-400 mb-4">Use Cases</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Supply Chain</li>
            <li>IT Solution</li>
          </ul>

          <h3 className="font-semibold text-blue-400 mt-6 mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Solutions</li>
            <li>Use Case</li>
            <li>Life at SNS Square</li>
            <li>Resources</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-blue-400 mb-4">Address</h3>
          <p className="text-gray-300 text-sm mb-4">
            BLOCK-L, Embassy Tech Village, Outer Ring Rd, Devarabisanahalli,
            Bellandur, Bengaluru, Karnataka 560103
          </p>

          <h3 className="font-semibold mb-2 text-blue-400">Email</h3>
          <p className="text-gray-300 text-sm mb-6">info@snssquare.com</p>


        </div>
      </div>

      {/* Bottom copyright */}
      <div className="max-w-7xl mx-auto border-t border-gray-700 px-6 pb-10 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center text-gray-400 text-sm  py-4">
        © 2025 SNS Square. All rights reserved.
        </div>
        <div>
        {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-red-500">
              <Youtube size={20} />
            </a>
          </div>
       </div>
          
      </div>
      
    </footer>
  );
}
