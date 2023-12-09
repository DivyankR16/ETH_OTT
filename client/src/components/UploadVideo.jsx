import { useState, useEffect } from "react";
import BiscuitFactory from "../../../hardhat/artifacts/contracts/EthBiscuits.sol/EthBiscuits.json";
import { ethers } from "ethers";
import lighthouse from "@lighthouse-web3/sdk";
import { useSelector } from "react-redux";
let uploadRes;
let uploadResthumb;
const UploadVideo = () => {
  const contract = useSelector((state) => state.sol.contract);
  const signer = useSelector((state) => state.sol.signer);
  const [uploadResponse,setupLoadResponse]=useState({});
  const func = async (url) => {
    console.log(url);
    uploadRes = await lighthouse.upload(
      url,
      "3ba4e579.560eb4b7fbd148a89f40e2c4357acfec"
    );
    //
    
    console.log(uploadRes);
    };
    const functhumb= async (url) => {
      console.log(url);
      uploadResthumb = await lighthouse.upload(
        url,
        "3ba4e579.560eb4b7fbd148a89f40e2c4357acfec"
      );
      //
      
      console.log(uploadResthumb);
      };
  const CreateVideo = () => [console.log("Created video")];
  const handleTitle = (e) => {
    setTile(e.target.value);
  };
  const handleDescr = (e) => {
    setTile(e.target.value);
  };
  const Success = () => (
    <p className="mt-2 text-sm text-green-600 dark:text-green-500">
      <span className="font-medium">Alright!</span> Username available!
    </p>
  );
  
  const Error = () => (
    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
      <span className="font-medium">Oops!</span> Username already taken!
    </p>
  );

  const handleSubmit = async () => {
    const gas = await contract.uploadVideo(uploadRes.data.Hash,uploadRes.data.Hash,duration,title,description,categories[0],categories[1],categories[2],categories[3],categories[4],categories[5]);
  };

  const [title, setTile] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [name,setName]=useState("");

  const [categories, setCategories] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const updateValueAtIndex = (index, newValue) => {
    // Creating a copy of the array using spread (...) operator
    const newArray = [...categories];

    // Updating the value at the specified index
    newArray[index] = newValue;

    // Updating the state with the new array
    setCategories(newArray);
  };
  
  return (
    <>
      <div>
        <form className="max-w-sm mx-auto backdrop-brightness-200 border border-solid  border-r-teal-500 rounded-md p-5 border-b-2">
          <div className="flex flex-row justify-center m-3 font-extrabold text-cyan-800 text-3xl">
            Upload the Video
          </div>
          <div className="mb-5">
            <label
              htmlFor="username-success"
              className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
            >
              Video title
            </label>
            <input
              type="text"
              id="username-success"
              value={title}
              onChange={handleTitle}
              className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
              placeholder="Bonnie Green"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="username-success"
              className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
            >
              Description
            </label>
            <input
              type="text"
              id="username-success"
              value={description}
              onChange={(e)=>{setDescription(e.target.value)}}
              className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
              placeholder="Bonnie Green"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="username-success"
              className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
            >
              Duration
            </label>
            <input
              type="text"
              id="username-success"
              value={duration}
              onChange={(e)=>{setDuration(e.target.value)}}
              className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
              placeholder="Bonnie Green"
            />
          </div>
          <div className="mb-5">
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Select Category/s
            </h3>
            <ul className="grid grid-col-3">
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="vue-checkbox-list"
                    type="checkbox"
                    onClick={() => updateValueAtIndex(0, true)}
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="vue-checkbox-list"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Gaming
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    onClick={() => updateValueAtIndex(1, true)}
                    id="react-checkbox-list"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="react-checkbox-list"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Movies
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    onClick={() => updateValueAtIndex(2, true)}
                    id="angular-checkbox-list"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="angular-checkbox-list"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Music
                  </label>
                </div>
              </li>
              <li className="w-full dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    onClick={() => updateValueAtIndex(3, true)}
                    id="laravel-checkbox-list"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="laravel-checkbox-list"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Comedy
                  </label>
                </div>
              </li>
              <li className="w-full dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    onClick={() => updateValueAtIndex(4, true)}
                    id="laravel-checkbox-list"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="laravel-checkbox-list"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Action
                  </label>
                </div>
              </li>
              <li className="w-full dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    onClick={() => updateValueAtIndex(5, true)}
                    id="laravel-checkbox-list"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="laravel-checkbox-list"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Education
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div className="mb-5">
            <label
              htmlFor="Video-URL"
              className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
            >
              Thumbnail image 
            </label>
            <input
              type="file"
              id="ok"
              onChange={(e)=>{func(e.target.files)}}
              className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
              placeholder="Bonnie Green"
            />
            {/* <Error /> */}
          </div>
          <div className="mb-5">
            <label
              htmlFor="Video-URL"
              className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
            >
              Video URL
            </label>
            <input
              type="file"
              id="ok"
              onChange={(e)=>{func(e.target.files)}}
              className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
              placeholder="Bonnie Green"
            />
            {/* <Error /> */}
          </div>
          <div className="mb-5">
            <label
              htmlFor="username-success"
              className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
            >
              Your name
            </label>
            <input
              type="text"
              id="username-success"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
              className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
              placeholder="Bonnie Green"
            />

            <Success />
          </div>
          <div className="flex flex-row justify-center align-middle">
            <button
              onClick={()=>{handleSubmit()}}
              className="bg-cyan-500 text-teal-50 font-bold p-3 rounded-lg hover:bg-cyan-300"
            >
              Upload Video
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UploadVideo;
