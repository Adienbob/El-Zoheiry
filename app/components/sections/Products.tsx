"use client"
import { useLang } from "../LanguageContext";
import Image from "next/image";
import { t } from "../translations";

export default function Products() {
   const { lang } = useLang()
   const T = t[lang]


   return (
      <section className="bg-second-bg px-6 py-20">
         <span className="text-secondary text-center block">
            {T.products.label}
         </span>
         <h2 className="font-semibold text-[32px] leading-[41px] text-center text-muted mb-2">
            {T.products.title}
         </h2>
         <span className="bg-secondary h-1 w-15 block m-auto mb-20">

         </span>
         <div className="grid gap-7">
            {T.products.items.map((item) => (
               <article className="border border-[#404750] bg-bg p-6" key={item.id}>
                  <div className="relative w-full h-[220px] mb-6">
                     <Image src={"/Product.png"} alt="" fill className="object-cover" />
                  </div>
                  <h3 className="mb-3 text-[24px] text-muted leading-[33px]">
                     {item.name}
                  </h3>
                  <p className="text-text text-[14px] leading-[21px]">
                     {item.desc}
                  </p>
                  <a href="#Contact" className="text-secondary mt-6 block text-[12px]">GET IT NOW</a>
               </article>
            ))}
         </div>
      </section>
   )
}