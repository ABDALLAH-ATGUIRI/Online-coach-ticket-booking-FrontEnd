import React, { useEffect, useState, useRef, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import logo from "../../assets/logo/Logo.png";
import axios from "../../api/axios";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // email.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        process.LOGIN_URL,
        JSON.stringify({ email, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true
        }
      );
      console.log(JSON.stringify(response?.data));

      const accessToken = response?.data?.roles;
      const roles = response?.data?.roles;

      setAuth({ email, pwd, roles, accessToken });
      setEmail("");
      setPwd("");
      setSuccess(true);
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (errMsg.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };
  return (
    <>
      <section className="md:min-h-screen  w-full flex justify-center items-center bg-[#212121]">
        <div className="px-6 w-full text-gray-800">
          <div className="flex xl:justify-center min-h-11/12 lg:justify-between justify-center items-center shadow-2xl p-8 flex-wrap g-6">
            <div className="grow-0 shrink-1 w-full md:shrink-0 basis-auto xl:w-2/6 lg:w-6/12 sm:w-4/6 mb-12 md:mb-0">
              <img src={logo} className="w-full h-full" alt="Sample image" />
            </div>
            <div className="xl:ml-20 xl:w-4/12  rounded-md p-8  lg:w-4/12 sm:w-8/12 w-full md:mb-0">
              <form className="flex flex-col">
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  {/* <p className="text-center font-semibold mx-4 mb-0">Or</p> */}
                </div>

                <div className="mb-6">
                  <input
                    type="email"
                    className="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
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

                <div className="text-center self-center lg:text-left">
                  <button
                    type="button"
                    className="inline-block  px-16 py-3 bg-[#FE5008] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-[#c8440c] hover:shadow-lg focus:bg-[#F2BA02] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#F2BA02] active:shadow-lg transition duration-150 ease-in-out"
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
