import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userAddress: '',
    contractInstance:'',
    
}

const solInstance = createSlice({
  name:'soli',
  initialState,
    reducers: {
        setUserAddress: (state, action) => {
            state.userAddress=action.payload
        },
        setContractInstance: (state, action) =>{
            state.contractInstance=action.payload
        }
  }
});

export const {setUserAddress,setContractInstance} = solInstance.actions

export default solInstance.reducer