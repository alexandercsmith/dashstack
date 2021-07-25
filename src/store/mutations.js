// [store] mutations
export default {
  // @func (ADD_CONTRACT)
  ADD_CONTRACT: (state, address) => {
    state.contracts.push(address);
  },
  // @func (SET_ACCOUNTS)
  SET_ACCOUNTS: (state, accounts=[]) => {
    state.accounts = accounts;
  },
  // @func (SET_BALANCE)
  SET_BALANCE: (state, balance) => {
    state.activeAccount.balance = balance;
  },
  // @func (SET_GAS_PRICE)
  SET_GAS_PRICE: (state, price) => {
    state.network.gas = price
  },
  // @func (SET_NETWORK_ID)
  SET_NETWORK_ID: (state, id) => {
    state.network.id = id
  },
  // @func (SET_TRANSACTION_COUNT)
  SET_TRANSACTION_COUNT: (state, txns) => {
    state.activeAccount.transactions = txns;
  },
  // @func (UPDATE_BLOCK)
  UPDATE_BLOCK: (state, { number, timestamp }) => {
    state.network.block     = number 
    state.network.timestamp = timestamp
  }
}