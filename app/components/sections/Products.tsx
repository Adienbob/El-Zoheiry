"use client"
import { useLang } from "../LanguageContext";
import { t } from "../translations";

export default function Products() {
   const { lang } = useLang()
   const T = t[lang]


   return (
      <section>
         <span>
            {T.products.label}
         </span>
         <h2>
            {T.products.title}
         </h2>
         <div>
            {T.products.items.map((item) => (
               <article key={item.id}>
                  <h3>
                     {item.name}
                  </h3>
                  <p>
                     {item.desc}
                  </p>
                  <a href="#Contact">GET IT NOW</a>
               </article>
            ))}
         </div>
      </section>
   )
}