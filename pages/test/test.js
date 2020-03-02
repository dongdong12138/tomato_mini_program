Page({
    data: {
        message: '我是董董',
        id: 1,
        condition: true,
        flag: false,
        length: 2,
        object: {
            key: 'hello'
        },
        array: ['world', 1, 2, 3, 4],
        arr: [1, 2, 3],
        obj: {
            text: '我是董董'
        }
    },

    click() {
        console.log(this.data.arr[this.data.arr.length - 1])
        console.log(this.data.arr[this.data.arr.length - 1] + 1)
        console.log(this.data.arr.concat(this.data.arr[this.data.arr.length - 1] + 1))
        this.setData({
            arr: this.data.arr.concat(this.data.arr[this.data.arr.length - 1] + 1),
            obj: {
                text: '我不是董董'
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log('onLoad')
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        console.log('onReady')
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        console.log('onShow')
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {
        console.log('onHide')
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {
        console.log('onPullDownRefresh')
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {
        console.log('onShareAppMessage')
    }
})