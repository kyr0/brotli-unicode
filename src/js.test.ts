import { Buffer } from 'buffer'

// @ts-ignore
import { compress } from '../index'
// @ts-ignore
import { decompress } from '../js'
import { TEST_INPUT } from './__test__/input'

it('Decode/decompress a previously compressed/encoded string with handwritten JS based decompressor', async () => {
  const compressed = await compress(Buffer.from(TEST_INPUT))

  console.log('Compressed result (copy and pasteable)', compressed)
  console.log('Input character length: ', TEST_INPUT.length)
  console.log('Output character length: ', compressed.length)
  console.log('Character compression rate: ', (TEST_INPUT.length / compressed.length) * 100, '%')

  expect(Buffer.from(decompress(compressed)).toString()).toStrictEqual(TEST_INPUT)
})
