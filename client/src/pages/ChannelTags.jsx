// import React from 'react'
// import{ useSelector,useDispatch} from 'react-redux'
// import { PushAPI,CONSTANTS} from '@pushprotocol/restapi'
// // const AccountInformation = async (dispatch,signer) => {
// //   const user = await PushAPI.initialize(signer,{env:CONSTANTS.ENV.STAGING})
// //   return user
// // }
// // const SubscribeToPushChannel = async(user,pushchanneladdress) => {
// //   await user.notification.subscribe(`eip155:11155111:${pushchanneladdress}`)
// // }
// // const broadCastNotification = async (user,_title,_body) => {
// //   await user.channel.send(['*'], {
// //     notification:{title:_title, body:_body},
// //   })  
// // }
// // const targetNotification = async (user,sender,_title,_body) => {
// //   await user.channel.send([sender], {
// //     notification: { title: _title, body:_body },
// //   });
// // };
// // const subsetNotification = async (user, sender1,sender2,sender3,_title, _body) => {
// //   await user.channel.send([sender1,sender2,sender3], {
// //     notification: { title: _title, body: _body },
// //   });
// // };
// const ChannelTags = () => {
//   const dispatch = useDispatch()
//   const signer=useSelector((item)=>item.sol.signer)
//   return (
//     <>
      
//     </>
//   )
// }

// export default ChannelTags