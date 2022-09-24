######    建立HTTP服务器    ######

##  1. 导入模块
npm install -g json-server

## 2. 新建建立 db.json文件 放入一下内容
```````````````````````````js
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typ i code" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typ i code" }
}
```````````````````````````

## 3. 终端执行 启动服务器
npx json-server --watch db.json
## 3.2 延时两秒
npx json-server --watch db.json -d 2000
