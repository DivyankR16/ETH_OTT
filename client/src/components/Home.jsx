

import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import Navbar from "./Navbar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Card from "./Card";
import Footer from "./Footer";
import Searchbar from "./SearchBanner/Searchbar";
import CustomHeading from "./Headline";
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { videosfill } from "../reducers/filterSlice";
const Home = () => {
  const videos = useSelector((state) => state.vid.videos);
  //const address = useSelector(state => state.sol.userAddress);
  const contract = useSelector((state) => state.sol.contract);
  const dispatch=useDispatch();
  useEffect(() => {
    const Request = async () => {
       const allvideos=await   contract.getAllVideos();
       console.log(allvideos.length);
       dispatch(videosfill(allvideos));
      //setState({provider,signer,contract});

      
    };
    Request();
  }, []);


  return (
    <>
      <Navbar/>



      <div className="max-w-screen-xl mx-auto flex justify-center flex-col  items-center p-5 sm:p-10 md:p-16">

        
      <div>
          <CustomHeading weight="bold">Discover the Best Videos here </CustomHeading>
        </div>
        <div className="">
        
        <Searchbar/>  
          
        </div>  
        
         {/* <div className="flex flex-row">
         <div className="flex h-screen">
             hello
        </div>
        <div className="flex h-screen">
             hi
        </div> 
         </div> */}
       
         <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
