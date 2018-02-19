import wepy from 'wepy'

export const callApi = (endpoint, method, data, afterSuccess) => {
  const url = 'http://192.168.1.10:3000/' + endpoint
  return () => wepy.request({
    url,
    header: {
      'access-token': '26QdnGkCG5a6-tY5tlysHA',
      'token-type': 'Bearer',
      'uid': 'joseph.yao.ruozhou@gmail.com',
      'client': 'Lso4e8dPfl7Wcr09315FFA',
      'expiry': '1519893058'
    },
    method,
    data
  })
}

export const addAccount = (account, afterSuccess) => {
  callApi('accounts', 'POST', account)().then(afterSuccess)
}

export const editAccount = (account, afterSuccess) => {
  callApi(`accounts/${account.id}`, 'PUT', account)().then(afterSuccess)
}

export const deleteAccount = (account, afterSuccess) => {
  callApi(`accounts/${account.id}`, 'DELETE', {})().then(afterSuccess)
}
