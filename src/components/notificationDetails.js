import Link from 'next/link'
import React from 'react'

const notificationDetails = ({id}) => {
  return (
    <div className="bg-green-400 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
        <Link className="p-2 bg-yellow-300 bg-red-gree-300" href={`/notification/${id}`}>Details</Link>
    </div>
  )
}

export default notificationDetails