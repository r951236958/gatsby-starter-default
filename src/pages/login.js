import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Login = () => {
  return (
    <Layout>
      <SEO title="Login" />

      <div className="flex content-center items-center justify-center h-full">
        <div className="flex-wrap w-full lg:w-1/2 px-4 pt-32">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-gray-600 text-sm font-bold">
                  Sign in with
                </h6>
              </div>
              <div className="btn-wrapper text-center">
                <button
                  className="bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                  type="button"
                  style={{ transition: "all 0.15s ease 0s" }}
                >
                  <svg className="w-5 mr-1" viewBox="0 0 36 36">
                    <defs />
                    <g
                      id="Symbols"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g id="UI/icons/dark/github" fill="#182359">
                        <path
                          d="M17.9985267,2 C9.16436969,2 2,9.16338746 2,18.0004911 C2,25.0695847 6.58405721,31.0660855 12.9420179,33.1818042 C13.7425335,33.3291384 14.0342552,32.8350778 14.0342552,32.4107554 C14.0342552,32.0306332 14.020504,31.0248319 14.0126462,29.6899843 C9.56217195,30.6564965 8.62316216,27.5447988 8.62316216,27.5447988 C7.89533135,25.696246 6.84631204,25.2041499 6.84631204,25.2041499 C5.3935971,24.2120998 6.95632156,24.2317444 6.95632156,24.2317444 C8.56226404,24.3447006 9.40697996,25.8809049 9.40697996,25.8809049 C10.834157,28.3256699 13.1522146,27.6194481 14.063722,27.2098591 C14.2090917,26.1765554 14.6226097,25.4713159 15.0793456,25.0715492 C11.5266276,24.6678535 7.7912152,23.294699 7.7912152,17.163633 C7.7912152,15.417232 8.41492986,13.9880905 9.43841125,12.8703152 C9.27339697,12.4656374 8.72433162,10.8380859 9.5955677,8.63593112 C9.5955677,8.63593112 10.9382731,8.20571534 13.9949661,10.2762516 C15.27088,9.9206851 16.6401056,9.7438841 18.0004911,9.7370085 C19.3598944,9.7438841 20.7281378,9.9206851 22.0060161,10.2762516 C25.0607447,8.20571534 26.4014856,8.63593112 26.4014856,8.63593112 C27.2746861,10.8380859 26.7256208,12.4656374 26.5615888,12.8703152 C27.5870346,13.9880905 28.2058381,15.417232 28.2058381,17.163633 C28.2058381,23.3104147 24.4645324,24.6629424 20.9010099,25.0587802 C21.4746309,25.5528408 21.9863716,26.5291752 21.9863716,28.0211793 C21.9863716,30.1604715 21.966727,31.8862457 21.966727,32.4107554 C21.966727,32.8390067 22.255502,33.3369962 23.0668222,33.180822 C29.4198717,31.0601921 34,25.0676202 34,18.0004911 C34,9.16338746 26.8356303,2 17.9985267,2"
                          id="icons/icon-github"
                        />
                      </g>
                    </g>
                  </svg>
                  Github
                </button>
                <button
                  className="bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                  type="button"
                  style={{ transition: "all 0.15s ease 0s" }}
                >
                  <svg className="w-5 mr-1" viewBox="0 0 36 36">
                    <path
                      d="M34.437 18.602c0-1.15-.106-2.258-.301-3.32H18.549v6.28h8.907c-.384 2.029-1.55 3.748-3.302 4.9v4.072h5.348c3.13-2.826 4.935-6.988 4.935-11.932z"
                      fill="#4285F4"
                    />
                    <path
                      d="M18.55 34.467c4.468 0 8.214-1.453 10.952-3.933l-5.348-4.073c-1.482.974-3.378 1.55-5.605 1.55-4.31 0-7.958-2.855-9.26-6.693H3.76v4.206c2.723 5.306 8.32 8.943 14.79 8.943z"
                      fill="#34A853"
                    />
                    <path
                      d="M9.29 21.318a9.59 9.59 0 01-.52-3.084c0-1.07.188-2.11.52-3.085v-4.206H3.76a15.981 15.981 0 000 14.581l5.53-4.206z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M18.55 8.456c2.43 0 4.61.82 6.326 2.428l4.746-4.656C26.756 3.609 23.01 2 18.55 2 12.08 2 6.483 5.638 3.76 10.943l5.53 4.206c1.3-3.837 4.95-6.693 9.26-6.693z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </button>
              </div>
              <hr className="mt-6 border-b-1 border-gray-400" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="text-gray-500 text-center mb-3 font-bold">
                <small>Or sign in with credentials</small>
              </div>
              <form>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Email"
                    style={{ transition: "all 0.15s ease 0s" }}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Password"
                    style={{ transition: "all 0.15s ease 0s" }}
                  />
                </div>
                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      className="form-checkbox text-gray-800 ml-1 w-5 h-5"
                      style={{ transition: "all 0.15s ease 0s" }}
                    />
                    <span className="ml-2 text-sm font-semibold text-gray-700">
                      Remember me
                    </span>
                  </label>
                </div>
                <div className="text-center mt-6">
                  <button
                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                    type="button"
                    style={{ transition: "all 0.15s ease 0s" }}
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-wrap mt-6">
            <div className="w-1/2">
              <a href="#pablo" className="text-gray-300">
                <small>Forgot password?</small>
              </a>
            </div>
            <div className="w-1/2 text-right">
              <a href="#pablo" className="text-gray-300">
                <small>Create new account</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login
