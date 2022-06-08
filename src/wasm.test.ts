import { Buffer } from 'buffer'

// @ts-ignore
import { compress, decompress } from '../index'
import { TEST_INPUT } from './__test__/input'

it('Compresses/encodes and decodes/decompresses a string', async () => {
  const compressed = await compress(Buffer.from(TEST_INPUT))
  console.log('Compressed result (copy and pasteable)', compressed)
  console.log('Input character length: ', TEST_INPUT.length)
  console.log('Output character length: ', compressed.length)
  console.log('Character compression rate: ', (TEST_INPUT.length / compressed.length) * 100, '%')
  const decompressed = await decompress(compressed)
  expect(Buffer.from(decompressed).toString()).toStrictEqual(TEST_INPUT)
})
