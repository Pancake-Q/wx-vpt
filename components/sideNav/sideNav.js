// components/sideNav/sideNav.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        // scrollTops:Number,
        sideList: Array,
        scrollTops: Number,
        rightCur: Number,
        leftCur: Number,
    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {
        headleNavSearch: function (e) {
            const {
                dataset: {
                    index
                }
            } = e.currentTarget;
            this.setData({
                leftCur: index,
                rightCur: index,
                scrollTops: (index - 4) * 50
            })
            // console.log(this.data.scrollTops,"____");
            // console.log(this.data.leftCur,"__a__")

        },
    }
})