import React from 'react'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const Card = () => {
  return (
    <>
      <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal  rounded-md p-2">
        <img
          src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
          className="w-full mb-3"
        />
        <div className="p-4 pt-2">
          <div className="mb-8">
            <div className="flex flex-row justify-around">
              <p className="text-sm text-gray-600 flex items-center ">
                <FavoriteBorderIcon />
                <div className="pl-3 text-slate-500 text font-bold"> 50K Likes</div>
              </p>
              <p className="pl-3 text-slate-500 text font-bold">Views: 100K</p>
            </div>
            <a
              href="#"
              className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block"
            >
              Can coffee make you a better developer?
            </a>
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="flex items-center">
            <a href="#">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="https://tailwindcss.com/img/jonathan.jpg"
                alt="Avatar of Jonathan Reinink"
              />
            </a>
            <div className="text-sm">
              <a
                href="#"
                className="text-gray-900 font-semibold leading-none hover:text-indigo-600"
              >
                Jonathan Reinink
              </a>
              <p className="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card