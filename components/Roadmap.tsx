import React from 'react'

const Roadmap = () => {
  return (
    <section className="antialiased" id="Roadmap">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white mt-14 md:mt-0">
            Roadmap
          </h2>
        </div>
        <ol className="relative border-s border-gray-200 dark:border-gray-700 max-w-[1000px] mx-auto mt-8">
          <li className="mb-10 ms-4">
            <div
              className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
            </div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Phase 1</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Foundation & Early Adoption
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Develop the Tezuka
              platform with blockchain integration, conduct beta testing, launch
              marketing campaigns to attract filmmakers and early adopters, and onboard initial film projects
              with detailed information.</p>
            {/* <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Learn more
                <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a> */}
          </li>
          <li className="mb-10 ms-4">
            <div
              className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
            </div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Phase 2</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Growth & Engagement</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Foster a vibrant community with
              interactive features, introduce AI ChatBOTs for updates, implement a tiered subscription model,
              establish partnerships with festivals and influencers, and airdrops to incentivize engagement.
            </p>
          </li>
          <li className="ms-4">
            <div
              className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
            </div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Phase 3</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Global Reach & Sustainability
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Expand to international markets
              with multi-language support, release mobile apps, enhance liquidity pool dynamics for growth,
              regularly update the platform based on feedback, and onboard high-profile film projects to
              attract larger investments.</p>
          </li>
        </ol>
      </div>
    </section>
  )
}

export default Roadmap