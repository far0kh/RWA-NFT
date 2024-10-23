import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

const Blog = () => {
  return (
    <section className="antialiased w-full" id="Blog">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white mt-14 md:mt-0">
            Blog
          </h2>
          <p className="mt-1 text-lg font-normal tracking-tight text-slate-500">
            Stay in the know with insights from industry experts.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            href="https://paragraph.xyz/@cinecrowd/introducing-runes-a-new-era-in-bitcoin-tokenization"
            target="_blank"
            className="group"
          >
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <img
                className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                src="/images/blog-1.png"
                alt="Introducing Runes: A New Era in Bitcoin Tokenization"
              />
            </div>
            <div className="mt-7">
              <h3
                className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                Introducing Runes: A New Era in Bitcoin Tokenization
              </h3>
              <p className="mt-3 text-gray-800 dark:text-neutral-200">
                A New Standard in Bitcoin Tokenization
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1 text-orange-500 decoration-2 group-hover:underline font-medium">
                Read more
                <FaAngleRight />
              </p>
            </div>
          </a>

          <a
            href="https://paragraph.xyz/@cinecrowd/revolutionizing-film-fundraising-with-bitcoin-a-new-era-for-indie-filmmakers"
            target="_blank"
            className="group"
          >
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <img
                className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                src="/images/blog-2.png"
                alt="Revolutionizing Film Fundraising with Bitcoin: A New Era for Indie Filmmakers"
              />
            </div>
            <div className="mt-7">
              <h3
                className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                Revolutionizing Film Fundraising with Bitcoin: A New Era for Indie Filmmakers
              </h3>
              <p className="mt-3 text-gray-800 dark:text-neutral-200">
                The Challenges of Traditional Film Fundraising
              </p>
              <p className="mt-5 inline-flex items-center gap-x-1 text-orange-500 decoration-2 group-hover:underline font-medium">
                Read more
                <FaAngleRight />
              </p>
            </div>
          </a>

          <a
            href="#"
            className="group relative flex flex-col w-full min-h-60 bg-[url('/images/future.svg')] bg-center bg-cover rounded-xl hover:shadow-lg transition"
          >
            <div className="flex-auto p-4 md:p-6">
              {/* <h3 className="text-xl text-white/90 group-hover:text-white ">
                <span className="font-bold">Coming Soon</span>
              </h3> */}
            </div>
            <div className="pt-0 p-4 md:p-6">
              {/* <div
                className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70">
                Visit the site
                <FaAngleRight />
              </div> */}
              <h3 className="text-xl text-white/80 group-hover:text-white ">
                <span className="font-bold">Coming Soon</span>
              </h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog