import React from 'react'
import Card from '../components/Card'
import { } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const YourVideos = () => {
  const [views, setView] = useState([]);
  const contract = useSelector((state) => state.sol.contract);
  const address = useSelector(state => state.sol.userAddress);
  const [Loading,isLoading]

  useEffect(() => {

    const viewVideo = async () => {
      const views = await contract.getUserVideo(address[0]);
      console.log(views);
      setView(views);
    };
    contract && viewVideo();
  }, [contract]);


  return (
    <>
      <div className='mt-5 h-50 mb-5 flex justify-center'>
        These are your videos
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Card {state : view[i]}/>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>

  )
}

export default YourVideos