"use client";
import React from "react";
import GradientMask from "@/components/GradientMask";
import { PointerHighlight } from "./ui/pointer-highlight";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

export default function Landing() {
  return (
    <div className="grid grid-cols-1 gap-10 pb-10 md:pb-40 xl:grid-cols-2">
      <div>
        <div className="mx-auto max-w-lg pt-20 text-5xl font-bold tracking-tight md:text-5xl text-white">
          <PointerHighlight
            rectangleClassName="bg-gradient-to-r from-[#FF3F33] via-[#FF6B35] to-[#F7931E] border-[#FF6B35] dark:border-neutral-600 leading-loose"
            containerClassName="inline-block mr-1"
          >
            <span className="relative z-10 ">Agents Close Deals,</span>
          </PointerHighlight>
          <span className="block mt-5">Not Do Admin.</span>
        </div>
        <div className="mx-auto pt-5 max-w-lg tracking-tight md:text-sm text-gray-300">
          Let Kendal’s AI Workforce handle the repetitive stuff: lead
          qualification, follow-ups, and WhatsApp engagement — so your team
          stays focused on chasing deals and closing them.
        </div>
        <div className="mx-auto pt-5 max-w-lg tracking-tight md:text-sm text-gray-300">
          <motion.div className="relative">
            <Button
              // onClick={handleSubmit}
              // disabled={isPending}
              className="
            flex items-center gap-3 
            px-6 sm:px-8 py-2 sm:py-3
            text-sm sm:text-base 
            bg-white/10 
            backdrop-blur-sm 
            border border-white/20 
            hover:bg-white/20 
            transition-all duration-300 
            group
            relative z-10"
            >
              <span className="transition-all pr-1 duration-300 group-hover:mr-2">
                Login with
              </span>
              <FcGoogle className="text-xl transition-transform group-hover:scale-110" />
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="relative mx-4 hidden h-[800px] w-full grid-cols-1 items-start gap-10  lg:grid lg:grid-cols-2">
        <GradientMask color="#FF3F33" offset="70px" width="2px" />
      </div>
    </div>
  );
}
