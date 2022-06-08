import { decompress as decompressBrotli } from 'brotli-compress/js'
import { decodeToUint8Array } from 'base-unicode'

export const decompress = (brotliBaseUnicodeCompressedString: string): Uint8Array =>
  decompressBrotli(decodeToUint8Array(brotliBaseUnicodeCompressedString))
