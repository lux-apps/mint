import React from 'react'

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          LUX Mint
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl">
          Create Digital Assets
        </p>
        <p className="text-lg text-gray-400 max-w-2xl">
          Mint tokens, NFTs, and other digital assets on the Lux blockchain.
        </p>
      </section>

      {/* Feature Sections */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">No-Code Minting</h2>
          <p className="text-lg text-gray-400">Create and launch tokens without writing a single line of code.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">NFT Collections</h2>
          <p className="text-lg text-gray-400">Launch generative NFT collections with built-in royalties.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Token Standards</h2>
          <p className="text-lg text-gray-400">Full support for LRC-20, LRC-721, and LRC-1155 token standards.</p>
        </div>
      </section>

    </main>
  )
}
