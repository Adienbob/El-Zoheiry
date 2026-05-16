"use client"
import Image from "next/image"
import { useLang } from "../LanguageContext";
import { t } from "../translations";

export default function Hero() {
   const { lang } = useLang()
   const T = t[lang]

   return (
      <section className="relative px-6 py-[129px]">
         <div className="absolute inset-0 z-0">
            {/* image */}
            <Image
               src="/Background.png"
               alt="hero background"
               fill
               priority
               className="object-cover"
            />

            {/* gradient overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(8,16,23,1)_0%,rgba(8,16,23,0.8)_50%,rgba(8,16,23,0)_100%)]" />
         </div>
         <div className="relative z-10">
            <span className="text-secondary px-3 py-1 border border-current bg-secondary/5 text-[10px] tracking-[3px] leading-[15px]">
               {T.hero.since}
            </span>
            <h1 className="text-muted text-[40px] leading-[48px] tracking-[0.4px] my-6">{T.hero.title}</h1>
            <p className="text-text leading-[26px] mb-12">{T.hero.subtitle}</p>
            <a className="bg-surface text-accent block py-3 text-center font-bold text-[12px] tracking-[1.2px] leading-[12px]" href={"#Products"}>
               {T.hero.cta.toUpperCase()}
            </a>
         </div>
      </section>
   )
}