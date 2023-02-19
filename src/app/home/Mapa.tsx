"use client"
import Map from "react-map-gl"

export default function Page() {
  return (
    <section className="page">
      <Map
        mapboxAccessToken="pk.eyJ1IjoiYXphdmVhIiwiYSI6IkFmMFBYUUUifQ.eYn6znWt8NzYOa3OrWop8A"
        initialViewState={{
          longitude: -57.5526035,
          latitude: -37.9890942,
          zoom: 14
        }}
        style={{width: "75vh", height: "75vh"}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </section>
  )
}