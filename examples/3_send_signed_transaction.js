// const { ethers } = require("ethers");

// const INFURA_ID = '6fe46b32e9f14791be3eaaf00a8e9a96'
// const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/6fe46b32e9f14791be3eaaf00a8e9a96`)

// const account1 = '0x00613588cA2df15Bc6F1E74d21B747B5FfE2651c' // Your account address 1
// const account2 = '0x4281eCF07378Ee595C564a59048801330f3084eE' // Your account address 2

// const privateKey1 = '2985126d99653339f3db7f12d0af809dc514974b179e9daf878089c6fe4bae91' // Private key of account 1
// const wallet = new ethers.Wallet(privateKey1, provider)

// const main = async () => {
//     const senderBalanceBefore = await provider.getBalance(account1)
//     const recieverBalanceBefore = await provider.getBalance(account2)

//     console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
//     console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`)

//     const tx = await wallet.sendTransaction({
//         to: account2,
//         value: ethers.utils.parseEther("0.025")
//     })

//     await tx.wait()
//     console.log(tx)

//     const senderBalanceAfter = await provider.getBalance(account1)
//     const recieverBalanceAfter = await provider.getBalance(account2)

//     console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
//     console.log(`reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`)
// }

// main()

const { ethers } = require("ethers");

const INFURA_ID = '6fe46b32e9f14791be3eaaf00a8e9a96'
const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${INFURA_ID}`)
const privateKey1='2985126d99653339f3db7f12d0af809dc514974b179e9daf878089c6fe4bae91';
const account1='0x00613588cA2df15Bc6F1E74d21B747B5FfE2651c'
const account2='0x4281eCF07378Ee595C564a59048801330f3084eE'

const wallet = new ethers.Wallet(privateKey1, provider);

const main= async()=>{
const balance1 = await provider.getBalance(account1)
const balance2 = await provider.getBalance(account2)

    console.log(`Account1 Balance before: ${ethers.utils.formatEther(balance1)}\n`)
    console.log(`Account2 Balance before: ${ethers.utils.formatEther(balance2)}\n`)
    const tx = await wallet.sendTransaction({
                to: account2,
                value: ethers.utils.parseEther("0.025")
            });
 
    await tx.wait();

console.log(tx);
const After_balance1 = await provider.getBalance(account1)
const After_balance2 = await provider.getBalance(account2)
console.log(`Balance1 After: ${ethers.utils.formatEther(After_balance1)}\n`)
console.log(`Balance2 After: ${ethers.utils.formatEther(After_balance2)}\n`)
  }

  main()
