// components/nav/nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navList: Array
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
    headlerOnline:function(e){
      const {dataset:{name,path}}=e.currentTarget
      console.log(name,path)
      this.triggerEvent('headlerOnline',{name,path})
    }
  }
})