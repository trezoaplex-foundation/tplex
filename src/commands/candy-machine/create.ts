import { Commitment, Connection } from '@trezoa/web3.js'
import { urlFromCluster } from '@/utils/connection'
import {
  CandyMachineCreateArgs,
  clusterWithLocalToSdkCluster,
  DevCluster,
} from '@/types'
import { Trezoaplex, TrezoaplexPlugin } from '@trezoaplex-foundation/js'
import { candyMachineCreate } from '@/actions/candy-machine'
import { logInfo } from '@/utils'

export async function cmdCandyMachineCreate(
  cluster: DevCluster,
  commitment: Commitment,
  identity: TrezoaplexPlugin,
  args: CandyMachineCreateArgs
) {
  const url = urlFromCluster(cluster)
  const connection = new Connection(url, commitment)

  const mx = Trezoaplex.make(connection, {
    cluster: clusterWithLocalToSdkCluster(cluster),
  }).use(identity)
  const candyMachine = await candyMachineCreate(mx, args)
  logInfo('Successfully created candy machine at', candyMachine.address)
  return candyMachine
}
