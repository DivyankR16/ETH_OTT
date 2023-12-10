import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    videos: [],//for the object
    user:[]
    
}

const videoInstance = createSlice({
  name:'video',
  initialState,
    reducers: {
        videosfill:(state,action)=>{
          state.videos=action.payload;
        },
        videonamefilter: (state, action) => {
            const namequery=action.payload;
            const filterByTypeSubstring = (videos, typeSubstring) => {
                return videos.filter(video => video.Name.includes(typeSubstring));
              };
              
              // Example: Filter videos where the type includes the substring "Music"
            return  filterByTypeSubstring(state.videos, namequery);
              

        },
        userfilter: (state, action) => {
            const userquery=action.payload;
            const filterByaddressSubstring = (user, typeSubstring) => {
                return user.filter(video => user.useraddress.includes(typeSubstring));
            };
            const filterBynameSubstring = (user, typeSubstring) => {
              return user.filter(user => user.useraddress.includes(typeSubstring));
            };
              
              // Example: Filter videos where the type includes the substring "Music"
            const addressowner = filterByaddressSubstring(state.user,userquery);
            const nameowner = filterBynameSubstring(state.user, userquery);
            return  [...addressowner, ...nameowner.filter(obj2 => !addressowner.some(obj1 => obj1.useraddress === obj2.useraddress))];
        },
        videobyuseraddressfilter: (state, action) => {
          const addressquery=action.payload;
          const filterByTypeSubstring = (videos, typeSubstring) => {
              return videos.filter(video => video.owner.includes(typeSubstring));
            };
            
            // Example: Filter videos where the type includes the substring "Music"
          return  filterByTypeSubstring(state.videos, addressquery);
            

      },
      


        setContractInstance: (state, action) =>{
            state.contractInstance=action.payload
        },
        setBalance: (state, action) => {
            state.balance=action.payload
        }
  }
});

export const {videobyuseraddressfilter,userfilter,videonamefilter,videosfill} = videoInstance.actions

export default videoInstance.reducer