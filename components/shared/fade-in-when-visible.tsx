"use client"

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/constants";
interface FadeInWhenVisibleProps {
    className?: string
    viewport?: { once?: boolean }
    delay?: number
    transition?: {
        duration?: number ,
        delay?: number,
        staggerChildren?: number
    }
    children: ReactNode
}
export default function FadeInWhenVisible({ 
    className, 
    viewport = {
        once:true
    }, 
    transition = {
        duration: 0.5 ,
        delay: 0.2,
        staggerChildren: 0.2
    }, 
    children } : FadeInWhenVisibleProps) {


    return (
        <motion.div
            className={`${className}`}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={FADE_UP_ANIMATION_VARIANTS}
            transition={transition}
            >
            {React.Children.map(children, child => {
                return <motion.div 
                variants={FADE_UP_ANIMATION_VARIANTS}  
                transition={{ duration: 0.3}}
                >{child}</motion.div>
            })
            }
        </motion.div>
    );
}