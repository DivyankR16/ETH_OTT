import { useState, useEffect } from "react";
import BiscuitFactory from "../../../hardhat/artifacts/contracts/EthBiscuits.sol/EthBiscuits.json";
import { ethers } from "ethers";
import lighthouse from "@lighthouse-web3/sdk";
const UploadVideo = () => {
  const [contract, setContract] = useState();
  useEffect(() => {
    const Request = async () => {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const Web3provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = Web3provider.getSigner();
      const Address = await signer.getAddress();

      const provider = new ethers.providers.JsonRpcProvider(
        "https://polygon-mumbai.infura.io/v3/d717718c06754418877e3e4e056ec84e"
      );

      const contract = new ethers.Contract(
        "0x3bf546f4c6dfd73cf404786434773924bfb9695d",
        BiscuitFactory.abi,
        provider
      );
      setContract(contract);
    };
    Request();
  }, [contract]);
  const func = async (url) => {
    console.log(url);
    const uploadResponse = await lighthouse.upload(
      url,
      "3ba4e579.560eb4b7fbd148a89f40e2c4357acfec"
    );

    console.log(uploadResponse);
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
  const [title, setTile] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [categories,setCategories]=useState("")
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
              onChange={setDescription}
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
              onChange={setDuration}
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
              Video URL
            </label>
            <input
              type="file"
              id="ok"
              onChange={(e) => func(e.target.files)}
              // value={url}
              className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
              placeholder="Bonnie Green"
            />
            <Error />
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
              value={title}
              onChange={handleTitle}
              className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
              placeholder="Bonnie Green"
            />
            <Success />
          </div>
          <div className="flex flex-row justify-center align-middle">
            <button
              type="submit"
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
