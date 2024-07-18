import Image from "next/image";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import SectionValues from "@/components/SectionValues";
import SectionTeacher from "@/components/sectionTeacher";
import SectionTopStudant from "@/components/sectionTopStudant";
import SectionFaq from "@/components/sectionFaq";
import SectionEmail from "@/components/sectionEmail";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className=" bg-white px-7 py-5">
      <Header/>
      <Hero/>
      <SectionValues/>
      <SectionTeacher/>  
      <SectionTopStudant/>   
      <SectionFaq/>
      <SectionEmail/>
      <Footer/>
    </main>
  );
}
