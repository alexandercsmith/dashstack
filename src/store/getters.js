// [store] getters
export default {
  // @func account
  account: state => state.accounts[state.activeAccount],
  // @func balance
  balance: state => state.activeBalance,
  // @func blockNum
  blockNum: state => state.block.number,
  // @func blockTime
  blockTime: state => state.block.timestamp
}