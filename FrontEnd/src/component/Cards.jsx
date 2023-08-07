export function Cards() {
  return (
    <>
      <div className=" w-11/12 h-1/3 place-items-center bg-gray-400 antialiased text-gray-900">
        <div>
          <img
            src="https://source.unsplash.com/random/350x350"
            alt=" random imgee"
            className="w-full object-cover object-center rounded-lg shadow-md"
          />

          <div className="relative px-4 -mt-16  ">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-baseline">
                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  New
                </span>
                <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                  2 baths &bull; 3 rooms
                </div>
              </div>

              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                A random Title
              </h4>

              <div className="mt-1">
                $1800
                <span className="text-gray-600 text-sm"> /wk</span>
              </div>
              <div className="mt-4">
                <span className="text-teal-600 text-md font-semibold">
                  4/5 ratings{" "}
                </span>
                <span className="text-sm text-gray-600">
                  (based on 234 ratings)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Section() {
  return (
    <>

  <section className=" mb-16 text-gray-800">
    <div className="flex flex-wrap mb-12">
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
          style={{ backgroundPosition: "50%" }}
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          <img
            src="https://mdbootstrap.com/img/new/standard/city/028.jpg"
            className="w-full"
            alt="Louvre"
          />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
            />
          </a>
        </div>
      </div>
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
        <h3 className="text-2xl font-bold mb-4">That's the news!</h3>
        <div className="text-red-600 text-sm mb-4 flex items-center font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            className="w-4 h-4 mr-2"
          >
            <path
              fill="currentColor"
              d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm160 215.5v6.93c0 5.87-3.32 11.24-8.57 13.86l-15.39 7.7a15.485 15.485 0 0 1-15.53-.97l-18.21-12.14a15.52 15.52 0 0 0-13.5-1.81l-2.65.88c-9.7 3.23-13.66 14.79-7.99 23.3l13.24 19.86c2.87 4.31 7.71 6.9 12.89 6.9h8.21c8.56 0 15.5 6.94 15.5 15.5v11.34c0 3.35-1.09 6.62-3.1 9.3l-18.74 24.98c-1.42 1.9-2.39 4.1-2.83 6.43l-4.3 22.83c-.62 3.29-2.29 6.29-4.76 8.56a159.608 159.608 0 0 0-25 29.16l-13.03 19.55a27.756 27.756 0 0 1-23.09 12.36c-10.51 0-20.12-5.94-24.82-15.34a78.902 78.902 0 0 1-8.33-35.29V367.5c0-8.56-6.94-15.5-15.5-15.5h-25.88c-14.49 0-28.38-5.76-38.63-16a54.659 54.659 0 0 1-16-38.63v-14.06c0-17.19 8.1-33.38 21.85-43.7l27.58-20.69a54.663 54.663 0 0 1 32.78-10.93h.89c8.48 0 16.85 1.97 24.43 5.77l14.72 7.36c3.68 1.84 7.93 2.14 11.83.84l47.31-15.77c6.33-2.11 10.6-8.03 10.6-14.7 0-8.56-6.94-15.5-15.5-15.5h-10.09c-4.11 0-8.05-1.63-10.96-4.54l-6.92-6.92a15.493 15.493 0 0 0-10.96-4.54H199.5c-8.56 0-15.5-6.94-15.5-15.5v-4.4c0-7.11 4.84-13.31 11.74-15.04l14.45-3.61c3.74-.94 7-3.23 9.14-6.44l8.08-12.11c2.87-4.31 7.71-6.9 12.89-6.9h24.21c8.56 0 15.5-6.94 15.5-15.5v-21.7C359.23 71.63 422.86 131.02 441.93 208H423.5c-8.56 0-15.5 6.94-15.5 15.5z"
            />
          </svg>
          Travels
        </div>
        <p className="text-gray-500 mb-6">
          Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
          vulputate. Ut vulputate est non quam dignissim elementum. Donec a
          ullamcorper diam.
        </p>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae nulla
          saepe rerum aspernatur odio amet perferendis tempora mollitia? Ratione
          unde magni omnis quaerat blanditiis cumque dolore placeat rem
          dignissimos?
        </p>
      </div>
    </div>
    <div className="flex flex-wrap lg:flex-row-reverse mb-12">
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
          style={{ backgroundPosition: "50%" }}
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          <img
            src="https://mdbootstrap.com/img/new/standard/city/033.jpg"
            className="w-full"
            alt="Louvre"
          />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
            />
          </a>
        </div>
      </div>
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
        <h3 className="text-2xl font-bold mb-4">Exhibition in Paris</h3>
        <div className="text-blue-600 text-sm mb-4 flex items-center font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-4 h-4 mr-2"
          >
            <path
              fill="currentColor"
              d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
            />
          </svg>
          Art
        </div>
        <p className="text-gray-500">
          Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta dui,
          sit amet rutrum enim massa in ante. Curabitur in justo at lorem
          laoreet ultricies. Nunc ligula felis, sagittis eget nisi vitae,
          sodales vestibulum purus. Vestibulum nibh ipsum, rhoncus vel sagittis
          nec, placerat vel justo. Duis faucibus sapien eget tortor finibus, a
          eleifend lectus dictum. Cras tempor convallis magna id rhoncus.
          Suspendisse potenti. Nam mattis faucibus imperdiet. Proin tempor lorem
          at neque tempus aliquet. Phasellus at ex volutpat, varius arcu id,
          aliquam lectus. Vestibulum mattis felis quis ex pharetra luctus. Etiam
          luctus sagittis massa, sed iaculis est vehicula ut.
        </p>
      </div>
    </div>
    <div className="flex flex-wrap">
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
          style={{ backgroundPosition: "50%" }}
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          <img
            src="https://mdbootstrap.com/img/new/standard/city/079.jpg"
            className="w-full"
            alt="Louvre"
          />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
            />
          </a>
        </div>
      </div>
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
        <h3 className="text-2xl font-bold mb-4">Stock market boom</h3>
        <div className="text-yellow-600 text-sm mb-4 flex items-center font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className="w-4 h-4 mr-2"
          >
            <path
              fill="currentColor"
              d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"
            />
          </svg>
          Business
        </div>
        <p className="text-gray-500 mb-6 text-sm">
          Published <u>10.01.2022</u> by
          <a href="#!">Joe Svan</a>
        </p>
        <p className="text-gray-500">
          Sed sollicitudin purus sed nulla dignissim ullamcorper. Aenean
          tincidunt vulputate libero, nec imperdiet sapien pulvinar id. Nullam
          scelerisque odio vel lacus faucibus, tincidunt feugiat augue ornare.
          Proin ac dui vel lectus eleifend vestibulum et lobortis risus. Nullam
          in commodo sapien. Curabitur ut erat congue sem finibus eleifend
          egestas eu metus. Sed ut dolor id magna rutrum ultrices ut eget
          libero. Duis vel porttitor odio. Ut pulvinar sed turpis ornare
          tincidunt. Donec luctus, mi euismod dignissim malesuada, lacus lorem
          commodo leo, tristique blandit ante mi id metus. Integer et vehicula
          leo, vitae interdum lectus. Praesent nulla purus, commodo at euismod
          nec, blandit ultrices erat. Aliquam eros ipsum, interdum et mattis
          vitae, faucibus vitae justo. Nulla condimentum hendrerit leo, in
          feugiat ipsum condimentum ac. Maecenas sed blandit dolor.
        </p>
      </div>
    </div>
  </section>


    </>
  );
}



// export function Card2() {
//   return (
//     <>
//       <>
//   {/* Container for demo purpose */}
//   <div className="container my-24 px-6 mx-auto">
//     {/* Section: Design Block */}
//     <section className="mb-32 text-gray-800 text-center">
//       <h2 className="text-3xl font-bold mb-12 pb-4 text-center">
//         Projects we are proud of
//       </h2>
//       <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
//         <div className="mb-6 lg:mb-0">
//           <div className="relative block bg-white rounded-lg shadow-lg">
//             <div className="flex">
//               <div
//                 className="relative overflow-hidden bg-no-repeat bg-cover  shadow-lg rounded-lg mx-4 -mt-4"
//                 data-mdb-ripple="true"
//                 data-mdb-ripple-color="light"
//               >
//                 <img
//                   src="https://mdbcdn.b-cdn.net/img/new/standard/city/002.webp"
//                   className="w-full"
//                 />
//                 <a href="#!">
//                   <div
//                     className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
//                     style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
//                   />
//                 </a>
//               </div>
//             </div>
//             <div className="p-6">
//               <h5 className="font-bold text-lg mb-3">White city</h5>
//               <p className="mb-4 pb-2">
//                 Ut pretium ultricies dignissim. Sed sit amet mi eget urna
//                 placerat vulputate. Ut vulputate est non quam dignissim
//                 elementum. Donec a ullamcorper diam.
//               </p>
//               <a
//                 href="#!"
//                 data-mdb-ripple="true"
//                 data-mdb-ripple-color="light"
//                 className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
//               >
//                 Read more
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="mb-6 lg:mb-0">
//           <div className="relative block bg-white rounded-lg shadow-lg">
//             <div className="flex">
//               <div
//                 className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
//                 data-mdb-ripple="true"
//                 data-mdb-ripple-color="light"
//               >
//                 <img
//                   src="https://mdbcdn.b-cdn.net/img/new/standard/people/066.webp"
//                   className="w-full"
//                 />
//                 <a href="#!">
//                   <div
//                     className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
//                     style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
//                   />
//                 </a>
//               </div>
//             </div>
//             <div className="p-6">
//               <h5 className="font-bold text-lg mb-3">A lonely bench</h5>
//               <p className="mb-4 pb-2">
//                 Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
//                 orci, nec ornare metus semper sed. Integer volutpat ornare erat
//                 sit amet rutrum.
//               </p>
//               <a
//                 href="#!"
//                 data-mdb-ripple="true"
//                 data-mdb-ripple-color="light"
//                 className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
//               >
//                 Read more
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="mb-0">
//           <div className="relative block bg-white rounded-lg shadow-lg">
//             <div className="flex">
//               <div
//                 className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
//                 data-mdb-ripple="true"
//                 data-mdb-ripple-color="light"
//               >
//                 <img
//                   src="https://mdbcdn.b-cdn.net/img/new/standard/people/191.webp"
//                   className="w-full"
//                 />
//                 <a href="#!">
//                   <div
//                     className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
//                     style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
//                   />
//                 </a>
//               </div>
//             </div>
//             <div className="p-6">
//               <h5 className="font-bold text-lg mb-3">Happy snow</h5>
//               <p className="mb-4 pb-2">
//                 Curabitur tristique, mi a mollis sagittis, metus felis mattis
//                 arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
//                 massa volutpat feugiat. Donec.
//               </p>
//               <a
//                 href="#!"
//                 data-mdb-ripple="true"
//                 data-mdb-ripple-color="light"
//                 className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
//               >
//                 Read more
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     {/* Section: Design Block */}
//   </div>
//   {/* Container for demo purpose */}
// </>

//     </>
//   )
// }



// export function Card2 (){
//   return(
//     <>
//             <div className="mb-6 lg:mb-0 my-3">
//           <div className="relative block bg-white rounded-lg shadow-lg">
//             <div className="flex">
//               <div
//                 className="relative overflow-hidden bg-no-repeat bg-cover  shadow-lg rounded-lg mx-4 -mt-4"
//                 data-mdb-ripple="true"
//                 data-mdb-ripple-color="light"
//               >
//                 <img
//                   src="https://mdbcdn.b-cdn.net/img/new/standard/city/002.webp"
//                   className="w-full"
//                 />
//                 <a href="#!">
//                   <div
//                     className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
//                     style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
//                   />
//                 </a>
//               </div>
//             </div>
//             <div className="p-6">
//               <h5 className="font-bold text-lg mb-3">White city</h5>
//               <p className="mb-4 pb-2">
//                 Ut pretium ultricies dignissim. Sed sit amet mi eget urna
//                 placerat vulputate. Ut vulputate est non quam dignissim
//                 elementum. Donec a ullamcorper diam.
//               </p>
//               <a
//                 href="#!"
//                 data-mdb-ripple="true"
//                 data-mdb-ripple-color="light"
//                 className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
//               >
//                 Read more
//               </a>
//             </div>
//           </div>
//         </div>
//     </>
//   )
// }


// export function Card3 () {
//   return (
//     <>
//     <section className="mb-32 text-gray-800 text-center">
//   <h2 className="text-3xl font-bold mb-12 pb-4 text-center">Testimonials</h2>
//   <div className="grid md:grid-cols-3 gap-6 xl:gap-x-12">
//     <div className="mb-6 lg:mb-0">
//       <div className="relative block bg-white rounded-lg shadow-lg">
//         <div className="flex">
//           <div
//             className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4 w-full"
//             data-mdb-ripple="true"
//             data-mdb-ripple-color="light"
//           >
//             <img
//               src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
//               className="w-full"
//             />
//             <a href="#!">
//               <div
//                 className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
//                 style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
//               />
//             </a>
//           </div>
//         </div>
//         <div className="p-6">
//           <h5 className="text-lg font-bold mb-2">John Doe</h5>
//           <h6 className="font-medium text-blue-600 mb-4">Web Developer</h6>
//           <ul className="flex justify-center mb-6">
//             <li>
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 data-icon="star"
//                 className="w-4 text-yellow-500"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 576 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
//                 ></path>
//               </svg>
//             </li>
//             <li>
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 data-icon="star"
//                 className="w-4 text-yellow-500"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 576 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
//                 ></path>
//               </svg>
//             </li>
//             <li>
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 data-icon="star"
//                 className="w-4 text-yellow-500"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 576 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
//                 ></path>
//               </svg>
//             </li>
//             <li>
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 data-icon="star"
//                 className="w-4 text-yellow-500"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 576 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
//                 ></path>
//               </svg>
//             </li>
//             <li>
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 data-icon="star-half-alt"
//                 className="w-4 text-yellow-500"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 536 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"
//                 ></path>
//               </svg>
//             </li>
//           </ul>
//           <p>
//             Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
//             vulputate. Ut vulputate est non quam dignissim elementum. Donec a
//             ullamcorper diam.
//           </p>
//         </div>
//       </div>
//     </div>
//     <div className="mb-6 lg:mb-0">
//       <div className="relative block bg-white rounded-lg shadow-lg">
//         <div className="flex">
//           <div
//             className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4 w-full"
//             data-mdb-ripple="true"
//             data-mdb-ripple-color="light"
//           >
//             <img
//               src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
//               className="w-full"
//             />
//             <a href="#!">
//               <div
//                 className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
//                 style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
//               />
//             </a>
//           </div>
//         </div>
//         <div className="p-6">
//           <h5 className="text-lg font-bold mb-2">Halley Frank</h5>
//           <h6 className="font-medium text-blue-600 mb-4">
//             Marketing Specialist
//           </h6>
//           <ul className="flex justify-center mb-6">
//             <li>
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 data-icon="star"
//                 className="w-4 text-yellow-500"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 576 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
//                 ></path>
//               </svg>
//             </li>
//             <li>
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 data-icon="star"
//                 className="w-4 text-yellow-500"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 576 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
//                 ></path>
//               </svg>
//             </li>
//             <li>
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 data-icon="star"
//                 className="w-4 text-yellow-500"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 576 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
//                 ></path>
//               </svg>
//             </li>
//             <li>
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 data-icon="star"
//                 className="w-4 text-yellow-500"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 576 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
//                 ></path>
//               </svg>
//             </li>
//             <li>
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 data-icon="star"
//                 className="w-4 text-yellow-500"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 576 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
//                 ></path>
//               </svg>
//             </li>
//           </ul>
//           <p>
//             At vero eos et accusamus et iusto odio dignissimos ducimus qui
//             blanditiis praesentium accusamus voluptatum deleniti atque corrupti.
//           </p>
//         </div>
//       </div>
//     </div>
//     <div className="mb-0">
//       <div className="relative block bg-white rounded-lg shadow-lg">
//         <div className="flex">
//           <div
//             className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4 w-full"
//             data-mdb-ripple="true"
//             data-mdb-ripple-color="light"
//           >
//             <img
//               src="https://mdbcdn.b-cdn.net/img/new/avatars/18.jpg"
//               className="w-full"
//             />
//             <a href="#!">
//               <div
//                 className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
//                 style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
//               />
//             </a>
//           </div>
//         </div>
//         <div className="p-6">
//           <h5 className="text-lg font-bold mb-2">Lisa Trey</h5>
//           <h6 className="font-medium text-blue-600 mb-4">Public Relations</h6>
//           <ul className="flex justify-center mb-6">
//             <li>
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 data-icon="star"
//                 className="w-4 text-yellow-500"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 576 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
//                 ></path>
//               </svg>
//             </li>
//             <li>
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 data-icon="star"
//                 className="w-4 text-yellow-500"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 576 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
//                 ></path>
//               </svg>
//             </li>
//             <li>
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 data-icon="star"
//                 className="w-4 text-yellow-500"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 576 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
//                 ></path>
//               </svg>
//             </li>
//             <li>
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 data-icon="star"
//                 className="w-4 text-yellow-500"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 576 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
//                 ></path>
//               </svg>
//             </li>
//             <li>
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="far"
//                 data-icon="star"
//                 className="w-4 text-yellow-500"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 576 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
//                 ></path>
//               </svg>
//             </li>
//           </ul>
//           <p>
//             Enim ad minima veniam, quis nostrum exercitationem ullam corporis
//             suscipit laboriosam, nisi ut aliquid commodi quis nostrum minima.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//     </>
//   )
// }



// export function Card4 () {
//   return(
//     <>
//     <div className="mb-6 lg:mb-0">
//       <div className="relative block bg-white rounded-lg shadow-lg">
//         <div className="flex">
//           <div
//             className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4 w-full"
//             data-mdb-ripple="true"
//             data-mdb-ripple-color="light"
//           >
//             <img
//               src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
//               className="w-full"
//             />
//             <a href="#!">
//               <div
//                 className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
//                 style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
//               />
//             </a>
//           </div>
//         </div>
//         <div className="p-6">
//           <h5 className="text-lg font-bold mb-2">John Doe</h5>
//           <h6 className="font-medium text-blue-600 mb-4">Web Developer</h6>
//           <ul className="flex justify-center mb-6">
//             <li>
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 data-icon="star"
//                 className="w-4 text-yellow-500"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 576 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
//                 ></path>
//               </svg>
//             </li>
//             <li>
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 data-icon="star"
//                 className="w-4 text-yellow-500"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 576 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
//                 ></path>
//               </svg>
//             </li>
//             <li>
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 data-icon="star"
//                 className="w-4 text-yellow-500"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 576 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
//                 ></path>
//               </svg>
//             </li>
//             <li>
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 data-icon="star"
//                 className="w-4 text-yellow-500"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 576 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
//                 ></path>
//               </svg>
//             </li>
//             <li>
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 data-icon="star-half-alt"
//                 className="w-4 text-yellow-500"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 536 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"
//                 ></path>
//               </svg>
//             </li>
//           </ul>
//           <p>
//             Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
//             vulputate. Ut vulputate est non quam dignissim elementum. Donec a
//             ullamcorper diam.
//           </p>
//         </div>
//       </div>
//     </div>
//     </>
//   )
// }




// export function CardInfo () {
//   return (
//     <>
//       <section className="mb-32 mt-10 text-gray-800 text-center md:text-left">
//   <div className="block rounded-lg shadow-lg bg-white">
//     <div className="flex flex-wrap items-center">
//       <div className="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
//         <img
//           src="https://mdbootstrap.com/img/new/ecommerce/vertical/027.jpg"
//           alt="Trendy Pants and Shoes"
//           className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
//         />
//       </div>
//       <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
//         <div className="px-6 py-12 md:px-12">
//           <h2 className="text-3xl font-bold mb-2 text-blue-600">Anna Doe</h2>
//           <p className="font-semibold mb-4">Graphic designer</p>
//           <p className="text-gray-500 mb-6">
//             Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque
//             iaculis malesuada. Aenean gravida magna orci, non efficitur est
//             porta id. Donec magna diam.
//           </p>
//           <p className="text-gray-500 mb-6">
//             Ad, at blanditiis quaerat laborum officia incidunt cupiditate
//             dignissimos voluptates eius aliquid minus praesentium! Perferendis
//             et totam ipsum ex aut earum libero accusamus voluptas quod numquam
//             saepe, consequuntur nihil quia tenetur consequatur. Quis, explicabo
//             deserunt quasi assumenda ea maiores nulla, et dolor saepe
//             praesentium natus error reiciendis voluptas iste. Esse, laudantium
//             ipsum animi, quos voluptatibus atque vero repellat sit eligendi
//             autem maiores quasi cum aperiam. Aperiam rerum culpa accusantium,
//             ducimus deserunt aliquid alias vitae quasi corporis placeat vel
//             maiores explicabo commodi!
//           </p>
//           <ul className="flex justify-center md:justify-start">
//             <li>
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 data-icon="star"
//                 className="w-4 text-blue-600"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 576 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
//                 ></path>
//               </svg>
//             </li>
//             <li>
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 data-icon="star"
//                 className="w-4 text-blue-600"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 576 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
//                 ></path>
//               </svg>
//             </li>
//             <li>
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 data-icon="star"
//                 className="w-4 text-blue-600"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 576 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
//                 ></path>
//               </svg>
//             </li>
//             <li>
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 data-icon="star"
//                 className="w-4 text-blue-600"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 576 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
//                 ></path>
//               </svg>
//             </li>
//             <li>
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 data-icon="star"
//                 className="w-4 text-blue-600"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 576 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
//                 ></path>
//               </svg>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//     </>
//   )
// }