import React, { useContext } from "react";
import { firebaseAuth } from "./provider/AuthProvider";

export default function Home(props) {
  const { handleSignout } = useContext(firebaseAuth);
  return (
    <div>
      <nav className="bg-white-100 h-20 border-b border-gray-400">
        <div className="container flex mx-auto h-full">
          <div className="flex w-full items-center mx-1">
            <div className="flex">
              <svg
                className="h-8 text-white fill-current bg-black p-2 rounded"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 132.000000 65.000000"
              >
                <path d="M0 33v32h11.3c12.5 0 17.7-1.6 21.5-6.5 3.8-4.8 4.4-9 4-28-.3-16.8-.5-18.2-2.7-21.8C30.3 2.5 26.1 1 12 1H0v32zm23.1-19.1c2.3 1.9 2.4 2.3 2.4 18.5 0 15.7-.1 16.7-2.2 18.8-1.7 1.6-3.5 2.2-7 2.2l-4.8.1-.3-20.8L11 12h4.9c3.3 0 5.6.6 7.2 1.9zM46.1 3.6c-2 2.6-2.1 3.9-2.1 29.6v26.9l2.5 2.4c2.3 2.4 2.9 2.5 16 2.5H76V54.1l-10.2-.3-10.3-.3v-15l6.3-.3 6.2-.3V27H55V12h21V1H62.1c-13.9 0-14 0-16 2.6zM87 15.2c2.1 7.9 5.5 20.8 7.6 28.8 3.2 12.3 4.3 15 7 17.7 1.9 2 4.2 3.3 5.7 3.3 3.1 0 7.1-3.1 8.5-6.7 1-2.6 15.2-55.6 15.2-56.8 0-.3-2.8-.5-6.2-.3l-6.3.3-5.6 21.5c-3.5 13.6-5.8 20.8-6.2 19.5C105.9 40 96 1.9 96 1.4c0-.2-2.9-.4-6.4-.4h-6.4L87 15.2z" />
              </svg>
            </div>

            <div className="flex-1 text-center">
              <form action="/submit">
                <input
                  type="text"
                  placeholder="search"
                  className="bg-gray-300 px-3 py-2 rounded w-4/5 lg:w-1/2 h-8"
                />
              </form>
            </div>

            <div className="flex items-center">
              {/* <a
                // href="/new"
                className="bg-black-400 uppercase border-2 border-black py-1 px-5 font-bold mr-4 text-xs rounded hidden md:block"
              > */}
              <button onClick={handleSignout}>Logout</button>
              {/* </a> */}
              <a href="/connect" className="h-10 w-8 mr-3">
                <svg
                  className="h-full w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 60.064 60.064"
                >
                  <path d="M59.84,7.897c-0.218-0.268-0.556-0.393-0.893-0.353c-0.077,0.004-0.149,0.017-0.224,0.039L0.738,23.354  C0.312,23.47,0.012,23.852,0,24.293c-0.011,0.441,0.269,0.838,0.688,0.976l21.217,6.952l-1.898,15.182  c-0.05,0.4,0.145,0.791,0.494,0.991c0.155,0.089,0.327,0.133,0.498,0.133c0.215,0,0.43-0.069,0.608-0.206l7.765-5.946l6.807,9.725  c0.188,0.269,0.494,0.427,0.819,0.427c0.022,0,0.045-0.001,0.068-0.002c0.35-0.024,0.661-0.229,0.821-0.542l22.063-43  C60.134,8.631,60.09,8.205,59.84,7.897z M52.895,11.241L22.861,30.429L4.484,24.408L52.895,11.241z M22.288,45.281l1.382-11.053  l4.555,6.507L22.288,45.281z M36.868,49.594L24.418,31.808l32.1-20.508L36.868,49.594z" />
                </svg>
              </a>
              <a href="/notifications" className="h-10 w-6 mr-3">
                <svg
                  className="h-full w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 47.834 47.834"
                >
                  <path d="M46.878 41.834H.956L.96 40.83c.022-4.066 2.87-7.55 6.76-8.438V20.697c0-8.93 7.265-16.197 16.196-16.197 8.932 0 16.198 7.266 16.198 16.197v11.695c3.89.89 6.737 4.372 6.76 8.437l.004 1zm-43.836-2h41.75c-.458-2.908-2.804-5.24-5.8-5.61l-.878-.107v-13.42c0-7.828-6.37-14.197-14.198-14.197S9.72 12.87 9.72 20.697v13.42l-.878.106c-2.997.37-5.342 2.702-5.8 5.61z" />
                  <path d="M21.125 5.988h-2V4.792C19.125 2.15 21.275 0 23.917 0s4.79 2.15 4.79 4.792v1.176h-2V4.792c0-1.54-1.25-2.792-2.79-2.792s-2.792 1.253-2.792 2.792v1.196zm2.778 41.846c-3.94 0-7.375-2.8-8.164-6.656l1.954-.4c.6 2.93 3.21 5.057 6.205 5.057 3.06 0 5.677-2.18 6.23-5.18l1.966.36c-.725 3.952-4.17 6.82-8.195 6.82zM8.72 32.23h3.682v2H8.72zm9.447 0h20.947v2H18.167z" />
                </svg>
              </a>
              <div>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--0eFm7wbK--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/165596/93b7e02d-ac3b-4961-96e2-12dbe20ce77d.jpeg"
                  alt="nav-profile"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="relative bg-white overflow-hidden">
        <div class="max-w-screen-xl mx-auto">
          <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start">
                <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div class="flex items-center justify-between w-full md:w-auto">
                    <a href="#" aria-label="Home">
                      <img
                        class="h-8 w-auto sm:h-10"
                        src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                        alt="Logo"
                      />
                    </a>
                    <div class="-mr-2 flex items-center md:hidden">
                      <button
                        type="button"
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        id="main-menu"
                        aria-label="Main menu"
                        aria-haspopup="true"
                      >
                        <svg
                          class="h-6 w-6"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div class="rounded-lg shadow-md">
                <div
                  class="rounded-lg bg-white shadow-xs overflow-hidden"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="main-menu"
                >
                  <div class="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        class="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                        alt=""
                      />
                    </div>
                    <div class="-mr-2">
                      <button
                        type="button"
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        aria-label="Close menu"
                      >
                        <svg
                          class="h-6 w-6"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <main class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div class="sm:text-center lg:text-left">
                <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                  Learn how to play an
                  <br class="xl:hidden" />
                  <span class="text-indigo-600"> instrument today</span>
                </h2>
                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div class="rounded-md shadow">
                    <a
                      href="#"
                      class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </a>
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                    >
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
