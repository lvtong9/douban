var Mock=require("mockjs");

// 配置数据请求
Mock.mock("/dbbooks","get",require("./json/shouye.json"))
Mock.mock("/dbmovie","get",require("./json/movie.json"))
Mock.mock("/dbfind","get",require("./json/faxianhaodianying.json"))
Mock.mock("/dbbook","get",require("./json/book.json"))
Mock.mock("/dbgoodbook","get",require("./json/goodbook.json"))
Mock.mock("/dbgroup","get",require("./json/xiaozu.json"))
Mock.mock("/all","get",require("./json/all.json"))