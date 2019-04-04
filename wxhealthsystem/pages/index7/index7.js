// pages/index7/index7.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  im1:function(event){
    console.log(event);
   wx.navigateTo({
     url: '../image1/image1?newsid=',
   })
  },

  im2: function (event) {
    wx.navigateTo({
      url: '../image2/image2',
    })
  },

  im3: function (event) {
    wx.navigateTo({
      url: '../image3/image3',
    })
  },
  healthtestindex:function(event){
    wx.navigateTo({
      url: '../test/test',
    })
  },
  healthtestindex2:function(event){
     wx.navigateTo({
       url: '../test2/test2',
     })
  },
  messageindex:function(){
    wx.navigateTo({
      url: '../message/message',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (event) {


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