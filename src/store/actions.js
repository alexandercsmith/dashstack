// [store] actions
export default {
  // @func (initialize)
  initialize: async function ({ dispatch }) {
    try {
      await dispatch('setNetwork')
      await dispatch('setAccounts')
      await dispatch('setSelectedAccount')
    } catch (e) {
      console.log('[@dashstack/actions]', 'Error: initialize', e.message)
    }
  },
  // @func (setAccounts)
  setAccounts: async function ({ commit }) {
    try {      
      await window.web3.eth.getAccounts()
        .then(accounts => commit('SET_ACCOUNTS', accounts))
    } catch (e) {
      console.log('[@dashstack/actions]', 'Error: setAccounts', e.message)
    }
  },
  // @func (setNetwork)
  setNetwork: async function ({ commit }) {
    try {
      // chainId
      await window.web3.eth.getChainId()
        .then(id => commit('SET_NETWORK_ID', id))
      // blockNumber
      await window.web3.eth.getBlockNumber()
        .then(number => commit('UPDATE_BLOCK', { number, timestamp: Date.now() }))
      // gasPrice
      await window.web3.eth.getGasPrice()
        .then(price => commit('SET_GAS_PRICE', window.web3.utils.fromWei(price)))
    } catch (e) {
      console.log('[@dashstack/actions]', 'Error: setNetwork', e.message)
    }
  },
  // @func (setSelectedAccount)
  setSelectedAccount: async function ({ commit }) {
    try {
      const address = window.ethereum.selectedAddress 
      // balance
      await window.web3.eth.getBalance(address)
        .then(balance => commit('SET_BALANCE', balance))
      // transactionCount
      await window.web3.eth.getTransactionCount(address)
        .then(count => commit('SET_TRANSACTION_COUNT', count))
    } catch (e) {
      console.log('[@dashstack/actions]', 'Error: setSelectedAccount', e.message)
    }
  },
  // @func (startBlockSubscription)
  startBlockSubscription: async function ({ commit }) {
    window.web3.eth.subscribe(id, function (err, block) {
      if (err) {
        console.log('[@dashstack/actions', 'Error: setBlockSubscription', e.message)
        return
      }
      commit('UPDATE_BLOCK', block)
    })
  },
}