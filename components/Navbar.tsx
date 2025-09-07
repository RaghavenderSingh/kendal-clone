"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useSession, signIn, signOut } from "next-auth/react";

export const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<any>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default function Navbar() {
  const { scrollY } = useScroll();
  const logoSize = useTransform(scrollY, [0, 100], [32, 24]);
  const { data: session, status } = useSession();

  const handleAuth = () => {
    if (session) {
      signOut();
    } else {
      signIn("google");
    }
  };

  return (
    <div className="relative overflow-hidden rounded-xl bg-black/30 border border-white/25 shadow-inner shadow-white/55 p-[1px]">
      <div className="absolute inset-0" style={{ borderRadius: "0.75rem" }}>
        <MovingBorder duration={6000} rx="12" ry="12">
          <div
            className={cn(
              "h-1 w-16 bg-gradient-to-r from-transparent via-[#FF3F33] to-transparent opacity-[0.9] blur-[1px]"
            )}
          />
        </MovingBorder>
      </div>
      <div className="relative z-10 rounded-xl bg-black/30 p-2">
        <div className="flex justify-between items-center">
          <motion.div>
            <motion.div
              style={{ fontSize: logoSize }}
              className="font-bold text-gray-900 flex items-center"
            >
              <Image
                src="/logo.png"
                alt="logo"
                width={40}
                height={40}
                priority
              />
            </motion.div>
          </motion.div>

          <motion.div></motion.div>

          <motion.div className="relative">
            {session ? (
              <div className="flex items-center gap-3">
                <span className="text-white text-sm">
                  Welcome, {session.user?.name}
                </span>
                <Button
                  onClick={handleAuth}
                  className="
                  flex items-center gap-3 
                  px-6 sm:px-8 py-2 sm:py-3
                  text-sm sm:text-base 
                  bg-red-500/20 
                  backdrop-blur-sm 
                  border border-red-500/30 
                  hover:bg-red-500/30 
                  transition-all duration-300 
                  group
                  relative z-10"
                >
                  <span className="transition-all pr-1 duration-300 group-hover:mr-2">
                    Sign Out
                  </span>
                </Button>
              </div>
            ) : (
              <Button
                onClick={handleAuth}
                disabled={status === "loading"}
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
                  {status === "loading" ? "Loading..." : "Login with"}
                </span>
                <FcGoogle className="text-xl transition-transform group-hover:scale-110" />
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
