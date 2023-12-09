import React from 'react'

const SingleVideo = () => {
  return (
    <>
      <div className='h-auto flex flex-row justify-center items-center'>
        <div className="relative bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <img
            className="w-full h-auto rounded-xl"
            src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
            alt="Image Description"
          />
          <div className="absolute top-0 start-0 end-0">
            <div className="p-4 md:p-5">
              <h3 className="text-lg font-bold text-gray-800">Card title</h3>
              <p className="mt-1 text-gray-800">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <p className="mt-5 text-xs text-gray-500">
                Last updated 5 mins ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleVideo