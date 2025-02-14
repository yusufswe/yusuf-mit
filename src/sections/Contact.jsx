import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="container mx-auto bg-[#663399] text-white py-16 px-4" id="contact">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-8">Contact me</h2>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
            <div>
              <select
                required
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white/90 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <option value="" className="bg-[#663399]">
                  Type of enquiry
                </option>
                <option value="project" className="bg-[#663399]">
                  Freelance project proposal
                </option>
                <option value="opportunity" className="bg-[#663399]">
                  Job opportunity
                </option>
                <option value="other" className="bg-[#663399]">
                  Other
                </option>
              </select>
            </div>
            <div>
              <textarea
                required
                placeholder="Your message"
                rows={6}
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#7A4BAF] text-white py-2 px-4 rounded-md font-medium hover:bg-white/90 transition-colors"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
