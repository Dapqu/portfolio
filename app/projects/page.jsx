"use client"

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import ProjectSliderBtns from "@/components/ProjectSliderBtns";

const projects = [
    {
        num: "01",
        title: "Void - GWJ #69",
        description: "Solo game development project created for Godot Wild Jam, completed in 9 days. In a race against the encroaching darkness, harness your void vision to navigate through the universe.",
        stack: [{ name: "Asperite" }, { name: "GD Script (Python)" }, { name: "Godot Engine" }],
        image: "/assets/projects/01.png",
        live: "https://dapqu.itch.io/gwj-69",
        github: "https://github.com/Dapqu/Void-GWJ-69",
    },
    {
        num: "02",
        title: "Portfolio Website",
        description: "Concise and clear portfolio website showcasing my education, professional experience, and skills. The current site itself is the live demonstration of the project.",
        stack: [{ name: "Css 3" }, { name: "Html 5" }, { name: "Javascript" }, { name: "Next.js" }, { name: "Node.js" }, { name: "React" }, { name: "Tailwind Css" }],
        image: "/assets/projects/02.png",
        live: "N/A",
        github: "https://github.com/Dapqu/portfolio",
    },
    {
        num: "03",
        title: "FlapAI",
        description: "Elevating the classic Flappy Bird concept by introducing new gameplay twists such as a hardmode. Leveraging the Unity game engine and the implementation of Artificial Intelligence algorithms such as PPO and Q-learning. This integration enabled the AI to autonomously navigate and play in the reimagined Flappy (Bird) AI.",
        stack: [{ name: "Asperite" }, { name: "C#" }, { name: "ML" }, { name: "Python" }, { name: "ShaderLab" }, { name: "Unity Engine" }],
        image: "/assets/projects/03.png",
        live: "N/A",
        github: "https://github.com/Dapqu/FlapAI",
    },
    {
        num: "04",
        title: "Programming Language",
        description: "Developed a programming language in Java comprising a lexer, parser, interpreter, analyzer, and generator. Produced effective test scripts leveraging JUnit to automate up to 100 tests. Incorporated streamlined functionalities including variables, functions, if/while/switch statements, and operators.",
        stack: [{ name: "Java" }, { name: "JUnit" }],
        image: "/assets/projects/04.png",
        live: "N/A",
        github: "https://github.com/Dapqu/Programming-Language",
    },
    {
        num: "05",
        title: "Interective 3D World Map (WIP)",
        description: "Developed an interactive 3D website using Three.js, showcasing a world map where users can hover over and select countries. Implemented features to dynamically change the background to the selected country's flag and provide relevant information upon selection.",
        stack: [{ name: "Blender" } ,{ name: "Css 3" }, { name: "Html 5" }, { name: "Javascript" }, { name: "Node.js" }, { name: "Three.js" }],
        image: "/assets/projects/05.png",
        live: "https://interective-world-map-git-main-dapqus-projects.vercel.app/",
        github: "https://github.com/Dapqu/InterectiveWorldMap",
    },
    {
        num: "06",
        title: "Memory Manager",
        description: "Implement a memory manager in C++, whose features include initializing, tracking, allocating, and deallocating sections of memory. Integrate the memory manager into the console-based testing program provided.",
        stack: [{ name: "C++" }],
        image: "/assets/projects/06.png",
        live: "https://www.youtube.com/watch?v=iCEJiC6qYlg",
        github: "https://github.com/Dapqu/Memory-Manager",
    },
    {
        num: "07",
        title: "Covid Analyzer, Data Structure",
        description: "Worked with development team members to design and develop a Covid-19 analyzer to provide up to 100,000 testing/vaccination data. Designed and implemented two custom C++ data structures for the project to meet client requirements for performance comparisons. Achieved project deadlines by coordinating with contractors to manage performance.",
        stack: [{ name: "C++"}, { name: "Custom data structures"}],
        image: "/assets/projects/07.jpg",
        live: "https://www.youtube.com/watch?v=qW2PBxiI6fo",
        github: "https://github.com/Dapqu/covid-analyzer",
    },
    {
        num: "08",
        title: "Cache Simulator",
        description: "The cache simulation reads addresses from trace files, converts hex to binary, and processes them based on the cache design. It separates the address into tag and offset, then inserts the tag into the cache. If the tag is present, it registers a hit; if not, and the cache is full, it uses FIFO or LRU replacement to free space before adding the new tag.",
        stack: [{ name: "C" }, { name: "C++" }],
        image: "/assets/projects/08.png",
        live: "N/A",
        github: "https://github.com/Dapqu/Cache-Simulator",
    },
    {
        num: "09",
        title: "P2P File Sharing Software",
        description: "This project is about writing a P2P file-sharing software similar to BitTorrent. Within this P2P protocol, it includes file distribution, choking-unchoking mechanism, and more.",
        stack: [{ name: "Java" }],
        image: "/assets/projects/09.png",
        live: "N/A",
        github: "https://github.com/Dapqu/CNT4007",
    },
    {
        num: "10",
        title: "Curb Your Emissions",
        description: "Developed, initiated, and managed the creation of a tycoon-like video game using C# in Unity. Tracked project and team member performance closely to quickly intervene in mistakes or delays. Utilized Agile software development methods to increase team efficiency by 20%.",
        stack: [{ name: "C#" }, { name: "ShaderLab"}, { name: "Unity Engine"}],
        image: "/assets/projects/10.png",
        live: "https://www.youtube.com/watch?v=bN_Fac8WNwg",
        github: "https://github.com/Dapqu/Curb-Your-Emissions",
    },
    {
        num: "11",
        title: "Minesweeper",
        description: "Recreation of the classic minesweeper using C++.",
        stack: [{ name: "C++" }],
        image: "/assets/projects/11.png",
        live: "N/A",
        github: "https://github.com/Dapqu/Minesweeper",
    },
]

const Projects = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex])
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.2, duration: 0.4, ease: 'easeIn' }}}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* Outline number */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* Project category */}
                            <h2 className="text-[42px] font-bold leading-none text-customColor group-hover:text-accent transition-all duration-500 capitalize">
                                {project.title}
                            </h2>
                            {/* Project description */}
                            <p className="text-customColor2">{project.description}</p>
                            {/* Stack */}
                            <ul className="flex gap-2 flex-wrap">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* Border */}
                            <div className="border border-customColor2/20"></div>
                            {/* Btn */}
                            <div className="flex items-center gap-4">
                                {/* Live project btn */}
                                {project.live !== "N/A" && (
                                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsArrowUpRight className="text-customColor2 text-3xl group-hover:text-accent stroke-1" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Live project</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                )}
                                {/* Github project btn */}
                                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-customColor2 text-3xl group-hover:text-accent stroke-0" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper 
                            spaceBetween={30} 
                            slidesPerView={1} 
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            {/* Overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            {/* Image */}
                                            <div>
                                                <Image 
                                                    src={project.image} 
                                                    fill
                                                    className="object-cover"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            {/* Slider btn */}
                            <ProjectSliderBtns 
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;