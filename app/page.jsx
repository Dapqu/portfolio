"use client";

import { Button } from "@/components/ui/button";
import { FiDownload} from "react-icons/fi";

// Component imports
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Intro */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              My name is <br /> <span className="text-accent">Dilimulati Diliyaer</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-customColor2">
              Driven by a passion for creation, 
              I have acquired a diverse set of skills and proficiency in multiple programming languages, 
              enabling me to develop high-quality software and websites. 
            </p>
            {/* Resume download button */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={() => window.open('https://docs.google.com/document/d/16glTRdGgDTOJtI6CiwZRZ2ogCM2C6N8W/edit?usp=sharing&ouid=110821742348439769709&rtpof=true&sd=true', '_blank')}
              >
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </Button>
              {/* Social media section */}
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
