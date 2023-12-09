import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    userAddress: '',
    contractInstance:'',
    balance:'',
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
        },
        setBalance: (state, action) => {
            state.balance=action.payload
        }
  }
});

export const {setUserAddress,setContractInstance,setBalance} = solInstance.actions

export default solInstance.reducer