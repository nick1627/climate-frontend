'use client'

import dynamic from 'next/dynamic'

// Lazy-load the Map on the client side
const Map = dynamic(() => import('./components/Map'), { ssr: false })

export default function HomePage() {
  return (
    <main>
      <h1>Climate Visualisation</h1>
      <Map />
    </main>
  )
}
