// [plugins] $web3 
import web3 from 'web3'

// @extend { Web3 }
// @module
// Web3.extend({
//   property: '',
//   methods: [{
//     name: '',
//     call: '',
//     params: 0,
//     inputFormatter: [],
//     outputFormatter: []
//   }]
// });

// @extend { Web3 }
// @function 
// Web3.extend({
//   methods: [{
//     name: '',
//     call: ''
//   }]
// });

export default (ctx, inject) => inject('web3', web3);