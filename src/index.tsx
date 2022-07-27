import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { WagmiConfig, createClient, configureChains, chain } from "wagmi"
import { InjectedConnector } from 'wagmi/connectors/injected'
import { publicProvider } from 'wagmi/providers/public'
import { infuraProvider } from "wagmi/providers/infura"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"


const infuraId = process.env.REACT_APP_INFURA_ID

const { provider, chains } = configureChains(
  [chain.polygonMumbai, chain.polygon],
  [infuraProvider({ apiKey: infuraId }), publicProvider()]
);

const client = createClient({
  autoConnect: true,
  connectors: [ new InjectedConnector({chains}) ],
  provider,
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

//theme override to allow users to use css without chakra-ui
const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
      },
    }),
  },
});

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <WagmiConfig client={client}>
        <App />
      </WagmiConfig>
    </ChakraProvider>
  </React.StrictMode>
);

