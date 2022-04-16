import ERC20ABI from '@/config/erc20.json'
import detectEthereumProvider from '@metamask/detect-provider'
import { ethers } from 'ethers'

// import Web3 from 'web3'

// let web3 = null
// export const MaxUint256 =
//   '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
// export const getContract = async (
//   address,
//   abi,
//   account,
//   needAccount = false
// ) => {
//   const provider = window.ethereum || window.web3?.currentProvider
//   web3 = web3 || new Web3(provider)
//   if (needAccount) {
//     return new web3.eth.Contract(abi, address, { from: account })
//   }
//   if (account) {
//     const gasPrice = await web3.eth.getGasPrice()
//     return new web3.eth.Contract(abi, address, { from: account, gasPrice })
//   } else {
//     return new web3.eth.Contract(abi, address)
//   }
// }
// export const approveErc20Token = async (
//   tokenAddress,
//   account,
//   contractAddr
// ) => {
//   const tokenContract = await getContract(tokenAddress, ERC20ABI, account)
//   return tokenContract.methods
//     .approve(contractAddr, MaxUint256)
//     .send({ from: account })
// }

// export const getTransaction = (hash) => {
//   return web3.eth.getTransaction(hash)
// }
// // 预售转账
// export const transfer = async (value, account) => {
//   const bnb_token = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
//   // 接受代币的地址
//   const address = '0x873463b56aEcCd6b2E01628775971EdD31D11Fc0'
//   // const num = new BigNumber(value).times(new BigNumber(10).pow(18))
//   const num = ethers.utils.parseUnits(String(value)).toHexString()
//   const tokenContract = await getContract(bnb_token, ERC20ABI)
//   return tokenContract.methods.transfer(address, num).send({ from: account })
// }

export const getSigner = async () => {
  const ethereum = await getProvide()
  const provider = new ethers.providers.Web3Provider(ethereum)
  return provider.getSigner()
}

/** get the contract of the address
@param address -> erc20 address
**/
export const getContract = async (address) => {
  const provider = await getSigner()
  return new ethers.Contract(address, ERC20ABI, provider)
}
export const transfer = async (value, account) => {
  const bnb_token = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
  // 接受代币的地址
  // const address = '0x6eBC2a017306216e5a4DB1dE6Ae2D408189bE704'
  const address = '0x873463b56aEcCd6b2E01628775971EdD31D11Fc0'

  // const address = '0x0883245d96e9C56f56A69C52A0ad70edFf1eB2bb'

  const tokenContract = await getContract(bnb_token)
  console.log('value', value)
  const num = ethers.utils.parseUnits(String(value)).toHexString()
  // const num = new BigNumber(value).times(new BigNumber(10).pow(18)).toString(10)
  console.log('num', num)
  return tokenContract['transfer'](address, num)
}
// getProvide
export const getProvide = async () => {
  const provider = await detectEthereumProvider()
  return provider
}
