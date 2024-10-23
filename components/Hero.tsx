import React from 'react'
import { TbFlame } from "react-icons/tb";

const Hero = () => {
  return (
    <section className="pt-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 mt-12 md:mt-0" dir="rtl">
          <div className='flex justify-center'>
            <img className="w-full max-w-lg" src="/images/artwork.webp" alt="Artwork NFT" />
          </div>

          <div dir="ltr">
            <h1 className="text-5xl font-bold text-white mt-6 lg:mt-10 sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-8xl">
              NFTs for Real-World Arts
            </h1>
            <p className="mt-6 text-base text-slate-500 lg:mt-10 sm:text-xl">
              Blockchain technology has provided some relief to art
              galleries and artists in overcoming the challenges faced by
              them. This has been made possible through the emergence of
              Phygital NFTs, which have opened up a new avenue for the
              art world to make their physical art more accessible and liquid.
            </p>
            <br />
            <div className="flex gap-4">
              <a
                href="https://waitlist.tezuka.xyz"
                className="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed text-white bg-green-500 hover:bg-green-600 h-[38px] min-w-[38px] gap-2 disabled:bg-slate-100 disabled:stroke-slate-400 disabled:text-slate-400 disabled:hover:bg-slate-100 px-4"
              >
                <span>Join our limited waitlist</span>
                <TbFlame size={23} />
              </a>
              {/* <button type="button"
                    className="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-[#22c55e] px-2 text-[#22c55e] h-[42px] min-w-[42px] gap-2 disabled:stroke-slate-400 disabled:text-slate-400 hover:stroke-blue-950 hover:text-blue-950">
                    <span>Learn More</span>
                    <LuChevronRightCircle />
                  </button> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="px-4 py-10 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
        <span className="font-semibold text-gray-400 uppercase">Powered by</span>
        <div className="flex justify-center items-center text-gray-500 ">
          <a
            href="https://www.btcstartuplab.com/"
            target="_blank"
            className="flex justify-center items-center">
            <img src="/images/btcsl.webp" alt="Bitcoin Startup Lab logo" className="h-11" />
          </a>
        </div>
      </div> */}
    </section>
  )
}

export default Hero