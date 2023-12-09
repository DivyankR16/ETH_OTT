import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    userAddress: '',
    contractInstance:'',
    balance:'',
    contract:{},
    provider:{},
    signer:{}
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
        },
        setContract:(state,action)=>{
            state.contract=action.payload
        },
        setSigner:(state,action)=>{
            state.signer=action.payload
        },
        setProvider:(state,action)=>{
            state.provider=action.payload
        }
  }
});

export const {setUserAddress,setContractInstance,setBalance,setContract,setSigner,setProvider} = solInstance.actions

export default solInstance.reducer