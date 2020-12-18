import React from "react"
import "./togglebutton.module.css"

const ToggleButton = () => {
  return (
    <>
    <div className="my-4">
    <label htmlFor="toogleA" className="flex items-center cursor-pointer">
  <div className="relative">
    <input id="toogleA" type="checkbox" className="hidden" />
    <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner" />
    <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0" />
  </div>
  <div className="ml-3 text-gray-700 font-medium">
    Toggle Me!
  </div>
</label>
</div>
    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
    <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none focus:outline-none" />
    <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300" />
  </div>
  <label htmlFor="toggle" className="text-xs">Toggle me.</label>
    </>
  )
}

export default ToggleButton
