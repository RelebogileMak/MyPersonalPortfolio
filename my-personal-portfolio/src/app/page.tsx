import Image from "next/image";
import HeroSection from "./components/hero-section";
import HeroWithLanguages from "./components/language-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <main>
        <HeroSection />
      </main>
      <div>
        < HeroWithLanguages />
      </div>
   </div>
  )
}
 