import React from 'react'

const Footer = () => {
  return (
    <section id="Footer" className="antialiased w-full pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center text-sm">
          <p className="text-white">{`© ${new Date().getFullYear()} • Tezuka.xyz`}</p>
        </div>
      </div>
    </section>
  )
}

export default Footer