import React from 'react'

function Hero() {
  return (
  <section className="bg-black text-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

    {/* Badge */}
    <div className="flex justify-center mb-6">
      <span className="text-white border border-white px-4 py-1 rounded-full text-xs sm:text-sm">
        See What's New | <span className="text-sky-300">AI Diagram</span>
      </span>
    </div>

    {/* Content */}
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl sm:text-5xl font-extrabold text-sky-300 leading-tight">
        Documents & diagrams
        <span className="block text-white">
          for engineering teams.
        </span>
      </h1>

      <p className="mt-4 text-slate-300 text-sm sm:text-lg">
        All-in-one markdown editor, collaborative canvas, and diagram-as-code builder
      </p>

      <div className="mt-6 flex justify-center">
        <a
          href="#"
          className="bg-white text-black px-6 py-2 rounded text-sm font-medium hover:bg-gray-300 transition"
        >
          Learn More
        </a>
      </div>
    </div>
  </section>


  )
}

export default Hero
