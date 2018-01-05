const util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list:[],
    products:[],
    page:1,
    per_page:10
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.getData()
  },
  getData:function(){
    const url = 'https://wx.365yf.cc/wx_api/symbols/tickers?page=' + this.data.page
    const that = this
    util.getData(url).then(function (data) {
      if (data.data.error_code === 0){
        that.data.products = that.data.products.concat(data.data.products)
        console.log(that.data.products)
        that.setData({ list: that.data.products })
      }
    });
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }, 
  lookMore:function(){
    this.data.page ++
    this.getData()
  }
})
