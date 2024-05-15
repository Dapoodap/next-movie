import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Platform from "./components/Platform";
import SectionMovies from "./components/SectionMovies";
import SectionPopular from "./components/SectionPopular";
import PreviewSeries from "./components/PreviewSeries";

export default function Home() {
  return (
    <div className="bg-[#0d0c0f]">
      <Navbar/>
      <HeroSection/>
      <Platform/>
      <SectionMovies/>
      <SectionPopular/>
      <PreviewSeries/>
    </div>
  );
}
