import React, { useState } from 'react'
import { ethers } from "ethers";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import logo from "../../assets/images/logo.png";
import { setUserAddress,setBalance } from '../reducers/solInstance';
import './navbar.css'
const networks = {
  polygon: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Polygon Testnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
};


const Navbar = () => {
  const address = useSelector(state => state.sol.userAddress)
  const balance = useSelector(state => state.sol.balance)
  console.log(address)
  console.log(balance)
  const dispatch=useDispatch()
    const connectWallet = async () => {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
      if (provider.network !== "matic") {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              ...networks["polygon"],
            },
          ],
        });
      }
      const account = provider.getSigner();
      const Address = await account.getAddress();
      dispatch(setUserAddress(Address))
      const Balance = ethers.utils.formatEther(await account.getBalance());
      dispatch(setBalance(Balance))
    };
  return (
    <>
      <nav className="bg-black  fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="flex items-center space-x-3 rtl:space-x-reverse text-white font-bold text-2xl">
              ETH_BISCUIT
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {address === "" && balance === "" ? (
              <button
                onClick={connectWallet}
                type="button"
                className="text-white bg-cyan-700 hover:bg-cyan-00 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Connect Wallet
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className="text-white bg-cyan-700 hover:bg-cyan-00 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {balance}
                </button>
                <p className="text-white font-bold">{address}</p>
              </>
            )}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  <span className="text-xl">Home</span>
                </Link>
                {/* <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a> */}
              </li>
              <li>
                <Link
                  to="/searchVideo"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  <span className="text-xl">Search</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  <span className="text-xl">UserProfile</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
    // <>
    // <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 w-full z-50 shadow-lg">
    //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //       <Link
    //         to="/"
    //         className="flex items-center space-x-3 rtl:space-x-reverse"
    //       >
    //         {/* <img src={} className="logo h-14" alt="logo" /> */}
    //         DeVideee
    //       </Link>

    //       <button
    //         data-collapse-toggle="navbar-default"
    //         type="button"
    //         className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //         aria-controls="navbar-default"
    //         aria-expanded="false"
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         <svg
    //           className="w-5 h-5"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 17 14"
    //         >
    //           <path
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M1 1h15M1 7h15M1 13h15"
    //           />
    //         </svg>
    //       </button>

    //       <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    //         <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //           <li>
    //             <Link
    //               to="/"
    //               className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 "
    //               aria-current="page"
    //             >
    //               <span className="text-2xl">Home</span>
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/feed"
    //               className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //             >
    //               <span className="text-2xl">Inspire</span>
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/chat"
    //               className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //             >
    //               <span className="text-2xl">Chat</span>
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/therapy"
    //               className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //             >
    //               <span className="text-2xl">Therapy</span>
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/products"
    //               className="block py-4 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //             >
    //               <span className="text-2xl">Products</span>
    //             </Link>
    //           </li>
    //           <li>
    //             <button
    //               id="dropdownDefaultButton"
    //               data-dropdown-toggle="dropdown"
    //               className="text-white    focus:outline-none font-medium rounded-lg text-sm   text-center inline-flex items-centerdark:hover:bg-blue-700"
    //               type="button"
    //             >
    //               <img
    //                 className="w-11 h-11 rounded-full mr-2"
    //                 src="https://i.pinimg.com/550x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg"
    //                 alt="Jese Leos"
    //               />
    //               <span className="text-2xl  md:dark:hover:text-blue-500">
    //                 Login
    //               </span>
    //             </button>

    //             <div
    //               id="dropdown"
    //               className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-900"
    //             >
    //               <ul
    //                 class="py-2 text-sm text-gray-700 dark:text-gray-200"
    //                 aria-labelledby="dropdownDefaultButton"
    //               >
    //                 <li>
    //                   <a
    //                     href="#"
    //                     className="block px-4 py-2 hover:text-blue-500"
    //                   >
    //                     User SignUp/Login
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a
    //                     href="#"
    //                     className="block px-4 py-2 hover:text-blue-500"
    //                   >
    //                     Admin Login
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a
    //                     href="#"
    //                     className="block px-4 py-2 hover:text-blue-500"
    //                   >
    //                     Doctor Login
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a
    //                     href="#"
    //                     className="block px-4 py-3 hover:text-blue-500"
    //                   >
    //                     Logout
    //                   </a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </>
  );
}

export default Navbar