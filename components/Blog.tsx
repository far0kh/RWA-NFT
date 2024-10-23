import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

const Blog = () => {
  const posts = [
    {
      title: "RWA (Real-World Asset) Boom: Investing in Digital RWA through NFTs",
      desc: "The rise of RWA tokenization has become a prominent trend in the blockchain industry. The market size of RWAs could reach $10 trillion by 2030.",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*MwLvrL8W96B-2wgk7NOrvA.png",
      link: "https://medium.com/@Ommniverse_Ai/rwa-real-world-asset-boom-investing-in-digital-rwa-through-nfts-23cf2830e2f0",
    },
    {
      title: "NFTs for Real-World Assets",
      desc: "Today, NFTs are mostly used for digital art, collectibles, and in-game assets. The benefits are clear: By attaching visual metadata such as an image (which can be either static or dynamic) to an NFT, users can own a digital art piece or collectible in a way that wasn’t possible before blockchain technology.",
      image: "https://cdn.prod.website-files.com/5f75fe1dce99248be5a892db/66d1a563e3f0468983d94f27_66952445d2461a9b8b5a24ae_real-world-collectibles-tokenized-scaled.jpeg",
      link: "https://chain.link/education-hub/real-world-asset-nft",
    },
    {
      title: "Redefining the Future of Finance with RWA NFTs, Gamification, and Sustainable Investments",
      desc: "Combining Real-World Asset (RWA) NFTs with gamification will help Electrowizy transform the investing scene in a world when finance and technology are ever more entwined.",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*gki12O2rMM6PwXKr_xz2oQ.jpeg",
      link: "https://chain.link/education-hub/real-world-asset-nft",
    }
  ]

  return (
    <section className="antialiased w-full" id="Blog">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white mt-14 md:mt-0">
            New Blogs
          </h2>
          <p className="mt-1 text-lg font-normal tracking-tight text-slate-500">
            Stay in the know with insights from industry experts.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {posts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              className="group"
            >
              <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                <img
                  className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="mt-7">
                <h3
                  className="text-xl font-bold text-gray-100 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-base mt-3 text-gray-400">
                  {item.desc}
                </p>
                <p className="mt-5 inline-flex items-center gap-x-1 text-green-500 decoration-2 group-hover:underline font-medium">
                  Read more
                  <FaAngleRight />
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog