export default function Contact() {
  return (
    <>
      <>
        <div className="container my-24 px-6 mx-auto">
          <section className="mb-32 text-gray-800 text-center">
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n      .map-container {\n        height: 700px;\n        z-index: -1;\n      }\n    ",
              }}
            />
            <div className="px-6 py-12 md:px-12">
              <div className="container mx-auto xl:px-32">
                <div className="grid lg:grid-cols-2 flex items-center">
                  <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                    <div
                      className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                      style={{
                        background: "hsla(0, 0%, 100%, 0.55)",
                        backdropFilter: "blur(30px)",
                      }}
                    >
                      <h2 className="text-3xl font-bold mb-12">Contact us</h2>
                      <form>
                        <div className="form-group mb-6">
                          <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInput7"
                            placeholder="Name"
                          />
                        </div>
                        <div className="form-group mb-6">
                          <input
                            type="email"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInput8"
                            placeholder="Email address"
                          />
                        </div>
                        <div className="form-group mb-6">
                          <textarea
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlTextarea13"
                            rows={3}
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full px-6 py-2.5 btn"
                        >
                          Send
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="md:mb-12 lg:mb-0">
                    <div className="map-container relative shadow-lg rounded-lg">
                      <iframe
                        src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        className="left-0 top-0 h-full w-full absolute rounded-lg"
                        frameBorder={0}
                        allowFullScreen=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    </>
  );
}
