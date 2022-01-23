// components/goodList/goodList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    sideList: Array,
    scrollTops: Number,
    rightCur: Number,
    leftCur: Number,
    goodList:Array,
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    scroll:function(e){
      let query = this.createSelectorQuery()
      query.selectAll('.good-type').boundingClientRect(rect => {
          console.log(rect);
      }).exec();
      const {scrollTop}=e.detail
      this.triggerEvent("handleScroll",{scrollTops:~~scrollTop})
    }
  }
})
