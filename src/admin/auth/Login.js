import React, { useEffect, useState, useRef } from "react";
import logo from "../../assets/logo/Logo.png";
import bgImage from "../../assets/images/onfcBus.png";

const Login = () => {
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   email.current.focus();
  // }, []);

  // useEffect(() => {
  //   // setErrMsg("");
  // }, [email, pwd]);
  return (
    <section className="bg-black h-screen " >
      <div className="w-11/12 m-auto relative">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          arria-liva="assertive"
        >
          {errMsg}
        </p>

        <div className=" absolute w-full h-full">
          <img src={bgImage} className="w-full rounded-xl h-full" />
        </div>
        <section className=" rounded-xl drop-shadow-3xl relative bg-[#000000d5]">
          <div className="px-6 z-50 h-full text-gray-800">
            <div className="flex xl:justify-center lg:justify-between justify-center items-end flex-wrap h-full g-6">
              <div className="grow-0 shrink-1 md:shrink-0 pt-8 basis-auto xl:w-5/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                <img src={logo} className="w-full" alt="Sample image" />
              </div>
              <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 pb-20 md:w-8/12 mb-12 md:mb-0">
                <form>
                  <div className="mb-6">
                    <input
                      type="email"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="email"
                      placeholder="Email address"
                      required
                      ref={emailRef}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-6">
                    <input
                      type="password"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="password"
                      placeholder="Password"
                      required
                      ref={emailRef}
                      value={pwd}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="off"
                    />
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="exampleCheck2"
                      />
                      <label
                        className="form-check-label inline-block text-gray-800"
                        for="exampleCheck2"
                      >
                        Remember me
                      </label>
                    </div>
                    <a href="#!" className="text-gray-800">
                      Forgot password?
                    </a>
                  </div>

                  <div className="text-center lg:text-left">
                    <button
                      type="button"
                      className="inline-block px-7 py-3 bg-[#F2BA02] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
export default Login;
