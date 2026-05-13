"use client"
import { useLang } from "../LanguageContext";
import { t } from "../translations";


export default function About() {
   const { lang } = useLang()
   const T = t[lang]


   return (
      <section>
         <span>
            {T.about.label}
         </span>
         <h2>
            {T.about.title}
         </h2>
         <p>
            {T.about.body}
         </p>
      </section>
   )
}