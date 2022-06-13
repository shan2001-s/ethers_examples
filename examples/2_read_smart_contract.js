const { ethers } = require("ethers");

const INFURA_ID = '6fe46b32e9f14791be3eaaf00a8e9a96'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
];

const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F' // DAI Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const name = await contract.name()
    const symbol = await contract.symbol()
    const totalSupply = await contract.totalSupply()

    console.log(`\nReading from ${address}\n`)
    console.log(`Name: ${name}`)
    console.log(`Symbol: ${symbol}`)
    console.log(`Total Supply: ${totalSupply}\n`)

    const balance = await contract.balanceOf('0x6c6Bc977E13Df9b0de53b251522280BB72383700')

    console.log(`Balance Returned: ${balance}`)
    console.log(`Balance Formatted: ${ethers.utils.formatEther(balance)}\n`)
}

main()


// const {ethers}  = require("ethers");
// const Infura_ID ='6fe46b32e9f14791be3eaaf00a8e9a96';
// const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${Infura_ID}`);
// const ERC20_ABI=[
//     "function balanceOf(address) view returns (uint256)",
//     "function decimals() view returns (uint8)",
//     "function symbol() view returns (string)",
//     "function name() view returns (string)",
// ]

// const address="0x00613588cA2df15Bc6F1E74d21B747B5FfE2651c"
// const contract = new ethers.Contract( address , ERC20_ABI , provider )

// const name= contract.name;
// const balance=contract.balanceOf(address);
// const symbol=contract.symbol;
// const decimals=contract.decimals;

// console.log(name);