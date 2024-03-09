
import Herosection from "./Home/Herosection";
import Navbar from "@/componets/navbar"; 
import Section1 from "./Home/section1";
import ServicesCard from "./Home/servicesCard";
import MissionSection from "./Home/Mission";
import QuickServiceSection from "./Home/quickServiceSection";
import BriefHistory from "./Home/history";
import ConnectSection from "./Home/Connect";
import FindDoctorSection from "./Home/findDoctor";
import FAQ from "./Home/Faq";
import DoctorsSection from "./Home/doctorSection";
import BottomSection from "./Home/BottomSection";
import Footer from "@/componets/footer";
// import Navbar from "@/componets/navbkar";
export default function page() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Section1/>
      <ServicesCard/>
      <MissionSection/>
      <QuickServiceSection/>
      <BriefHistory/>
      <ConnectSection/>
      <FindDoctorSection/>
      <FAQ/>
      <DoctorsSection/>
      <BottomSection/>
      <Footer/>
      {/* <Home /> */}
    </>
  );
}