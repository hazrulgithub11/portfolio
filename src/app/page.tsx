import Image from "next/image";
import { NavBarDemo } from "@/components/ui/demo";
import Link from "next/link";
import { Instagram, Linkedin, Mail, Facebook } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#09000c] to-[rgba(160,31,166,255)] text-white relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('/images/back1.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          mixBlendMode: "overlay",
        }}
      />
      
      {/* Navigation */}
      <NavBarDemo />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 pt-36 pb-16 md:pt-40 md:pb-24 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Profile Image - Moved above for mobile, stays on right for desktop */}
        <div className="relative w-full max-w-[250px] md:max-w-md md:order-2 mb-8 md:mb-0">
          <div className="relative rounded-full border-4 border-purple-800 shadow-lg shadow-purple-500/90 overflow-hidden">
            <div className="aspect-square bg-purple-700 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image 
                  src="/images/image2.PNG" 
                  alt="3D character profile" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Left Content - Moved below for mobile, stays on left for desktop */}
        <div className="max-w-xl md:order-1">
          <p className="text-sm font-medium mb-2">Available For Internship</p>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-2">
            Hi, I&apos;m <span className="font-normal">Hazrul Fahmi</span>
          </h1>
          
          <div className="mb-6">
            <span className="text-purple-300 text-4xl md:text-5xl font-bold">Fullstack</span>
            <span className="text-white text-4xl md:text-5xl font-bold"> Developer</span>
          </div>
          
          <p className="text-gray-200 mb-8 max-w-lg">
            Passionate Fullstack Developer. I create intuitive and visually appealing digital 
            experiences. I transform ideas into seamless designs that meet users&apos; 
            expectations.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Link 
              href="#projects" 
              className="px-8 py-3 rounded-full bg-purple-100 text-purple-900 font-medium hover:bg-purple-200 transition-colors"
            >
              My Projects
            </Link>
            <Link 
              href="#download" 
              className="px-8 py-3 rounded-full bg-transparent border border-purple-300 text-white font-medium hover:bg-purple-800 transition-colors"
            >
              Download CV
            </Link>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-4">
            <Link href="#" className="social-icon w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center hover:bg-white transition-colors">
              <Instagram size={20} className="text-purple-900" />
            </Link>
            <Link href="#" className="social-icon w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center hover:bg-white transition-colors">
              <Linkedin size={20} className="text-purple-900" />
            </Link>
            <Link href="#" className="social-icon w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center hover:bg-white transition-colors">
              <Mail size={20} className="text-purple-900" />
            </Link>
            <Link href="#" className="social-icon w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center hover:bg-white transition-colors">
              <Facebook size={20} className="text-purple-900" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="flex justify-center mt-8 mb-16 relative z-10">
        <button className="scroll-button w-12 h-12 rounded-full bg-gradient-to-b from-[#ffffff] to-[#cf12d8] flex items-center justify-center hover:bg-purple-500 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
