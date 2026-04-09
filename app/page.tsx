import Footer from "@/components/footer";
import Header from "@/components/header";
import AboutMe from "@/components/about me/about"
import Welcome from "@/components/welcome/welcome";
import Stack from "@/components/stacks/stacks";
import Certification from "@/components/certificados/education/certification";
import Mensaje from "@/components/mesaje/page"
import Contact from "@/components/contact/page"
//import Proyects from "@/components/proyects/proyects";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-[#1a1a2e]">
      <Header/>      
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-5 bg-[#1a1a2e] sm:items-start">
       
        <Welcome/>
        <Mensaje/>
        <AboutMe/>
        <Stack/>
        <Certification/>

        
      </main>
      <Contact/>
      <Footer/>
    </div>
  );
}
