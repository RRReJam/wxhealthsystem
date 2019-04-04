// pages/index4/index4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    hasUserInfo: false,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var mythis = this; 
    wx.getSetting({
      success(res){
        if (res.authSetting['scope.userInfo']){
          wx.getUserInfo({
            success(res){
              mythis.setData({
                
                avatarUrl: res.userInfo.avatarUrl,
                 userInfo: res.userInfo,
                hasUserInfo: true
              });
              
            }
          })
        }
      }
      
    })

  },
  bindGetUserInfo: function (e) {
    var that = this;
    if (!this.logged && e.detail.userInfo) {
      
      that.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onPostTap:function(event){
    wx.redirectTo({
      
      url: '../index6/index6',
    })

  },

  indexhead:function(event){
    wx.redirectTo({
      url: '../index7/index7',
    })
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})