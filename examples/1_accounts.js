// const { ethers } = require("ethers");

// const INFURA_ID = '6fe46b32e9f14791be3eaaf00a8e9a96'
// const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${INFURA_ID}`)

// const address = '0x00613588cA2df15Bc6F1E74d21B747B5FfE2651c'

// const main = async () => {
//     const balance = await provider.getBalance(address)
//     console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
// }

// main()

const { ethers } = require("ethers");
 const Infura_ID ='6fe46b32e9f14791be3eaaf00a8e9a96';
const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${Infura_ID}`);
const main = async()=>{
    const address='0x00613588cA2df15Bc6F1E74d21B747B5FfE2651c'
const Get_balance = await provider.getBalance(address)

console.log(ethers.utils.formatEther(Get_balance))
};
 main();
