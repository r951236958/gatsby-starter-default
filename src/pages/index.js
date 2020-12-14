import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
      </div>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-gray-500">You have a new message!</p>
      </div>
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link
      className="py-2 px-4 text-blue-400 hover:text-blue-500 hover:text-opacity-75 hover:underline"
      to="/page-2/"
    >
      Go to page 2
    </Link>{" "}
    <div className="inline-flex item-center space-x-4 my-4">
      <Link
        className="h-10 py-2 px-4 text-teal-400 border-2 border-teal-400 rounded-lg hover:bg-gray-100 hover:bg-opacity-10 hover:text-teal-300 hover:border-teal-500 "
        to="/page-3/"
      >
        Page3
      </Link>{" "}
      <Link
        className="h-10 py-2 px-4 text-teal-400 border border-teal-400 rounded-lg hover:bg-gray-100 hover:bg-opacity-10 hover:text-teal-300 hover:border-teal-500"
        to="/using-typescript/"
      >
        <i className="material-icons">menu</i>
        Go to "Using TypeScript"
      </Link>
      <button className="h-10 px-4 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:ring hover:bg-gray-900 border-2 border-gray-700 hover:text-gray-300">
        Button
      </button>
      <button
        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
      >
        <i className="material-icons">menu</i>
      </button>
      <button
        type="button"
        className="todo-cancel inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-200 transition-colors duration-150 bg-gray-700 rounded-full focus:ring hover:bg-gray-200 hover:text-gray-700"
      >
        <svg viewBox="0 0 320 512" className="w-4 h-4 fill-current">
          <path d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path>
        </svg>
      </button>
      <button
        type="submit"
        className="btn__primary todo-edit inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-200 transition-colors duration-150 bg-gray-700 rounded-full focus:ring hover:bg-gray-200 hover:text-gray-700"
      >
        <svg viewBox="0 0 512 512" className="w-4 h-4 fill-current">
          <path d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"></path>
        </svg>
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-200 transition-colors duration-150 bg-gray-700 rounded-full focus:ring hover:bg-gray-200 hover:text-gray-700"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
        </svg>
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-200 transition-colors duration-150 bg-gray-700 rounded-full focus:ring hover:bg-gray-200 hover:text-gray-700"
      >
        <svg viewBox="0 0 448 512" className="w-4 h-4 fill-current">
          <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
        </svg>
      </button>
    </div>
  </Layout>
)

export default IndexPage
