"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

import { 
    FaHtml5, 
    FaCss3, 
    FaJs, 
    FaReact, 
    FaNodeJs,
    FaJava
} from 'react-icons/fa';

import { 
    SiTailwindcss, 
    SiNextdotjs,
    SiPython,
    SiUnity,
    SiUnrealengine,
    SiGodotengine,
    SiCsharp,
    SiCplusplus,
    SiThreedotjs,
    SiBlender,
    SiGit
} from "react-icons/si";


const about = {
    title: "About me",
    description: "Some of the personal information about me!",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Dilimulati Diliyaer"
        },
        {
            fieldName: "Phone",
            fieldValue: "+1(786)899-8333"
        },
        {
            fieldName: "Email",
            fieldValue: "dilyarswe@gmail.com"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Chinese"
        },
        {
            fieldName: "Status",
            fieldValue: "New Grad @ UF, Go Gators!"
        },
    ]
};

const education = {
    icon: "",
    title: "My education",
    description: "Overview of my academic background. This includes details such as my degrees, certifications, courses, and any relevant academic achievements.",
    items: [
        {
            institution: "University of Florida",
            degree: "Computer Science",
            duration: "2019 - 2024"
        },
        {
            institution: "Coursera",
            degree: "AI for Everyone",
            duration: "2023"
        }
    ]
};

const skills = {
    title: "My skills",
    description: "Showcase of my proficiency in various areas relevant to my field or industry, which include technical skills, as well as soft skills.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5"
        },
        {
            icon: <FaCss3 />,
            name: "css 3"
        },
        {
            icon: <FaJs />,
            name: "javascript"
        },
        {
            icon: <FaReact />,
            name: "react.js"
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js"
        },
        {
            icon: <SiThreedotjs />,
            name: "three.js"
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css"
        },
        {
            icon: <FaNodeJs />,
            name: "node.js"
        },
        {
            icon: <SiCsharp />,
            name: "c#"
        },
        {
            icon: <SiCplusplus />,
            name: "c++"
        },
        {
            icon: <FaJava />,
            name: "java"
        },
        {
            icon: <SiPython />,
            name: "python"
        },
        {
            icon: <SiUnity />,
            name: "unity engine"
        },
        {
            icon: <SiGit />,
            name: "git"
        },
        {
            icon: <SiUnrealengine />,
            name: "unreal engine"
        },
        {
            icon: <SiGodotengine />,
            name: "godot engine"
        },
        {
            icon: <SiBlender />,
            name: "blender"
        }
    ]
};

const Resume = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1.2, duration: 0.4, ease: 'easeIn' }
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="education" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    {/* Content */}
                    <div className="min-h-[70vh] w-full h-full">
                        {/* Education */}
                        <TabsContent value="education" className="w-full h-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-customColor2 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[600px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li 
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.degree}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-customColor2">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* Skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-customColor2 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ScrollArea className="h-[600px]">
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                        {skills.skillList.map((skill, index) => {
                                            return (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                                <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="capitalize">{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* About */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-customColor2 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-customColor2">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;