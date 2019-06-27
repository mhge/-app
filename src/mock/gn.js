import Mock from 'mockjs'
var prolist = Mock.mock({
  "list|5": [
    {
      "pid|+1":0,
      "name":"@cname()",
      "address":"@county(true)",
      "wb":"@upper",
      "img":"@image()"
    }
  ]
})

Mock.mock('http://www.baidu.com/api',prolist)
