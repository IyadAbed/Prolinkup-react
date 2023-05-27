import { useState } from "react";
import { Section } from "./cards";

function Howitwork() {
  const defult = () => {
    return (
      <>
        <section className="mb-32 text-gray-800">
          <div className="block rounded-lg shadow-lg bg-white">
            <div className="flex flex-wrap items-center">
              <div className="hidden lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
                <img
                  src="https://mdbootstrap.com/img/new/ecommerce/vertical/088.jpg"
                  alt="Trendy Pants and Shoes"
                  className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                />
              </div>
              <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="text-2xl font-bold mb-4">
                    What's the secret of the great taste?
                  </h2>
                  <p className="uppercase text-red-600 font-bold mb-6 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        fill="currentColor"
                        d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"
                      />
                    </svg>
                    Hot news
                  </p>
                  <p className="text-gray-500 mb-6">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Earum maxime voluptas ipsam aliquam itaque cupiditate
                    provident architecto expedita harum culpa odit, inventore
                    rem molestias laborum repudiandae corporis pariatur quo eius
                    iste! Quaerat, assumenda voluptates! Molestias, recusandae?
                    Maxime fuga omnis ducimus.
                  </p>
                  <p className="text-gray-500">
                    Commodi ut nisi assumenda alias maxime necessitatibus ad rem
                    repellat explicabo, reiciendis illum suscipit iusto?
                    Provident dignissimos similique, reiciendis inventore
                    accusantium unde mollitia, deleniti quae atque error id
                    perspiciatis illum. Laboriosam aperiam ab illo dignissimos
                    obcaecati corporis similique a odio, optio iste quis placeat
                    alias amet rerum sint quos dolor pariatur inventore possimus
                    ad consequuntur fugiat perferendis consectetur laudantium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  const [elementToDisplay, setElementToDisplay] = useState(defult);

  const showA = () => {
    setElementToDisplay(
      <section className="mb-32 text-gray-800">
        <div className="block rounded-lg shadow-lg bg-white">
          <div className="flex flex-wrap items-center">
            <div className="hidden lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
              <img
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/088.jpg"
                alt="Trendy Pants and Shoes"
                className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              />
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="text-2xl font-bold mb-4">
                  What's the secret of the great taste?
                </h2>
                <p className="uppercase text-red-600 font-bold mb-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="w-4 h-4 mr-2"
                  >
                    <path
                      fill="currentColor"
                      d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"
                    />
                  </svg>
                  Hot news
                </p>
                <p className="text-gray-500 mb-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Earum maxime voluptas ipsam aliquam itaque cupiditate
                  provident architecto expedita harum culpa odit, inventore rem
                  molestias laborum repudiandae corporis pariatur quo eius iste!
                  Quaerat, assumenda voluptates! Molestias, recusandae? Maxime
                  fuga omnis ducimus.
                </p>
                <p className="text-gray-500">
                  Commodi ut nisi assumenda alias maxime necessitatibus ad rem
                  repellat explicabo, reiciendis illum suscipit iusto? Provident
                  dignissimos similique, reiciendis inventore accusantium unde
                  mollitia, deleniti quae atque error id perspiciatis illum.
                  Laboriosam aperiam ab illo dignissimos obcaecati corporis
                  similique a odio, optio iste quis placeat alias amet rerum
                  sint quos dolor pariatur inventore possimus ad consequuntur
                  fugiat perferendis consectetur laudantium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const showB = () => {
    setElementToDisplay(
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center pb-16 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              We didn't reinvent the wheel
            </h2>
            <p className="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    );
  };
  const showC = () => {
    setElementToDisplay(<Section />);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center py-4">
      <h2 className="text-center text-5xl md:text-6xl xl:text-6xl font-bold tracking-tight mb-3 text-blue-600">
            Only 3 steps <br />
            <span className=' text-gray-800'>Away after Registeration</span>
      </h2>
      <div className=" my-7 inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          onClick={showA}
        >
          First
        </button>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          onClick={showB}
        >
          Second
        </button>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          onClick={showC}
        >
          Third
        </button>
      </div>
      </div>
      <div>{elementToDisplay}</div>
    </>
  );
}

export default Howitwork;
