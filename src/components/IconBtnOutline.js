import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"

export const IconBtnOutline = props => (
  <Link
    className="inline-flex items-center h-10 py-2 px-4 text-gray-100 border-2 border-teal-400 rounded-lg hover:text-gray-300 hover:bg-teal-100 hover:bg-opacity-10 hover:border-teal-500"
    to={props.href}
  >
    <FontAwesomeIcon icon={props.icon} />
    <span className="ml-2">{props.text}</span>
  </Link>
)
