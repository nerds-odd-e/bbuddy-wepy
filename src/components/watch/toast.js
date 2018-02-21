import wepy from 'wepy'

export const message = (newValue, oldValue) => {
  if (newValue) {
    wepy.showToast({
      title: newValue,
      icon: 'success',
      duration: 1000
    })
  }
}
