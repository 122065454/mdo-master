import Web3 from 'web3'
let web3 = null
export const MaxUint256 =
  '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
export const getContract = async (
  address,
  abi,
  account,
  needAccount = false
) => {
  const provider = window.ethereum || window.web3?.currentProvider
  web3 = web3 || new Web3(provider)
  if (needAccount) {
    return new web3.eth.Contract(abi, address, { from: account })
  }
  if (account) {
    const gasPrice = await web3.eth.getGasPrice()
    return new web3.eth.Contract(abi, address, { from: account, gasPrice })
  } else {
    return new web3.eth.Contract(abi, address)
  }
}
export const approveErc20Token = async (
  tokenAddress,
  account,
  contractAddr
) => {
  const tokenContract = await getContract(tokenAddress, ERC20ABI, account)
  return tokenContract.methods
    .approve(contractAddr, MaxUint256)
    .send({ from: account })
}

export const getTransaction = (hash) => {
  return web3.eth.getTransaction(hash)
}
