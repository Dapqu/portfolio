"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from "framer-motion";
import HCaptcha from '@hcaptcha/react-hcaptcha';

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
    const [result, setResult] = React.useState("");
    const { register, handleSubmit, setValue } = useForm();

    const onHCaptchaChange = (token) => {
        setValue("h-captcha-response", token);
    };

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "d90eb892-eda8-4e48-b733-1f7629dbc32b");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };  

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
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 p-10 bg-[#232329] rounded-xl">
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-customColor2">some text goes here.</p>
                            {/* Input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" name="name" placeholder="Name" required />
                                <Input type="email" name="email" placeholder="Email" required />
                            </div>
                            {/* Subject */}
                            <Input type="text" name="subject" placeholder="Subject" required />
                            {/* Text area */}
                            <Textarea
                                className="h-[200px]"
                                name="message"
                                placeholder="Type your message here."
                                required
                            />
                            {/* Btn */}
                            <Button type="submit" size="lg" className="max-w-40">
                                Send message
                            </Button>
                            {/* hCaptcha */}
                            <HCaptcha
                                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                                reCaptchaCompat={false}
                                onVerify={onHCaptchaChange} 
                            />
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