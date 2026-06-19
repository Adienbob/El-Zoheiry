import About from "./components/sections/AboutUs";
import Certificates from "./components/sections/Certificates";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Products from "./components/sections/Products";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <Contact />
    </main>
  );
}