import React from 'react'

const Footer = () => {
  return (
    <section className="antialiased w-full" id="Footer">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:pt-16 lg:pt-24">
        <div className="max-w-3xl mx-auto text-center pb-5">
          <div className="flex gap-8 justify-center items-center">
            <a
              type="button"
              href="https://x.com/tezuka_xyz"
              target='_blank'
              className="group inline-flex items-center justify-center whitespace-nowrap align-middle font-semibold transition-all duration-300 ease-in-out  stroke-white text-white cursor-pointer p-0  hover:stroke-orange-400 hover:text-orange-400 h-6 min-w-[24px] gap-1.5 rounded-md text-xs"
              aria-label="twitter"
            >
              <img
                src="/images/x-logo.svg"
                alt=""
                width="23"
              />
            </a>
            <a
              type="button"
              href="https://www.github.com/tezuka_io"
              target='_blank'
              className="group inline-flex items-center justify-center whitespace-nowrap align-middle font-semibold transition-all duration-300 ease-in-out  stroke-white text-white cursor-pointer p-0  hover:stroke-orange-400 hover:text-orange-400 h-6 min-w-[24px] gap-1.5 rounded-md text-xs"
              aria-label="github"
            >
              <img
                src="/images/github-logo.svg"
                alt=""
                width="25"
              />
            </a>
          </div>
        </div>
        <div className="bg-slate-500 my-4 w-full h-[1px] hidden lg:block"></div>
        <div className="mx-auto text-center">
          <div className="flex w-full flex-col items-center gap-2 text-center lg:flex-row lg:items-center lg:gap-0 lg:text-left">
            <div className="m-auto lg:w-full">
              <div className="flex items-center">
                <img src="/logo-wide.webp" className="mr-1 h-9" alt="Tezuka Logo" />
              </div>
            </div>
            <div className="m-auto lg:w-full text-end">
              <p className="text-white">{`© ${new Date().getFullYear()} • Tezuka.xyz`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer