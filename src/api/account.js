import wepy from 'wepy'

export const loadAllAccounts = (afterSuccess) => {
  wepy.request({
    url: 'http://192.168.1.10:3000/accounts',
    header: {
      'access-token': '26QdnGkCG5a6-tY5tlysHA',
      'token-type': 'Bearer',
      'uid': 'joseph.yao.ruozhou@gmail.com',
      'client': 'Lso4e8dPfl7Wcr09315FFA',
      'expiry': '1519893058'
    },
    success: (response) => {
      afterSuccess(response.data)
    }
  })
}

export const addAccount = (account, afterSuccess) => {
  wepy.request({
    url: 'http://192.168.1.10:3000/accounts',
    method: 'POST',
    data: account,
    header: {
      'access-token': '26QdnGkCG5a6-tY5tlysHA',
      'token-type': 'Bearer',
      'uid': 'joseph.yao.ruozhou@gmail.com',
      'client': 'Lso4e8dPfl7Wcr09315FFA',
      'expiry': '1519893058'
    },
    success: (response) => {
      afterSuccess()
    }
  })
}

export const editAccount = (account, afterSuccess) => {
  wepy.request({
    url: `http://192.168.1.10:3000/accounts/${account.id}`,
    method: 'PUT',
    data: {
      name: account.name,
      balance: account.balance
    },
    header: {
      'access-token': '26QdnGkCG5a6-tY5tlysHA',
      'token-type': 'Bearer',
      'uid': 'joseph.yao.ruozhou@gmail.com',
      'client': 'Lso4e8dPfl7Wcr09315FFA',
      'expiry': '1519893058'
    },
    success: (response) => {
      afterSuccess()
    }
  })
}

export const deleteAccount = (account, afterSuccess) => {
  wepy.request({
    url: `http://192.168.1.10:3000/accounts/${account.id}`,
    method: 'DELETE',
    header: {
      'access-token': '26QdnGkCG5a6-tY5tlysHA',
      'token-type': 'Bearer',
      'uid': 'joseph.yao.ruozhou@gmail.com',
      'client': 'Lso4e8dPfl7Wcr09315FFA',
      'expiry': '1519893058'
    },
    success: (response) => {
      afterSuccess()
    }
  })
}
