import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ApprovalForAll,
  DisLiked,
  Liked,
  Subscribed,
  TransferBatch,
  TransferSingle,
  URI,
  VideoUploaded
} from "../generated/EthBiscuits/EthBiscuits"

export function createApprovalForAllEvent(
  account: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createDisLikedEvent(dislikes: BigInt): DisLiked {
  let disLikedEvent = changetype<DisLiked>(newMockEvent())

  disLikedEvent.parameters = new Array()

  disLikedEvent.parameters.push(
    new ethereum.EventParam(
      "dislikes",
      ethereum.Value.fromUnsignedBigInt(dislikes)
    )
  )

  return disLikedEvent
}

export function createLikedEvent(likes: BigInt): Liked {
  let likedEvent = changetype<Liked>(newMockEvent())

  likedEvent.parameters = new Array()

  likedEvent.parameters.push(
    new ethereum.EventParam("likes", ethereum.Value.fromUnsignedBigInt(likes))
  )

  return likedEvent
}

export function createSubscribedEvent(subscribe: BigInt): Subscribed {
  let subscribedEvent = changetype<Subscribed>(newMockEvent())

  subscribedEvent.parameters = new Array()

  subscribedEvent.parameters.push(
    new ethereum.EventParam(
      "subscribe",
      ethereum.Value.fromUnsignedBigInt(subscribe)
    )
  )

  return subscribedEvent
}

export function createTransferBatchEvent(
  operator: Address,
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  values: Array<BigInt>
): TransferBatch {
  let transferBatchEvent = changetype<TransferBatch>(newMockEvent())

  transferBatchEvent.parameters = new Array()

  transferBatchEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )

  return transferBatchEvent
}

export function createTransferSingleEvent(
  operator: Address,
  from: Address,
  to: Address,
  id: BigInt,
  value: BigInt
): TransferSingle {
  let transferSingleEvent = changetype<TransferSingle>(newMockEvent())

  transferSingleEvent.parameters = new Array()

  transferSingleEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferSingleEvent
}

export function createURIEvent(value: string, id: BigInt): URI {
  let uriEvent = changetype<URI>(newMockEvent())

  uriEvent.parameters = new Array()

  uriEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  uriEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return uriEvent
}

export function createVideoUploadedEvent(
  VideoURI: string,
  name: string,
  discription: string,
  owner: Address,
  duration: BigInt,
  gaming: boolean,
  movies: boolean,
  music: boolean,
  comedy: boolean,
  action: boolean,
  education: boolean
): VideoUploaded {
  let videoUploadedEvent = changetype<VideoUploaded>(newMockEvent())

  videoUploadedEvent.parameters = new Array()

  videoUploadedEvent.parameters.push(
    new ethereum.EventParam("VideoURI", ethereum.Value.fromString(VideoURI))
  )
  videoUploadedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  videoUploadedEvent.parameters.push(
    new ethereum.EventParam(
      "discription",
      ethereum.Value.fromString(discription)
    )
  )
  videoUploadedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  videoUploadedEvent.parameters.push(
    new ethereum.EventParam(
      "duration",
      ethereum.Value.fromUnsignedBigInt(duration)
    )
  )
  videoUploadedEvent.parameters.push(
    new ethereum.EventParam("gaming", ethereum.Value.fromBoolean(gaming))
  )
  videoUploadedEvent.parameters.push(
    new ethereum.EventParam("movies", ethereum.Value.fromBoolean(movies))
  )
  videoUploadedEvent.parameters.push(
    new ethereum.EventParam("music", ethereum.Value.fromBoolean(music))
  )
  videoUploadedEvent.parameters.push(
    new ethereum.EventParam("comedy", ethereum.Value.fromBoolean(comedy))
  )
  videoUploadedEvent.parameters.push(
    new ethereum.EventParam("action", ethereum.Value.fromBoolean(action))
  )
  videoUploadedEvent.parameters.push(
    new ethereum.EventParam("education", ethereum.Value.fromBoolean(education))
  )

  return videoUploadedEvent
}
