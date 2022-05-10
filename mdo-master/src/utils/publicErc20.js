import ERC20ABI from '@/config/erc20.json'
import detectEthereumProvider from '@metamask/detect-provider'
import { ethers } from 'ethers'

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

export const sendTransaction = async (params, value) => {
  const ethereum = await getProvide()
  console.log('value', value)
  const amount = ethers.utils.parseUnits(String(value), 18).toHexString()
  // const chainid = ethers.utils.parseUnits(String(56),18).toHexString()
  const chainid = await getChainId()
  console.log('amount', amount, chainid, params)
  return ethereum.request({
    method: 'eth_sendTransaction',
    params: [{ ...params, value: amount, chainid }],
  })
}

// 获取chainId
export const getChainId = async () => {
  const ethereum = await getProvide()
  return ethereum.request({ method: 'eth_chainId' })
}
