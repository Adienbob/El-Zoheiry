"use client";
import { createContext, useContext, useState } from "react";

type Lang = "ar" | "en";

const LanguageContext = createContext<{
   lang: Lang;
   setLang: (l: Lang) => void;
}>({ lang: "ar", setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
   const [lang, setLang] = useState<Lang>("en");
   return (
         <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
         </LanguageContext.Provider>
   );
}

export const useLang = () => useContext(LanguageContext);