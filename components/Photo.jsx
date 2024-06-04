"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }} 
                animate={{
                    opacity: 1,
                    transition: { delay: 1, duration: 0.2, ease: 'easeIn' }
                }}
            >
                {/* Profile picture */}
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{
                        opacity: 1,
                        transition: { delay: 1.2, duration: 0.2, ease: 'easeInOut' }
                    }}
                    className="w-[398px] h-[398px] xl:w-[598px] xl:h-[598px] mix-blend-lighten absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                    <Image 
                        src="/assets/photoLarge.png" 
                        priority 
                        quality={100} 
                        fill 
                        sizes="100vw, 50vw, 33vw"
                        alt="" 
                        className="object-contain"
                    />
                </motion.div>

                {/* Rank circle, league reference */}
                <motion.svg 
                    className="w-[400px] xl:w-[606px] h-[400px] xl:h-[606px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle 
                        cx="253" 
                        cy="253" 
                        r="250" 
                        stroke="#0dc4d9"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{strokeDasharray: "24 10 0 0"}}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360]
                        }}
                        transition = {{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default Photo;