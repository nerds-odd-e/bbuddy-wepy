import wepy from 'wepy'

const callApi = (endpoint, method, data, afterSuccess) => {
  const url = 'http://192.168.1.10:3000/' + endpoint
  wepy.request({
    url,
    header: {
      'access-token': '26QdnGkCG5a6-tY5tlysHA',
      'token-type': 'Bearer',
      'uid': 'joseph.yao.ruozhou@gmail.com',
      'client': 'Lso4e8dPfl7Wcr09315FFA',
      'expiry': '1519893058'
    },
    method,
    data,
    success: (response) => {
      afterSuccess(response.data)
    }
  })
}

export const loadAllAccounts = (afterSuccess) => {
  callApi('accounts', 'GET', {}, afterSuccess)
}

export const addAccount = (account, afterSuccess) => {
  callApi('accounts', 'POST', account, afterSuccess)
}

export const editAccount = (account, afterSuccess) => {
  callApi(`accounts/${account.id}`, 'PUT', account, afterSuccess)
}

export const deleteAccount = (account, afterSuccess) => {
  callApi(`accounts/${account.id}`, 'DELETE', {}, afterSuccess)
}
