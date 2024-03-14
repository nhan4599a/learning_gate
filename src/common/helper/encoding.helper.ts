import { sum } from './array.helper'

export const combineBuffers = (...buffers: Uint8Array[]) => {
  const mergedBufferLength = sum(buffers, buffer => buffer.length)

  const mergedBuffer = new Uint8Array(mergedBufferLength)

  let startIndex = 0

  for (const buffer of buffers) {
    mergedBuffer.set(buffer, startIndex)
    startIndex += buffer.length
  }

  return mergedBuffer
}
