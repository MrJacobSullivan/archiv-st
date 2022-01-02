import { useWeb3React } from '@web3-react/core'

export default function useGetEncryptionKey() {
  const { library, account } = useWeb3React()

  return async () => {
    return library.send('eth_getEncryptionPublicKey', [account])
  }
}
