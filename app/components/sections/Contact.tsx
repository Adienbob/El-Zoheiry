"use client";

import { useLang } from "../LanguageContext";
import { t } from "../translations";

export default function Contact() {
   const { lang } = useLang();
   const T = t[lang];

   return (
      <section id="contact">
         <div>
            <span>{T.contact.label}</span>
            <h2>{T.contact.title}</h2>
         </div>

         <div>
            {/* Left — Info */}
            <div>
               <h3>Email</h3>
               <p>info@gelatinfactory.com</p>

               <h3>Phone</h3>
               <p>+20 100 000 0000</p>

               <h3>Address</h3>
               <p>Industrial Zone, Cairo, Egypt</p>
            </div>

            {/* Right — Form */}
            <div>
               <div>
                  <label>{T.contact.name}</label>
                  <input type="text" placeholder={T.contact.name} />
               </div>

               <div>
                  <label>{T.contact.email}</label>
                  <input type="email" placeholder={T.contact.email} />
               </div>

               <div>
                  <label>{T.contact.message}</label>
                  <textarea rows={5} placeholder={T.contact.message} />
               </div>

               <button type="button">
                  {T.contact.send}
               </button>
            </div>
         </div>
      </section>
   );
}