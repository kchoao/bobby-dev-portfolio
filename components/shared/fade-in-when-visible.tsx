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
    delay = 2,
    transition = {
        duration: 0.2 ,
        staggerChildren: 0.3
    }, 
    children } : FadeInWhenVisibleProps) {


    return (
        <motion.div
            className={`${className}`}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={FADE_UP_ANIMATION_VARIANTS}
            transition={{...transition, delay}}
            >
            {/* {React.Children.map(children, (child, index) => {
                return <motion.div 
                variants={FADE_UP_ANIMATION_VARIANTS}  
                >{child}</motion.div>
            })
            } */}
            {children}
        </motion.div>
    );
}