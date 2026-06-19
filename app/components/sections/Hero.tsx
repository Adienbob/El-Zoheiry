"use client"
import Image from "next/image"
import { useLang } from "../LanguageContext";
import { t } from "../translations";

export default function Hero() {
   const { lang } = useLang()
   const T = t[lang]

   return (
      <section
         aria-labelledby="hero-heading"
         className="relative px-6 lg:px-20 py-[129px] lg:py-[160px]"
         id="Hero"
      >
         
         <div className="absolute inset-0 z-0">
            <Image
               src="/Background.png"
               alt=""
               aria-hidden="true"
               fill
               priority
               className="object-cover"
            />

            <div 
               aria-hidden="true"
               className="absolute inset-0 bg-[linear-gradient(to_right,rgba(8,16,23,1)_0%,rgba(8,16,23,0.8)_50%,rgba(8,16,23,0)_100%)]" 
            />
         </div>

         <div className="relative z-10 max-w-[720px] lg:max-w-[900px]">
            
            <span className="text-secondary px-3 py-1 border border-current bg-secondary/5 text-[11px] md:text-[13px] lg:text-[15px] w-fit block tracking-[3px] leading-[15px] md:leading-[18px]">
               {T.hero.since}
            </span>

            <h1
               id="hero-heading"
               className="text-muted text-[40px] md:text-[56px] lg:text-[72px] leading-[48px] md:leading-[64px] lg:leading-[78px] tracking-[0.4px] my-6 md:my-7 lg:my-8"
            >
               {T.hero.title}
            </h1>

            <p className="text-text leading-[26px] md:text-[18px] md:leading-[30px] lg:text-[20px] lg:leading-[34px] mb-12">
               {T.hero.subtitle}
            </p>

            <a
               href="#Products"
               aria-label={`${T.hero.cta} - ${T.hero.title}`}
               className="border border-secondary bg-secondary/5  text-secondary block py-3 text-center font-bold text-[12px] md:text-[14px] lg:text-[15px] tracking-[1.2px] leading-[12px] md:leading-[14px] md:w-fit md:px-9 md:py-6 lg:px-10 lg:py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
               {T.hero.cta.toUpperCase()}
            </a>
         </div>
      </section>
   )
}