"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "+1(786)899-8333"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "dilyarswe@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "Florida, US"
    }
]

const Contact = () => {
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1.2, duration: 0.4, ease: 'easeIn' }
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* Form */}
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#232329] rounded-xl">
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-customColor2">some text goes here.</p>
                            {/* Input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="Firstname" />
                                <Input type="lastname" placeholder="Lastname" />
                                <Input type="email" placeholder="Email" />
                                <Input type="phone" placeholder="Phone number" />
                            </div>
                            {/* Text area */}
                            <Textarea
                                className="h-[200px]"
                                placeholder="Type your message here."
                            />
                            {/* Btn */}
                            <Button size="lg" className="max-w-40">
                                Send message
                            </Button>
                        </form>
                    </div>
                    {/* Info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#232329] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-customColor2/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;