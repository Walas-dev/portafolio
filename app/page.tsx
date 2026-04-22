import Footer from "@/components/footer";
import Header from "@/components/header";
import AboutMe from "@/components/about me/page"
import Welcome from "@/components/welcome/welcome";
import Stack from "@/components/stacks/stacks";
import Certification from "@/components/certificados/page";
import Mensaje from "@/components/mesaje/page"
import Contact from "@/components/contact/page"
//import Proyects from "@/components/proyects/proyects";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-[#0F0F17]">
      <Header/>      
      
      <main className="flex min-h-screen w-full flex-col items-center justify-between pt-5 bg-[#0F0F17] sm:items-start">
        <Welcome/>
        <Mensaje/>
        <AboutMe/>
        <Stack/>
        <Certification/>        
        <Contact/>
      </main>

      <Footer/>
    </div>
  );
}
