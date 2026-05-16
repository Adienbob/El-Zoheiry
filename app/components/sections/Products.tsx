"use client"
import { useLang } from "../LanguageContext";
import Image from "next/image";
import { t } from "../translations";

export default function Products() {
   const { lang } = useLang()
   const T = t[lang]

   return (
      <section className="bg-second-bg px-6 lg:px-20 py-20 lg:py-28">
         
         <span className="text-secondary text-center block md:text-[18px] lg:text-[20px]">
            {T.products.label}
         </span>

         <h2 className="font-semibold text-[32px] md:text-[44px] lg:text-[52px] leading-[41px] md:leading-[54px] lg:leading-[62px] text-center text-muted mb-2">
            {T.products.title}
         </h2>

         <span className="bg-secondary h-1 w-15 block m-auto mb-20"></span>

         <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            
            {T.products.items.map((item) => (
               <article
                  className="border border-[#404750] bg-bg p-6 lg:p-8 hover:border-secondary transition-all duration-300"
                  key={item.id}
               >
                  
                  <div className="relative w-full h-[220px] lg:h-[260px] mb-6">
                     <Image
                        src={"/Product.png"}
                        alt=""
                        fill
                        className="object-cover"
                     />
                  </div>

                  <h3 className="mb-3 text-[24px] md:text-[28px] lg:text-[30px] text-muted leading-[33px] md:leading-[38px] lg:leading-[42px]">
                     {item.name}
                  </h3>

                  <p className="text-text text-[14px] md:text-[16px] lg:text-[17px] leading-[21px] md:leading-[26px] lg:leading-[28px]">
                     {item.desc}
                  </p>

                  <a
                     href="#Contact"
                     className="text-secondary mt-6 block text-[12px] md:text-[14px] lg:text-[15px] tracking-[1px] hover:opacity-80 transition"
                  >
                     GET IT NOW
                  </a>
               </article>
            ))}

         </div>
      </section>
   )
}