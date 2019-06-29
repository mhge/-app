import Mock from "mockjs"

var list=Mock.mock({
    "list|3-8":[
        {
            "title": "@ctitle(5)",
            "img":"@dataImage()",
            "address":"@city()",
            "date":"@date()",
            "name":"@cname()",
            "num":"@pick(['12', '57', '27', '45', '35'])",
            "numed":"@pick(['200', '300', '400', '600', '700'])",
            "bedate":"@date()",
            "afdate":"@date()",
            "consulter":"@cname()",
            "detail":"@cparagraph(2)",
        }
    ]
})

Mock.mock("http://www.jingdong.com/api",list)