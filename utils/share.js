export default {
  //#ifdef MP-WEIXIN
  onShareAppMessage() {
    return {
      title: '举手之劳P',
      path: '/pages/index/index',
      imageUrl: '/static/logo.jpg',
      success: res => {
        console.info(res)
      }
    }
  }
  //#endif
}
