"use client"
import { useState, useEffect } from "react";
import { useLang } from "./LanguageContext";
import { t } from "./translations";
import Image from "next/image";

export default function Header() {
   const [menuOpen, setMenuOpen] = useState(false)
   const [active, setActive] = useState("Hero");   
   const { lang, setLang } = useLang()
   const T = t[lang]

   useEffect(() => {
      const sectionIds = ["Hero", "About", "Products", "Certificates", "Contact"];
      const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) setActive(entry.target.id);
            });
         },
         { threshold: 0.4 }
      );

      sections.forEach((sec) => sec && observer.observe(sec));
      return () => observer.disconnect();
   }, []);

   return (
      <header dir="ltr" className="flex justify-between items-center lg:justify-between lg:px-20 lg:py-5 py-3 px-6 sticky top-0 z-1000 bg-bg border-b-1 border-stroke">
         
         <div className="flex items-center">
            <a href="#Hero">
               <span className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-muted tracking-[-1.2px] uppercase flex items-center">
                  <div className="relative h-[35px] w-[30px] lg:h-[40px] lg:w-[35px]">
                     <Image
                        src="/Alostaz.png"
                        fill
                        className="object-contain"
                        alt=""
                     />
                  </div>
                  <div className="bg-muted w-1 mx-2.5 h-8.5 block"></div>
                  <p>Al-ostaz</p>
               </span>
            </a>
         </div>
         <nav aria-label="Main navigation" className="lg:flex-1 lg:flex lg:justify-center">
            <ul className="hidden md:flex gap-6 lg:gap-10 md:text-[16px] lg:text-[17px]">
               <li>
                  <a 
                     aria-current={active === "Hero" ? "page" : undefined}
                     className={active === "Hero" 
                        ? "text-secondary border-b border-current pb-1 transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2" 
                        : "text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"} 
                     href="#Hero"
                  >
                     {T.nav.home}
                  </a>
               </li>

               <li>
                  <a 
                     aria-current={active === "About" ? "page" : undefined}
                     className={active === "About" 
                        ? "text-secondary border-b border-current pb-1 transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2" 
                        : "text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"}
                     href="#About"
                  >
                     {T.nav.about}
                  </a>
               </li>

               <li>
                  <a 
                     aria-current={active === "Products" ? "page" : undefined}
                     className={active === "Products" 
                        ? "text-secondary border-b border-current pb-1 transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2" 
                        : "text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"} 
                     href="#Products"
                  >
                     {T.nav.products}
                  </a>
               </li>

               <li>
                  <a 
                     aria-current={active === "Contact" ? "page" : undefined}
                     className={active === "Contact" 
                        ? "text-secondary border-b border-current pb-1 transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2" 
                        : "text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"} 
                     href="#Contact"
                  >
                     {T.nav.contact}
                  </a>
               </li>
            </ul>

            <button
               aria-expanded={menuOpen}
               aria-controls="mobile-menu"
               aria-label="Toggle menu"
               onClick={() => setMenuOpen(!menuOpen)}
               className=" md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
               <span className={`block w-6 h-0.5 bg-muted transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
               <span className={`block w-6 h-0.5 bg-muted transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
               <span className={`block w-6 h-0.5 bg-muted transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>

            <div id="mobile-menu" className={`absolute top-[65px] border border-border left-[50%] md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64" : "max-h-0"}`}>
               <ul className="flex flex-col px-6 py-4 gap-4 border-t border-border bg-second-bg">
                  <li><a href="#Hero" onClick={() => setMenuOpen(false)}>{T.nav.home}</a></li>
                  <li><a href="#About" onClick={() => setMenuOpen(false)}>{T.nav.about}</a></li>
                  <li><a href="#Products" onClick={() => setMenuOpen(false)}>{T.nav.products}</a></li>
                  <li><a href="#Certificates" onClick={() => setMenuOpen(false)}>{T.nav.certificates}</a></li>
                  <li><a href="#Contact" onClick={() => setMenuOpen(false)}>{T.nav.contact}</a></li>
               </ul>
            </div>
         </nav>

         <div>
            <button
               aria-label="Change language"
               className="cursor-pointer md:text-[16px] lg:text-[18px] focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
               onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            >
               {lang.toUpperCase()}
            </button>
         </div>
      </header>
   )
}