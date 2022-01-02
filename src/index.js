import { StrictMode } from 'react'
import { render } from 'react-dom'

import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'

import App from './App'
import './index.css'

const getLibrary = (provider) => new Web3Provider(provider)

render(
  <StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </StrictMode>,
  document.getElementById('root')
)
