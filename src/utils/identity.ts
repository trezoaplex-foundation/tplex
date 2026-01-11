import { keypairIdentity, TrezoaplexPlugin } from '@trezoaplex-foundation/js'
import { Keypair } from '@trezoa/web3.js'
import { strict as assert } from 'assert'

export function resolveIdentity(keypair?: Keypair): TrezoaplexPlugin {
  if (keypair != null) return keypairIdentity(keypair)

  // TODO(thlorenz): when no keypair is provided return a cartera identity plugin
  assert.fail('We do not support cartera identity yet')
}
