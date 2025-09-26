// src/components/Banner/Banner.jsx
import React from "react"


const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 text-center">
      <h1 className="text-2xl font-bold">Customer Support Dashboard</h1>
      <div className="flex justify-center gap-6 mt-4">
        <p className="font-semibold">In Progress: {inProgressCount}</p>
        <p className="font-semibold">Resolved: {resolvedCount}</p>
      </div>
    </div>
  )
}

export default Banner
