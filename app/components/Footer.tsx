"use client"
import { useLang } from "./LanguageContext";
import { t } from "./translations";

export default function Footer() {
   const { lang } = useLang()
   const T = t[lang]
   
   return (
      <footer className="text-center border-t-2 border-secondary px-6 py-20 lg:py-24">
         <div>
            <span className="font-bold leading-[24px] -tracking-[0.8px] md:text-lg lg:text-xl">
               company and logo
            </span>
            <p></p>
         </div>

         <nav>
            <ul className="flex justify-center gap-6 lg:gap-10">
               <li>icon</li>
               <li>icon</li>
               <li>icon</li>
            </ul>
         </nav>

         <strong className="tracking-[1px] leading-[15px] text-[10px] md:text-sm lg:text-base text-secondary">
            © 2024 GELPRO INDUSTRIAL. ALL RIGHTS RESERVED.
         </strong>
      </footer>
   )
}