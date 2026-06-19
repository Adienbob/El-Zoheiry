"use client"
import { useLang } from "../LanguageContext";
import { t } from "../translations";

export default function About() {
   const { lang } = useLang()
   const T = t[lang]

   return (
      <section
         aria-labelledby="about-heading"
         className="py-20 lg:py-28 px-6 lg:px-20 bg-bg border-t border-stroke"
         id="About"
      >
         
         <div className="max-w-[900px]">
            
            <p className="text-secondary text-[12px] md:text-[16px] lg:text-[20px] tracking-[3px] leading-[15px] md:leading-[18px] mb-5 md:mb-6 lg:mb-7.5">
               {T.about.label.toUpperCase()}
            </p>

            <h2
               id="about-heading"
               className="text-[32px] md:text-[44px] lg:text-[52px] tracking-[1.6px] leading-[41.6px] md:leading-[54px] lg:leading-[62px] text-muted mb-7 md:mb-8.5 lg:mb-10"
            >
               {T.about.title}
            </h2>

            <div>
               <p className="mb-7.5 md:mb-10 lg:mb-12.5 leading-[26px] md:text-[18px] md:leading-[30px] lg:text-[20px] lg:leading-[34px] text-text">
                  {T.about.body}
               </p>
               <p className="leading-[26px] md:text-[18px] md:leading-[30px] lg:text-[20px] lg:leading-[34px] text-text">
                  {T.about.secondBody}
               </p>
            </div>

         </div>
      </section>
   )
}