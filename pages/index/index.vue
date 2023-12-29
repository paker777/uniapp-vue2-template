<template>
  <view class="content">
    <view class="card">
      <view style="padding: 0 40rpx">
        <view class="title">单号查快递</view>
        <uv-row>
          <uv-input
            placeholder="输入快递单号"
            prefixIcon="search"
            prefixIconStyle="font-size: 44rpx;color: #aaa"
            placeholderStyle="color: #aaa"
            border="none"
            clearable
            v-model="oddValue"
          ></uv-input>
          <uv-button
            text="查 询"
            color="#f7f7f7"
            :customTextStyle="{
              color: '#5f6997',
              fontWeight: 'bold',
              fontSize: '32rpx'
            }"
            @click="handelExpressage"
          ></uv-button>
        </uv-row>
      </view>
    </view>
    <!-- 宫格组件 -->
    <view class="card">
      <uv-grid :col="4">
        <uv-grid-item @click="handelSubway">
          <image src="@/static/icons/subway.svg" mode="aspectFit"></image>
          <text class="text">地铁图</text>
        </uv-grid-item>
      </uv-grid>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      key: 'USLBZ-PWICT-RIKXZ-VLDUB-POFDE-SABIQ',
      referer: 'jszl-app',
      oddValue: ''
    }
  },
  onLoad() {},
  methods: {
    handelSubway() {
      // let plugin = requirePlugin('subway')
      wx.navigateTo({
        url: `plugin://subway/index?key=${this.key}&referer=${this.referer}`
      })
    },
    handelExpressage() {
      wx.navigateTo({
        url: `plugin://kdzs-plugin/logistics-list?num=${this.oddValue}`
      })
    }
  }
}
</script>

<style lang="scss">
page {
  background-color: #f2f1f6;
}
</style>
<style lang="scss" scoped>
.content {
  padding-bottom: 20rpx;
  .card {
    margin: 20rpx 20rpx 0;
    padding: 30rpx 0;
    background-color: #fff;
    border-radius: 16rpx;
    .title {
      font-size: 30rpx;
      padding-bottom: 30rpx;
    }
    ::v-deep .uv-input {
      margin-right: 20rpx;
      padding: 20rpx !important;
      background-color: #f7f7f7;
    }
    .text {
      text-align: center;
      font-size: 24rpx;
      margin-top: 10rpx;
      padding-bottom: 10rpx;
      color: #303133;
    }
    image {
      width: 100rpx;
      height: 100rpx;
    }
  }
}
</style>
