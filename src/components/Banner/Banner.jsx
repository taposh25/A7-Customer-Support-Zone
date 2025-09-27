// import React from 'react'

// const Banner = ({ inProgressCount, resolvedCount }) => {
//   return (
//     <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 text-center rounded-md max-w-[1200px] mx-auto mt-6">
//       <h1 className="text-2xl font-bold">Customer Support Dashboard</h1>
//       <div className="flex justify-center gap-6 mt-4">
//         <p className="font-semibold">In Progress: {inProgressCount}</p>
//         <p className="font-semibold">Resolved: {resolvedCount}</p>
//       </div>
//     </div>
//   )
// }

// export default Banner



import React from 'react'

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-6 mt-6">
      {/* In Progress */}
      <div className="h-[250px] p-6 rounded-lg bg-yellow-500 text-center shadow-md">
        <h2 className="text-lg font-semibold">In Progress</h2>
        <p className="text-2xl font-bold mt-2">{inProgressCount}</p>
      </div>

      {/* Resolved */}
      <div className="h-[250px] p-6 rounded-lg bg-green-500 text-center shadow-md">
        <h2 className="text-lg font-semibold">Resolved</h2>
        <p className="text-2xl font-bold mt-2">{resolvedCount}</p>
      </div>
    </div>
  )
}

export default Banner

