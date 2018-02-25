import wepy from 'wepy'

export const needLogin = (newValue, oldValue) => {
  if (newValue) {
    wepy.navigateTo({
      url: '/pages/login'
    })
  } else {
    wepy.navigateBack()
  }
}
