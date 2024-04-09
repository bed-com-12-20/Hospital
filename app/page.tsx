
import Herosection from "./Home/Herosection";
import Navbar from "@/componets/navbar"; 
import Section1 from "./Home/section1";
import ServicesCard from "./Home/servicesCard";
import MissionSection from "./Home/Mission";
import QuickServiceSection from "./Home/quickServiceSection";
import BriefHistory from "./Home/history";
import ConnectSection from "./Home/Connect";
import ScrollToTopButton from "./Scroll/scroll";
import FAQ from "./Home/Faq";
import DoctorsSection from "./Home/doctorSection";
import BottomSection from "./Home/BottomSection";
import Footer from "@/componets/footer";
//import Navbar from "@/componets/navbkar";
import Hero from "./Home/Hero";
export default function page() {
  return (
    <>
      <Navbar />
     <Herosection/>
      <Section1/>
      <ServicesCard/>
      <MissionSection/>
      <QuickServiceSection/>
      <BriefHistory/>
      <FAQ/>
      <DoctorsSection/>
      <BottomSection/>
      <ScrollToTopButton/>
      <Footer/>
      {/* <Home /> */}
    </>
  );
}