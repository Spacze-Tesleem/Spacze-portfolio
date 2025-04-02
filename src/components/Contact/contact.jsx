import "./contact.css";
import React from "react";

export default function ContactSection() {
  return (
    <div className="contain-main">
      <div className="flex flex-col lg:flex-row pt-4 lg:pt-10 pb-4">
        <div className="lg:w-1/2 xl:w-5/12 pt-3 mt-3">
          <h1 className="text-lg font-semibold mb-2">Want to work with Me?</h1>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text pb-2 md:pb-3 mb-3">
            Let's talk!
          </h2>
          <div className="flex flex-col text-lg pt-5">
            <a href="#" className="text-blue-500 underline mb-4">
              Seidutesleem72@gmail.com
            </a>
            <div className="text-gray-700">+2348161181020</div>
          </div>
        </div>
        <div className="lg:w-1/2 xl:w-7/12 pt-3 md:pt-4 lg:pt-3 mt-3">
          <form className="space-y-4" netlify>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fn" className="block text-sm font-medium">
                  Full name
                </label>
                <input
                  type="text"
                  id="fn"
                  required
                  className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                />
                <p className="text-red-500 text-sm hidden">
                  Please enter your full name!
                </p>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                />
                <p className="text-red-500 text-sm hidden">
                  Please provide a valid email address!
                </p>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                required
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
              ></textarea>
              <p className="text-red-500 text-sm hidden">
                Please provide a valid email address!
              </p>
            </div>
            <div>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700"
              >
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
