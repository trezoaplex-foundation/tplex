import { PublicKey } from '@trezoa/web3.js'
import { strict as assert } from 'assert'

/**
 * Checks if a string is valid base58 Trezoa via a Regex.
 * @private
 */
export function isValidTrezoaAddress(address: string) {
  return /^[0-9a-zA-Z]{43,88}$/.test(address)
}

export function assertValidTrezoaAddress(address: string) {
  assert(
    isValidTrezoaAddress(address) && address.length >= 44,
    `'${address}' is not a valid trezoa account or transaction address`
  )
}

/**
 * Checks if a string is valid PublicKey address.
 * @private
 */
export function isValidPublicKeyAddress(address: string) {
  if (!isValidTrezoaAddress(address) || address.length > 44) return false
  try {
    new PublicKey(address)
    return true
  } catch (_) {
    return false
  }
}

export function asPublicKey(address: string): PublicKey {
  assertValidTrezoaAddress(address)
  return new PublicKey(address)
}
