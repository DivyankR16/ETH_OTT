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
  const [loading, setLoading] = useState(false);


  useEffect(() => {

    const viewVideo = async () => {
      setLoading(true);
      if (contract.length > 0) {
        const views = await contract.getUserVideo(address[0]);
        setView(views);
        setLoading(false);
      }
    };
    contract && viewVideo();
  }, [contract]);


  return (
    <>
      <div className='mt-5 h-50 mb-5 flex justify-center'>
        These are your videos
      </div>
      
{  loading?    ( <div className="flex justify-center items-center h-32">
              <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
            </div>):(<div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        <ul>
          {views.map((vedio) => (
            <Card key={vedio.VideoURI}  view={vedio[i]}/>
          ))}
        </ul>

      
      </div>)}
    </>

  )
}

export default YourVideos