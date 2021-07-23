// [store] actions
export default {
  // @func (initialize)
  // initialize: async function ({ dispatch, error }) {
  //   try {
  //     await dispatch('')
  //   } catch (e) {
  //     error({ 
  //       statusCode: 500, 
  //       message: e.message 
  //     })
  //   }
  // },
  // @func (setAccounts)
  setAccounts: async function ({ commit }) {
    try {
      await window.web3.eth.getAccounts()
        .then(accounts => commit('SET_ACCOUNTS', accounts))
    } catch (e) {
      console.log('[@dashstack/actions]', 'Error: setAccounts', e.message)
    }
  },
  // @func (setBalance) 
  setBalance: async function ({ commit, state }) {
    try {
      await window.web3.eth.getBalance(state.getters.account)
        .then(balance => commit('SET_BALANCE', balance))
    } catch (e) {
      console.log('[@dashstack/actions]', 'Error: setBalance', e.message)
    }
  },
  // @func (setBlock)
  setBlock: async function ({ commit }) {
    try {
      await window.web3.eth.getBlockNumber()
        .then(number => commit('UPDATE_BLOCK', { number, timestamp: Date.now() }))
    } catch (e) {
      console.log('[@dashstack/actions', 'Error: setBlock', e.message)
    }
  },
  // @func (setChainId)
  setChainId: async function ({ commit }) {
    try {
      await window.web3.eth.getChainId()
        .then(id => commit('SET_NETWORK', id))
    } catch (e) {
      console.log('[@dashstack/actions', 'Error: setChainId', e.message)
    }
  },
  // @func (startBlockSubscription)
  startBlockSubscription: async function ({ commit }) {
    window.web3.eth.subscribe(id, function (err, block) {
      if (err) {
        console.log('[@dashstack/actions', 'Error: setBlockSubscription', e.message);
        return
      }
      commit('UPDATE_BLOCK', block)
    })
  },
}