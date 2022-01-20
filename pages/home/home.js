// index.js
// 获取应用实例
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgFall: [],
        navList: [{
                title: "拍买行",
                name: "online",
                path: "/online",
                icon: "https://cdn01t.weipaitang.com/sky/common/houtaitp/image/20210730/0e75d9db26ed4881ba9293927fe6ef5e-W159H159",
            },
            {
                title: "众筹",
                name: "raise",
                path: "/raise",
                icon: "https://cdn01t.weipaitang.com/banner/2021012895caee20-f6dc-6c49-2210-f776e4063120-W207H207",
            },
            {
                title: "直播",
                name: "live",
                path: "/live",
                icon: "https://cdn.weipaitang.com/banner/20201112a7d80228-8ad1-70d2-d186-454a03d0f2ff-W159H159",
            },
            {
                title: "鉴宝",
                name: "treasure",
                path: "/treasure",
                icon: "https://cdn01t.weipaitang.com/sky/common/houtaitp/image/20210730/c32b2f9b731744c3908adeea34c463f8-W159H159",
            },
        ]
    },

    getImgFall: function () {
        wx.request({
            url: 'http://mock.t4un.com/mock/283/getImgFall',
            method: 'GET',
            success: data => {
                this.setData({
                    imgFall: this.data.imgFall.concat(data.data)
                })
            }
        })

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log("aa")
        this.getImgFall()
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
        this.getImgFall()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})