// [store] mutations
export default {
  // @func (ADD_CONTRACT)
  ADD_CONTRACT: (state, address) => {
    state.contracts.push(address);
  },
  // @func (SET_ACCOUNT)
  SET_ACCOUNT: (state, id) => {
    state.activeAccount = id;
  },
  // @func (SET_ACCOUNTS)
  SET_ACCOUNTS: (state, accounts=[]) => {
    state.accounts = accounts;
  },
  // @func (SET_BALANCE)
  SET_BALANCE: (state, balance) => {
    state.activeBalance = balance;
  },
  // @func (SET_NETWORK)
  SET_NETWORK: (state, id) => {
    state.network = id
  },
  // @func (UPDATE_BLOCK)
  UPDATE_BLOCK: (state, { number, timestamp }) => {
    state.block = { number, timestamp }
  }
}