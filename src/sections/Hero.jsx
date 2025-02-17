import React from "react";
import myPhoto from "../assets/img/myPhoto.webp";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="container mx-auto bg-gradient-to-b from-[#1E293B] to-[#2B4157] text-white">
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
        <div className="flex flex-col justify-center items-center h-screen text-center px-6">
          <div className="w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-white/80 shadow-2xl shadow-white/20">
            <img src={myPhoto} alt="myPhoto" className="w-full h-full object-cover" />
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 drop-shadow-lg">
            <span>Hello I am </span>Yusuf
          </h1>

          <p className="text-3xl md:text-4xl font-semibold text-gray-300 mt-4">
            A frontend developer{" "}
            <span className="text-blue-400 font-medium">
              <br />
              specialized in React
            </span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
