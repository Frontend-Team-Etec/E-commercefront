import React from 'react'

const Banner1 = () => {
  return (
    <div className="p-5">
      <div className="flex justify-center gap-5">

        <div className="w-[600px] h-[200px] overflow-hidden rounded-2xl shadow-md group">
          <img
            src="https://i.pinimg.com/736x/5b/85/0a/5b850a5c336da5de5d245b653c97f493.jpg"
            alt="Banner 1"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        <div className="w-[600px] h-[200px] overflow-hidden rounded-2xl shadow-md group">
          <img
            src="https://i.pinimg.com/1200x/82/29/3e/82293ef8042cc07cc1da98e5057e7504.jpg"
            alt="Banner 2"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </div>
  )
}

export default Banner1
