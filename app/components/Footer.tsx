"use client"
import { useLang } from "./LanguageContext";
import { t } from "./translations";

export default function Footer() {
   const { lang } = useLang()
   const T = t[lang]
   
   return (
      <footer>
         <div>
            <span>
               company and logo
            </span>
            <p></p>
         </div>
         <nav>
            <ul>
               <li>icon</li>
               <li>icon</li>
               <li>icon</li>
            </ul>
         </nav>
         <strong>
            copyrights
         </strong>
      </footer>
   )
}