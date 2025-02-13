import React from "react";
import myPhoto from "../assets/img/myPhoto.jpg";

export default function Hero() {
  return (
    <section className="bg-[#2B4157] text-white ">
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
    </section>
  );
}
