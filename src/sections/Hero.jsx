import React from "react";
import myPhoto from "../assets/img/myPhoto.webp";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="container mx-auto bg-[#2B4157] text-white ">
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="w-24 h-24  mb-4 relative rounded-full overflow-hidden border-2 border-white/20">
            <img src={myPhoto} alt="myPhoto" fill className="object-cover" />
          </div>
          <p className="mb-2">Hello, I am Yusuf!</p>
          <h1 className="text-3xl text-center md:text-4xl font-bold">
            A frontend developer
            <br />
            specialised in React
          </h1>
        </div>
      </motion.div>
    </section>
  );
}
