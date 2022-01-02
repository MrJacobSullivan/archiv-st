import { useWeb3React } from '@web3-react/core'

export default function useNetwork() {
  const { library } = useWeb3React()

  return async (networkId) => {
    return library.send('wallet_switchEthereumChain', [
      { chainId: '0x' + networkId.toString('hex') },
    ])
  }
}
