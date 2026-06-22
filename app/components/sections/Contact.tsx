"use client";

import { useLang } from "../LanguageContext";
import { t } from "../translations";

export default function Contact() {
   const { lang } = useLang();
   const T = t[lang];

   return (
      <section
         id="Contact"
         aria-labelledby="contact-heading"
         className="px-6 py-20 bg-bg grid md:grid-cols-2 lg:px-20 lg:py-28"
      >
         <div>
            <p className="text-secondary tracking-[4px] leading-[24px] mb-3 block md:text-[18px]">
               {T.contact.label}
            </p>

            <h2
               id="contact-heading"
               className="text-muted text-[32px] md:text-[44px] mb-6 tracking-[1.6px] leading-[41px] md:leading-[54px] font-bold"
            >
               {T.contact.title}
            </h2>

            <div>
               <h3 className="text-text text-[10px] md:text-[12px] tracking-[2px] leading-[15px] md:leading-[18px] mb-1">Email</h3>
               <p className="text-muted leading-[24px] md:text-[18px] md:leading-[30px] mb-6">
                  <a href="mailto:youseff.zohary1@gmail.com">youseff.zohary1@gmail.com</a>
               </p>

               <h3 className="text-text text-[10px] md:text-[12px] tracking-[2px] leading-[15px] md:leading-[18px] mb-1">Phone</h3>
               <p className="text-muted leading-[24px] md:text-[18px] md:leading-[30px] mb-6">
                  <a href="tel:+201033203430">+201033203430</a>
               </p>
               <p className="text-muted leading-[24px] md:text-[18px] md:leading-[30px] mb-6">
                  <a href="tel:+201144167070">+201144167070</a>
               </p>

               <h3 className="text-text text-[10px] md:text-[12px] tracking-[2px] leading-[15px] md:leading-[18px]">Address</h3>
               <p className="text-muted leading-[24px] md:text-[18px] md:leading-[30px]">{T.contact.adress}</p>
            </div>
         </div>

         <form
            aria-label="Contact form"
            className="border border-stroke mt-20 bg-form pt-[48px] px-[48px] pb-[64px] md:mt-0"
         >
            <div className="grid mb-6">
               <label htmlFor="name" className="mb-1 text-text text-[10px] md:text-[12px] leading-[15px] md:leading-[18px] tracking-[1px]">
                  {T.contact.name}
               </label>
               <input id="name" name="name" type="text" autoComplete="name" className="bg-bg h-12.5 border border-stroke focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" />
            </div>

            <div className="grid mb-6">
               <label htmlFor="email" className="mb-1 text-text text-[10px] md:text-[12px] leading-[15px] md:leading-[18px] tracking-[1px]">
                  {T.contact.email}
               </label>
               <input id="email" name="email" type="email" autoComplete="email" className="bg-bg h-12.5 border border-stroke focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" />
            </div>

            <div className="grid">
               <label htmlFor="message" className="mb-1 text-text text-[10px] md:text-[12px] leading-[15px] md:leading-[18px] tracking-[1px]">
                  {T.contact.message}
               </label>
               <textarea id="message" name="message" rows={5} className="bg-bg border border-stroke focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"/>
            </div>

            <button
               className="mt-6 bg-primary text-white leading-[24px] md:text-[16px] md:leading-[26px] tracking-[1.6px] w-full py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
               type="submit"
            >
               {T.contact.send}
            </button>
         </form>
      </section>
   );
}