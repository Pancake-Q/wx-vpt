// components/goodList/goodList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
        goodList:[
          {
            name:1,
            list:1
          },
          {
            name:2,
            list:2
          },
          {
            name:3,
            list:3
          },
          {
            name:4,
            list:4
          },
          {
            name:5,
            list:5
          },
          {
            name:6,
            list:6
          }
        ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    scrollLink(e) {
     console.log(e)
    }
  }
})
