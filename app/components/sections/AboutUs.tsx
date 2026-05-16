"use client"
import { useLang } from "../LanguageContext";
import { t } from "../translations";

export default function About() {
   const { lang } = useLang()
   const T = t[lang]

   return (
      <section className="py-20 px-6 bg-bg border-t border-stroke">
         <span className="text-secondary text-[12px] md:text-[14px] tracking-[3px] leading-[15px] md:leading-[18px]">
            {T.about.label.toUpperCase()}
         </span>

         <h2 className="text-[32px] md:text-[44px] tracking-[1.6px] leading-[41.6px] md:leading-[54px] text-muted mb-6">
            {T.about.title}
         </h2>

         <p className="leading-[26px] md:text-[18px] md:leading-[30px] text-text">
            {T.about.body}
         </p>
      </section>
   )
}