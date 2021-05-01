import React from "react"

const Footer = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 w-100vw">
      &copy;{new Date().getFullYear()} Vital Spaces - All Rights Reserved
    </div>
  )
}

export default Footer
