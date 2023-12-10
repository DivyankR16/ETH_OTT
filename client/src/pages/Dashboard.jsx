import React, { useEffect, useState } from 'react'
import { ethers } from "ethers";
// import dotenv from "dotenv";
// dotenv.config({ path: "./.env" });
import Navbar from '../components/Navbar';
import UploadVideo from '../components/UploadVideo';
import YourVideos from './YourVideos';
import WalletEnquiry from './WalletEnquiry';
import Notifications from './Notifications';
// import ChannelTags from './ChannelTags';
import Subscribers from './Subscribers';
import BiscuitFactory from "../../../hardhat/artifacts/contracts/EthBiscuits.sol/EthBiscuits.json";
import SubscriberedChannels from './SubscriberedChannels';
const UserProfile = () => {
    const inactive = `inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group`
    const active = `inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group`
    const [curActive,setCurActive]=useState(1)
    const navarr = [
        { name:"Your Videos",check:1},
        {name:"Wallet Enquiry",check:2},
        {name:"Notifications",check:3},
        { name: "Channel Tags", check: 4},
        {name:"Subsrcibers",check:5},
        {name:"Subsrcibered Channels",check:6},   
        {name:"Upload Video",check:7},   
  ]
  
  
  return (
    <>
      <Navbar/>
      <div className="flex-grow text-gray-800 mt-12">
        <main className="p-6 sm:p-10 space-y-6">
          <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="flex items-center p-8 bg-white shadow rounded-lg">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <span className="block text-2xl font-bold">89562</span>
                <span className="block text-gray-500">
                  Daily Unique Visitors
                </span>
              </div>
            </div>
            <div className="flex items-center p-8 bg-white shadow rounded-lg">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div>
                <span className="block text-2xl font-bold">27.6%</span>
                <span className="block text-gray-500">CTR</span>
              </div>
            </div>
            <div className="flex items-center p-8 bg-white shadow rounded-lg">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                  />
                </svg>
              </div>
              <div>
                <span className="inline-block text-2xl font-bold">3m 45s</span>
                <span className="inline-block text-xl text-gray-500 font-semibold">
                  (-32%)
                </span>
                <span className="block text-gray-500">
                  Average Engagement Time
                </span>
              </div>
            </div>
            <div className="flex items-center p-8 bg-white shadow rounded-lg">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <span className="block text-2xl font-bold">956326</span>
                <span className="block text-gray-500">Event Count</span>
              </div>
            </div>
          </section>

          <div className="border-b border-gray-200 dark:border-gray-700">
                      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            {navarr.map((item)=>(
              <li key={item.name} className="me-2" onClick={()=>(setCurActive(item.check))}>
                <a
                        href="#"
                        className={item.check === curActive ? `${active}` : `${inactive}`}               >
                  <svg
                    className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  {item.name}
                </a>
              </li>
                ))}
            </ul>
          </div>
          {curActive===1 && <YourVideos/>}
          {curActive===2 && <WalletEnquiry/>}
          {curActive===3 && <Notifications/>}
          {/* {curActive===4 && <ChannelTags/>} */}
          {curActive===5 && <Subscribers/>}
          {curActive===6 && <SubscriberedChannels/>}
          {curActive===7 && <UploadVideo/>}
        </main>
      </div>
    </>
  );
}

export default UserProfile