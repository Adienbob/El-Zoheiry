"use client"
import Image from "next/image"
import { useLang } from "./LanguageContext";
import { t } from "./translations";

export default function Footer() {
   const { lang } = useLang()
   const T = t[lang]
   
   return (
      <footer className="flex flex-col items-center gap-7.5 text-center border-t-2 border-secondary px-6 py-20 lg:py-24 bg-second-bg">
         <div className="flex flex-col gap-2.5 items-center">
            <div className="flex justc relative h-[40px] w-[50px]">
               <Image
                  src="/Alostaz.png"
                  fill
                  className="object-contain"
                  alt=""
               />
            </div>
            <span className="font-bold leading-[24px] -tracking-[0.8px] md:text-lg lg:text-[25px]">
               AL-OSTAZ
            </span>
         </div>

         <nav aria-label="Social media">
            <ul className="flex justify-center gap-6 lg:gap-10">
               <li>
                  <a href="#" aria-label="Social link">
                     <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-secondary" fill="currentColor" viewBox="0 0 640 640" width={30} height={30}><path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"/></svg>
                  </a>
               </li>
               <li>
                  <a href="https://wa.me/201144167070" aria-label="Social link">
                     <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-secondary" fill="currentColor" viewBox="0 0 640 640" width={30} height={30}><path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/></svg>
                  </a>
               </li>
               <li>
                  <a href="#" aria-label="Social link">
                     <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-secondary" fill="currentColor" viewBox="0 0 640 640" width={30} height={30}><path d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z"/></svg>
                  </a>
               </li>
            </ul>
         </nav>

         <p className="tracking-[1px] leading-[15px] text-[10px] md:text-sm lg:text-base text-secondary">
            © 2024 AL-OSTAZ INDUSTRIAL GELATIN COMPANY. ALL RIGHTS RESERVED.
         </p>
      </footer>
   )
}