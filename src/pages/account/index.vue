<!-- [pages] account/index -->
<template>
  <section class="container max-w-screen-md p-2 dark:text-white">
    <h1 class="text-3xl border-b border-gray-300 py-2 mb-4">Account</h1>
    <p class="text-xl pb-2" v-text="$store.getters.address"/>
    <p class="text-lg pb-4">{{ $store.getters.balance }} ETH</p>

    <div class="w-full flex flex-row justify-evenly pb-2 border-b border-gray-300">
      <button>History</button>
      <button>Collection</button>
    </div>

    
  </section>
</template>

<script>
export default {
  async asyncData ({ store }) {
    // const txns = await window.web3.eth.getPastLogs({
    //   address: store.getters.address
    // })
    return {
      address:      store.getters.address,
      balance:      store.getters.balance,
      transactions: store.getters.txnCount,
      history: []
    }
  }
}
</script>