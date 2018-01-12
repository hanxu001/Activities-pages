//index.js
//获取应用实例
const util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    dialog_list:[],
    inputValue:'',
    value1:'',
    answer:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  enter: function () {
    const that = this
    if (this.data.inputValue === ''){
      return
    }
    that.setData({
      dialog_list: that.data.dialog_list.concat({
        statue: 0,
        content: that.data.inputValue
      }),
    })
    const url = 'https://wx.365yf.cc/wx_api/symbols/ticker?symbol_code=' + this.data.inputValue
    
    util.getData(url).then(function (data) {
      console.log(data.data)
      if (data.data.symbol.code){
        that.data.answer = data.data.symbol
      }
      else{
        that.data.answer = ''
      }
      // that.data.dialog_list = that.data.dialog_list.concat({
      //   statue:0,
      //   content: that.data.inputValue
      // }).concat({
      //   statue: 1,
      //   content: that.data.answer
      // })
      that.setData({
        dialog_list: that.data.dialog_list.concat({
          statue: 1,
          content: that.data.answer
        }),
        value1: '',
        inputValue:''
      })
    });
  }
})
