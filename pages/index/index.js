// pages/index/index.js
import http from '../../utils/http';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList:[],
    showKnow:false,
    classList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBanner(),
    this.getPublicList()
  },
  getBanner(){
    http.get('/banner').then(data=>{
      // console.log(data);
      this.setData({
        bannerList:data.data
      })
    })
  },
  tapName(e){
    console.log(e);
    this.setData({
       showKnow:true
    })
   
  },
  closeKonw(){
    // 父级方法，要在子组件触发
    // 接收从子组件传递的参数
    // console.log(e.detail)
    this.setData({
      showKnow:false
    })
  },
  getPublicList(){
    http.get('/publicList').then(data=>{
      console.log(data);
      this.setData({
        classList:data.data
      })
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