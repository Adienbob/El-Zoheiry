"use client"
import { useLang } from "../LanguageContext";
import { t } from "../translations";

export default function Certificates() {
   const { lang } = useLang();
   const T = t[lang];

   return (
      <section
         aria-labelledby="certificates-heading"
         className="py-20 lg:py-28 px-6 lg:px-20 grid"
      >
         
         <p className="tracking-[4px] leading-[24px] text-secondary md:text-[18px] lg:text-[20px]">
            {T.certificate.label}
         </p>

         <h2
            id="certificates-heading"
            className="text-[32px] md:text-[44px] lg:text-[52px] tracking-[1.6px] leading-[41.6px] md:leading-[54px] lg:leading-[62px] text-muted mt-3"
         >
            {T.certificate.title}
         </h2>

         <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
            
            {T.certificate.certificates.map((cert) => (
               <article
                  aria-labelledby={`certificate-${cert.id}-title`}
                  className="border-t-2 border-secondary bg-form p-6 lg:p-8 hover:border-accent transition-all duration-300"
                  key={cert.id}
               >
                  
                  <h3
                     id={`certificate-${cert.id}-title`}
                     className="font-semibold leading-[24px] md:text-[20px] lg:text-[22px] md:leading-[30px] lg:leading-[32px] text-muted mb-3"
                  >
                     {cert.name}
                  </h3>

                  <p className="text-[14px] md:text-[16px] lg:text-[17px] text-text leading-[20px] md:leading-[26px] lg:leading-[28px] mb-6">
                     {cert.desc}
                  </p>

                  <p className="text-secondary text-[10px] md:text-[12px] lg:text-[13px] leading-[15px] md:leading-[18px]">
                     {cert.type}
                  </p>

               </article>
            ))}

         </div>
      </section>
   )
}