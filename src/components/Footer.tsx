import { Instagram, Twitter } from "lucide-react";
import LinkedInSVG from "../assets/LinkedInSVG";

export const Footer = () => (
  <footer>
    <div className="bg-gray-50 py-12 px-10 mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 items-center w-fit mx-auto justify-center gap-28 mb-10">
          <div>
            <h4 className="font-bold text-lg text-gray-700 mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">Overview</li>
              <li className="text-gray-600 text-sm">Features</li>
              <li className="text-gray-600 text-sm">Solutions</li>
              <li className="text-gray-600 text-sm">Tutorials</li>
              <li className="text-gray-600 text-sm">Pricing</li>
              <li className="text-gray-600 text-sm">Releases</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-700 mb-4">Company</h4>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">About Us</li>
              <li className="text-gray-600 text-sm">Careers</li>
              <li className="text-gray-600 text-sm">Press</li>
              <li className="text-gray-600 text-sm">News</li>
              <li className="text-gray-600 text-sm">Media Kit</li>
              <li className="text-gray-600 text-sm">Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-700 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">Blog</li>
              <li className="text-gray-600 text-sm">Newsletter</li>
              <li className="text-gray-600 text-sm">Events</li>
              <li className="text-gray-600 text-sm">Help Centre</li>
              <li className="text-gray-600 text-sm">Tutorials</li>
              <li className="text-gray-600 text-sm">Support</li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-blue-500" />

        {/* Social Media Icons */}
        <div>
          <div className="flex gap-2">
            <div className="w-8 h-8 p-1 rounded flex items-center justify-center text-blue-500">
              <LinkedInSVG />
            </div>
            <div className="w-8 h-8 rounded flex items-center justify-center text-blue-500">
              <Instagram />
            </div>
            <div className="w-8 h-8 rounded flex items-center justify-center text-blue-500">
              <Twitter size={18} fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex justify-between pt-6  text-xs text-gray-500">
      <div className="flex gap-6">
        <span>Terms & Condition</span>
        <span>Privacy Policy</span>
      </div>
      <span>© Copyright 2025 Enstarts - All Right Reserved</span>
    </div>
  </footer>
);
