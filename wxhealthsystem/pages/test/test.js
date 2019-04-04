
var util = require('../util/util.js');
Page({

  res: function (e) {
    const db = wx.cloud.database()
    db.collection('user').add({
     
  data: {
    username: e.detail.value.username,
    userage: e.detail.value.userage,
    usersex: e.detail.value.usersex,
    userweight:e.detail.value.userweight,
    userstep: e.detail.value.userstep,
    userdate: e.detail.value.userdate


  },
      success: res => {
        this.setData({
          username: e.detail.value.username,
          userage: e.detail.value.userage,
          usersex: e.detail.value.usersex,
          userweight: e.detail.value.userweight,
          userstep: e.detail.value.userstep,
          userdate: e.detail.value.userdate
         
        })
        wx.showToast({
          title: '新增记录成功'
        }),
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)

      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
    },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = util.formatTime(new Date())
    //为页面中time赋值
    this.setData({
      time: time
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