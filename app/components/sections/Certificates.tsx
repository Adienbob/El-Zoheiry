"use client"
import { useLang } from "../LanguageContext";
import { t } from "../translations";

export default function Certificates() {
   const { lang } = useLang();
   const T = t[lang];

   return (
      <section className="py-20 px-6 grid">
         <span className="tracking-[4px] leading-[24px] text-secondary md:text-[18px]">
            {T.certificate.label}
         </span>

         <h2 className="text-[32px] md:text-[44px] tracking-[1.6px] leading-[41.6px] md:leading-[54px] text-muted mt-3">
            {T.certificate.title}
         </h2>

         <div className="grid gap-6 mt-10 md:grid-cols-2">
            {T.certificate.certificates.map((cert) => (
               <article className="border-t-2 border-secondary bg-form p-6" key={cert.id}>
                  <h3 className="font-semibold leading-[24px] md:text-[20px] md:leading-[30px] text-muted mb-3">
                     {cert.name}
                  </h3>

                  <p className="text-[14px] md:text-[16px] text-text leading-[20px] md:leading-[26px] mb-6">
                     {cert.desc}
                  </p>

                  <span className="text-secondary text-[10px] md:text-[12px] leading-[15px] md:leading-[18px]">
                     {cert.type}
                  </span>
               </article>
            ))}
         </div>
      </section>
   )
}