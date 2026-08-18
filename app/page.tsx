import Header from "@/components/header/header";
import AboutMe from "@/components/about/About"
import Hero from "@/components/hero/hero";
import Stack from "@/components/stacks/stack";
import Certification from "@/components/certificados/certificado";
import Contact from "@/components/contact/contact"
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans bg-cream dark:bg-mahogany">
      <Header/>      
      
      <main className="flex min-h-screen w-full flex-col items-center justify-between sm:items-start">
        <Hero/>
        <AboutMe/>
        <Stack/>
        <Certification/>        
        <Contact/>
      </main>

       <Footer/>
    </div>
  );
}

// dark:bg-foreground