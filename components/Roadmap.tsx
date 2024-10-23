import React from 'react'

const Roadmap = () => {
  const roadmap = [
    {
      phase: "1",
      title: "2024",
      desc: "Launch Tezuka platform beta version",
    },
    {
      phase: "2",
      title: "2025",
      desc: "Secure partnerships with major art galleries",
    },
    {
      phase: "3",
      title: "2026",
      desc: "Expand user base to 1 million",
    },
    {
      phase: "4",
      title: "2027",
      desc: "Introduce fractional ownership feature",
    },
    {
      phase: "5",
      title: "2028",
      desc: "Achieve $1 billion in tokenized art transactions",
    },
  ]
  return (
    <section className="antialiased" id="Roadmap">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white mt-14 md:mt-0">
            Roadmap
          </h2>
        </div>
        <ol className="relative border-s border-gray-700 max-w-[1000px] mx-auto mt-8">
          {roadmap.map((item, index) => (
            <li key={index} className="my-10 ms-4">
              <div className="absolute w-10 h-10 rounded-full -start-5 border border-green-900 bg-green-700"></div>
              <time className="-ms-4 z-50 text-sm font-normal leading-none text-black">{item.phase}</time>
              <h3 className="text-lg font-semibold text-white mt-5">{item.title}</h3>
              <p className="text-base font-normal text-gray-400">{item.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Roadmap