"use client"
import { useLang } from "./LanguageContext";
import { t } from "./translations";


export default function Header() {
   const { lang, setLang } = useLang()
   const T = t[lang]

   return (
      <header>
         <div>
            <span>company and logo</span>
            <img src="" alt="" />
            {/* logo */}
         </div>
         <nav>
            <ul>
               <li>
                  <a href="#Hero">
                     {T.nav.home}
                  </a>
               </li>
               <li>
                  <a href="#About">
                     {T.nav.about}
                  </a>
               </li>
               <li>
                  <a href="#Products">
                     {T.nav.products}
                  </a>
               </li>
               <li>
                  <a href="#Contact">
                     {T.nav.contact}
                  </a>
               </li>
            </ul>
         </nav>
         <div>
            <button className="" onClick={() => {
            console.log("clicked, current lang:", lang);
            setLang(lang === "ar" ? "en" : "ar");
            }}>
            {lang.toUpperCase()}
            </button>
         </div>
      </header>
   )
}