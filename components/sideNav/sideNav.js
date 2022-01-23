// components/sideNav/sideNav.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        scrollTops:Number,
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
        headleSelect: function (e) {
        const {dataset:{index}}=e.currentTarget
        this.triggerEvent('handleSelect',{leftCur:index})
    },
    }
})