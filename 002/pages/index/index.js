const util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list:[],
    products:[],
    answer:[],
    page:1,
    per_page:10,
    value1: '',
    isMore:true
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.getData()
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } 
    // else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } 
    else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getData:function(){
    const url = 'https://wx.365yf.cc/wx_api/symbols/tickers?page=' + this.data.page
    const that = this
    util.getData(url).then(function (data) {
      if (data.data.error_code === 0){
        that.data.products = that.data.products.concat(data.data.products)
        console.log(that.data.products)
        that.setData({ 
          list: that.data.products,
          isMore: true
        })
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
  },
  closeMore:function(){
    this.data.page=1
    this.getData()
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  enter: function () {
    const that = this
    if (this.data.inputValue === '') {
      return
    }
    const url = 'https://wx.365yf.cc/wx_api/symbols/search?symbol_code=' + this.data.inputValue
    util.getData(url).then(function (data) {
      console.log(data.data)
      if (data.data.error_code === 0) {
        that.data.answer = data.data.products
      }
      else {
        that.data.answer = data.data.error_reason
      }
      that.setData({
        list: [].concat(that.data.answer),
        value1: '',
        inputValue: '',
        isMore:false
      })
    });
  }
})
