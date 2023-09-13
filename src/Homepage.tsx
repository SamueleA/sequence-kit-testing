import './App.css'

import { useOpenConnectModal } from '@0xsequence/kit'
import { useOpenWalletModal } from '@0xsequence/kit-wallet'
import { useDisconnect, useAccount } from 'wagmi'

function App() {
  const { setOpenWalletModal } = useOpenWalletModal()
  const { setOpenConnectModal } = useOpenConnectModal()
  const { disconnect } = useDisconnect()

  const { address, isConnected } = useAccount()

  const onClickConnect = () => {
    setOpenConnectModal(true)
  }

  const onClickDisconnect = () => {
    disconnect()
  }
  
  const openWallet = () => {
    setOpenWalletModal(true)
  }

  return (
    <div>
      {!isConnected && (
        <div>
          <button onClick={onClickConnect}>Connect</button>
        </div>
      )}
      {isConnected && (
        <>
          <div>
            <button onClick={onClickDisconnect}>Disconnect</button>
          </div>
          <div>
            <button onClick={openWallet}>open wallet</button>
          </div>
        </>
      )}
      <p>
        address: {address || 'not connected'}
      </p>
    </div>
  )
}

export default App
