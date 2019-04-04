// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  formSubmit: function (e) {
    const db = wx.cloud.database()
    db.collection('message').add({

      data: {
        messagetext: e.detail.value.messagetext,
        nickname: e.detail.value.nickname,
        avatarUrl: e.detail.value.avatarUrl


     

      },
      success: res => {
        this.setData({
          messagetext: e.detail.value.messagetext,
          nickname: e.detail.value.nickname,
          avatarUrl: e.detail.value.avatarUrl
        

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



  login: function () {
    var that = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo),
                that.setData({
                  nickName: res.userInfo.nickName,
                  avatarUrl: res.userInfo.avatarUrl,
                })
            }
          })
        }
      }
    })
  },

  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
  },

  
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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