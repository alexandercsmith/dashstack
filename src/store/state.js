// [store] state
export default () => ({
  activeAccount: {
    balance:      0,
    transactions: 0,
  },

  network: {
    id:        0,
    block:     0,
    gas:       0,
    timestamp: 0
  }, 

  accounts:      [],
  contracts:     [],
  subscriptions: []
})