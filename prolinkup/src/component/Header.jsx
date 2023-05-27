import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <>
  {/* Container for demo purpose */}
  <div className="w-full mx-auto">
    {/* Section: Design Block */}
    <section className="mb-16 text-gray-800 background-radial-gradient">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        .background-radial-gradient {\n          background-color: hsl(218, 41%, 15%);\n          background-image: radial-gradient(650px circle at 0% 0%,\n              hsl(218, 41%, 35%) 15%,\n              hsl(218, 41%, 30%) 35%,\n              hsl(218, 41%, 20%) 75%,\n              hsl(218, 41%, 19%) 80%,\n              transparent 100%),\n            radial-gradient(1250px circle at 100% 100%,\n              hsl(218, 41%, 45%) 15%,\n              hsl(218, 41%, 30%) 35%,\n              hsl(218, 41%, 20%) 75%,\n              hsl(218, 41%, 19%) 80%,\n              transparent 100%);\n        }\n      "
        }}
      />
      <div className="px-6 py-12 md:px-12 text-center lg:text-left">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="mt-12 lg:mt-0">
              <h1
                className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-8"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                Now are you <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  ready for it?
                </span>
              </h1>
              <button className='btn my-3'><Link>Start your dream</Link></button>
              <p className="text-lg" style={{ color: "hsl(218, 81%, 95%)" }}>
              Starting anew: a powerful drama of renewal, where the past fades, and the future awaits. In two lines, we redefine our story, finding strength in letting go, and embracing the blank canvas, where dreams unfold and limitless possibilities ignite.
              </p>
            </div>
            <div className="mb-12 lg:mb-0">
              <div
                className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&origin=https%3A%2F%2Fmdbootstrap.com"
                  allowFullScreen=""
                  data-gtm-yt-inspected-2340190_699="true"
                  id={240632615}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Section: Design Block */}
  </div>
  {/* Container for demo purpose */}
</>

    </>
  )
}

export default Header