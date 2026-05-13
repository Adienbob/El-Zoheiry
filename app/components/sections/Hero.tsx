"use client"

import Link from "next/link";
import { useLang } from "../LanguageContext";
import { t } from "../translations";

export default function Hero() {
   const { lang } = useLang()
   const T = t[lang]

   return (
      <section>
         <div>
            {/* background */}
            <img src="" alt="" />
         </div>
         <span>{T.hero.subtitle}</span>
         <h1>{T.hero.title}</h1>
         <a href={"#Products"}>
            {T.hero.cta}
         </a>
      </section>
   )
}