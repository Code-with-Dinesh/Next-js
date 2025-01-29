"use client"
import FeaturedCourses from "./components/FeaturedCourses";
import HeroSection from "./components/HeroSection";
import MovingCard from "./components/MovingCard";
import Scroll from "./components/Scroll";
import UpcomingWebinar from './components/UpcomingWebinar'
export default function Home() {
  return (
       <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.03]">
        <HeroSection/>
        <FeaturedCourses/>
        <Scroll/>
        <MovingCard/>
        <UpcomingWebinar/>
       </main>
  );
}




