import React, { useContext } from "react";
import { firebaseAuth } from "./provider/AuthProvider";

export default function Login() {
  const { handleSignin, inputs, setInputs, errors } = useContext(firebaseAuth);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    handleSignin();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(inputs);
    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <body class="bg-white font-family-karla h-screen">
        <div class="w-full flex flex-wrap">
          <div class="w-full md:w-1/2 flex flex-col">
            <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
              <a href="/" class="bg-black text-white font-bold text-xl p-4">
                BGS
              </a>
            </div>

            <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
              <p class="text-center text-3xl">Welcome.</p>

              <form class="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
                <div class="flex flex-col pt-4">
                  <label for="email" class="text-lg">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={inputs.email}
                    onChange={handleChange}
                    placeholder=""
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  ></input>
                </div>

                <div class="flex flex-col pt-4">
                  <label for="password" class="text-lg">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={inputs.password}
                    onChange={handleChange}
                    placeholder=""
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <input
                  type="submit"
                  value="Log In"
                  class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
                />
                {errors.length > 0
                  ? errors.map((error) => (
                      <p style={{ color: "red" }}>{error}</p>
                    ))
                  : null}
              </form>
              <div class="text-center pt-12 pb-12">
                <p>
                  Don't have an account?{" "}
                  <a href="/register" class="underline font-semibold">
                    Register here.
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="w-1/2 shadow-2xl">
            <img
              class="object-cover w-full h-screen hidden md:block"
              src="https://source.unsplash.com/DSjILstcB78"
              alt="logo"
            />
          </div>
        </div>
      </body>
    </div>
  );
}
