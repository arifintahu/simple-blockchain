const { Blockchain, Transaction } = require('../src/index.js');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('f181e137b3de1b0170f9e4e89830962493e3a5f4ebf7425a7286b7fd8a036ae8');
const myWalletAddress = myKey.getPublic('hex');

let myCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key is here', 10);
tx1.signTransaction(myKey);
myCoin.addTransaction(tx1);

console.log('\nStarting the miner...');
myCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of arifintahu-address is ', myCoin.getBalanceOfAddress(myWalletAddress));

console.log('\nChain: ', JSON.stringify(myCoin.chain, null, 4));
console.log('Is chain valid? ', myCoin.isChainValid());