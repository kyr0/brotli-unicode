import { decompress as decompressBrotli, compress as compressBrotli } from 'brotli-compress'
import { decodeToUint8Array, encode as encodeBaseUnicode } from 'base-unicode'

export const decompress = async (brotliBaseUnicodeCompressedString: string): Promise<Uint8Array> =>
  decompressBrotli(decodeToUint8Array(brotliBaseUnicodeCompressedString))

export const compress = async (dataToCompressAndEncode: Uint8Array): Promise<string> =>
  encodeBaseUnicode(await compressBrotli(dataToCompressAndEncode))
