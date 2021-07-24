// [store] getters
export default {
  // @func addr
  addr: () => `${String(window.ethereum.selectedAddress).slice(0,4)}...${String(window.ethereum.selectedAddress).slice(-4)}`,
  // @func address
  address: () => window.ethereum.selectedAddress,
  // @func balance
  balance: state => state.activeAccount.balance,
  // @func blockNum
  blockNum: state => state.network.block,
  // @func blockTime
  blockTime: state => state.network.timestamp,
  // @func gas
  gas: state => state.network.gas,
  // @func network
  network: state => {
    const networks = {
      1: 'mainnet',
      3: 'ropsten',
      4: 'rinkeby',
      42: 'kovan'
    }
    return networks[state.network.id]
  },
  // @func txnCount
  txnCount: state => state.activeAccount.transactions
}