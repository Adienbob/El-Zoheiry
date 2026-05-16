"use client";

import { useLang } from "../LanguageContext";
import { t } from "../translations";

export default function Contact() {
   const { lang } = useLang();
   const T = t[lang];

   return (
      <section id="contact" className="px-6 py-20 bg-second-bg">
         <div>
            <span className="text-secondary tracking-[4px] leading-[24px] mb-3 block">{T.contact.label}</span>
            <h2 className="text-muted text-[32px] mb-6 tracking-[1.6px] leading-[41px] font-bold">{T.contact.title}</h2>
         </div>

         <div>
            <div className="">
               <h3 className="text-text text-[10px] tracking-[2px] leading-[15px] mb-1">Email</h3>
               <p className="text-muted leading-[24px] mb-6">info@gelatinfactory.com</p>

               <h3 className="text-text text-[10px] tracking-[2px] leading-[15px] mb-1">Phone</h3>
               <p className="text-muted leading-[24px] mb-6">+20 100 000 0000</p>

               <h3 className="text-text text-[10px] tracking-[2px] leading-[15px]">Address</h3>
               <p className="text-muted leading-[24px]">Industrial Zone, Cairo, Egypt</p>
            </div>

            <div className="border border-stroke mt-20 bg-form pt-[48px] px-[48px] pb-[64px]">
               <div className="grid mb-6">
                  <label className="mb-1 text-text text-[10px] leading-[15px] tracking-[1px]">{T.contact.name}</label>
                  <input type="text" className="bg-bg h-12.5 border border-stroke" />
               </div>

               <div className="grid mb-6">
                  <label className="mb-1 text-text text-[10px] leading-[15px] tracking-[1px]">{T.contact.email}</label>
                  <input type="email" className="bg-bg h-12.5 border border-stroke" />
               </div>

               <div className="grid">
                  <label className="mb-1 text-text text-[10px] leading-[15px] tracking-[1px]">{T.contact.message}</label>
                  <textarea className="bg-bg border border-stroke" rows={5}/>
               </div>

               <button className="mt-6 bg-primary text-white leading-[24px] tracking-[1.6px] w-full py-6" type="button">
                  {T.contact.send}
               </button>
            </div>
         </div>
      </section>
   );
}