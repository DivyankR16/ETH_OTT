import React from "react";
import ReactPlayer from "react-player";
import Navbar from "./Navbar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Card from "./Card";
import Footer from "./Footer";
import Searchbar from "./SearchBanner/Searchbar";
import CustomHeading from "./Headline";
const Home = () => {
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
