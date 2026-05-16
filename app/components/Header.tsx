"use client"
import { useState, useEffect } from "react";
import { useLang } from "./LanguageContext";
import { t } from "./translations";

export default function Header() {
   const [menuOpen, setMenuOpen] = useState(false)
   const [active, setActive] = useState("Hero");   
   const { lang, setLang } = useLang()
   const T = t[lang]

   useEffect(() => {
      const sectionIds = ["Hero", "About", "Products", "Contact"];
      const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) setActive(entry.target.id);
            });
         },
         { threshold: 0.6 }
      );

      sections.forEach((sec) => sec && observer.observe(sec));
      return () => observer.disconnect();
   }, [active]);

   return (
      <header className="flex justify-between lg:justify-between lg:px-20 lg:py-5 py-3 px-6 sticky top-0 z-1000 bg-bg border-b-1 border-stroke">
         
         <div>
            <span className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-muted tracking-[-1.2px] uppercase">
               GELPRO
            </span>
         </div>

         <nav className="lg:flex-1 lg:flex lg:justify-center">
            <ul className="hidden md:flex gap-6 lg:gap-10 md:text-[16px] lg:text-[17px]">
               <li>
                  <a 
                     className={active === "Hero" 
                        ? "text-secondary border-b border-current pb-1 transition-all duration-300 ease-in-out" 
                        : "text-text"} 
                     href="#Hero"
                  >
                     {T.nav.home}
                  </a>
               </li>

               <li>
                  <a 
                     className={active === "About" 
                        ? "text-secondary border-b border-current pb-1 transition-all duration-300 ease-in-out" 
                        : "text-text"}
                     href="#About"
                  >
                     {T.nav.about}
                  </a>
               </li>

               <li>
                  <a 
                     className={active === "Products" 
                        ? "text-secondary border-b border-current pb-1 transition-all duration-300 ease-in-out" 
                        : "text-text"} 
                     href="#Products"
                  >
                     {T.nav.products}
                  </a>
               </li>

               <li>
                  <a 
                     className={active === "Contact" 
                        ? "text-secondary border-b border-current pb-1 transition-all duration-300 ease-in-out" 
                        : "text-text"} 
                     href="#Contact"
                  >
                     {T.nav.contact}
                  </a>
               </li>
            </ul>

            <button
               onClick={() => setMenuOpen(!menuOpen)}
               className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer"
            >
               <span className={`block w-6 h-0.5 bg-muted transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
               <span className={`block w-6 h-0.5 bg-muted transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
               <span className={`block w-6 h-0.5 bg-muted transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>

            <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64" : "max-h-0"}`}>
               <ul className="flex flex-col px-6 py-4 gap-4 border-t border-border bg-surface">
                  <li><a href="#Hero" onClick={() => setMenuOpen(false)}>{T.nav.home}</a></li>
                  <li><a href="#About" onClick={() => setMenuOpen(false)}>{T.nav.about}</a></li>
                  <li><a href="#Products" onClick={() => setMenuOpen(false)}>{T.nav.products}</a></li>
                  <li><a href="#Contact" onClick={() => setMenuOpen(false)}>{T.nav.contact}</a></li>
               </ul>
            </div>
         </nav>

         <div>
            <button
               className="cursor-pointer md:text-[16px] lg:text-[18px]"
               onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            >
               {lang.toUpperCase()}
            </button>
         </div>
      </header>
   )
}