import {
  ApprovalForAll as ApprovalForAllEvent,
  DisLiked as DisLikedEvent,
  Liked as LikedEvent,
  Subscribed as SubscribedEvent,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent,
  VideoUploaded as VideoUploadedEvent
} from "../generated/EthBiscuits/EthBiscuits"
import {
  ApprovalForAll,
  DisLiked,
  Liked,
  Subscribed,
  TransferBatch,
  TransferSingle,
  URI,
  VideoUploaded
} from "../generated/schema"

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDisLiked(event: DisLikedEvent): void {
  let entity = new DisLiked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.dislikes = event.params.dislikes

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLiked(event: LikedEvent): void {
  let entity = new Liked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.likes = event.params.likes

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSubscribed(event: SubscribedEvent): void {
  let entity = new Subscribed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.subscribe = event.params.subscribe

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferBatch(event: TransferBatchEvent): void {
  let entity = new TransferBatch(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.ids = event.params.ids
  entity.values = event.params.values

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  let entity = new TransferSingle(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.EthBiscuits_id = event.params.id
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleURI(event: URIEvent): void {
  let entity = new URI(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.value = event.params.value
  entity.EthBiscuits_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVideoUploaded(event: VideoUploadedEvent): void {
  let entity = new VideoUploaded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.VideoURI = event.params.VideoURI
  entity.name = event.params.name
  entity.discription = event.params.discription
  entity.owner = event.params.owner
  entity.duration = event.params.duration
  entity.gaming = event.params.gaming
  entity.movies = event.params.movies
  entity.music = event.params.music
  entity.comedy = event.params.comedy
  entity.action = event.params.action
  entity.education = event.params.education

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
