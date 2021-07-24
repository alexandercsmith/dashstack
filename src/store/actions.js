// [store] actions
export default {
  // @func (initialize)
  initialize: async function ({ dispatch }) {
    try {
      await dispatch('setChainId')
      await dispatch('setBlock')
      await dispatch('setAccounts')
      await dispatch('fetchBalance')
      await dispatch('fetchTransactionCount')
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
  // @func (setBlock)
  setBlock: async function ({ commit }) {
    try {
      await window.web3.eth.getBlockNumber()
        .then(number => commit('UPDATE_BLOCK', { number, timestamp: Date.now() }))
    } catch (e) {
      console.log('[@dashstack/actions]', 'Error: setBlock', e.message)
    }
  },
  // @func (setChainId)
  setChainId: async function ({ commit }) {
    try {
      await window.web3.eth.getChainId()
        .then(id => commit('SET_NETWORK', id))
    } catch (e) {
      console.log('[@dashstack/actions]', 'Error: setChainId', e.message)
    }
  },
  // @func (setGasPrice)
  setGasPrice: async function ({ }) {
    try {
      await window.web3.eth.getGasPrice()
        .then(price => commit('SET_GAS_PRICE', window.web3.utils.fromWei(price)))
    } catch (e) {
      console.log('[@dashstack/actions]', 'Error: setGasPrice', e.message)
    }
  },
  // @func (fetchBalance) 
  fetchBalance: async function ({ commit }) {
    try {
      await window.web3.eth.getBalance(window.ethereum.selectedAddress)
        .then(balance => commit('SET_BALANCE', balance))
    } catch (e) {
      console.log('[@dashstack/actions]', 'Error: fetchBalance', e.message)
    }
  },
  // @func (fetchTransactionCount)
  fetchTransactionCount: async function ({ commit }) {
    try {
      await window.web3.eth.getTransactionCount(window.ethereum.selectedAddress)
        .then(count => commit('SET_TRANSACTION_COUNT', count));
    } catch (e) {
      console.log('[@dashstack/actions', 'Error: fetchTransactionCount', e.message)
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