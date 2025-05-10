import React from 'react'
import { Disc, Github, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-gray-600/20 py-12 bg-[#121212] w-[90vw] surface:w-[88vw] fullhd:w-[78vw] qhd:w-[68vw] flex items-center justify-center text-center lg:text-left">
      <div className="container ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 ">
          <div className='flex flex-col items-center lg:items-start'>
            <div className="flex items-center gap-2 mb-4">
              <Disc className="h-6 w-6 text-green-600" />
              <span className="text-lg font-bold">GrooveVinyl</span>
            </div>
            <p className="text-gray-400 w-3/4">
              Rediscover your music through the nostalgic lens of vinyl records.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-green-600 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-600 transition-colors">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-600 transition-colors">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-green-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-600 transition-colors">Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-600 transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-600 transition-colors">Status</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-green-600 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-600 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-600/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 GrooveVinyl. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-green-600 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-green-600 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-green-600 transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer