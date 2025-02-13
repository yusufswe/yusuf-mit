import React from "react";

export default function Contact() {
  return (
    <section className="bg-[#663399] text-white py-16 px-4">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-8">Contact me</h2>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
          <div>
            <select className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white/90 focus:outline-none focus:ring-2 focus:ring-white/30">
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
      </div>
    </section>
  );
}
