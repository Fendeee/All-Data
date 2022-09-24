## 单文件组件（脚手架）使用

##  1.  组件名.vue      组件结构、交互、样式        （快捷方式 <+V ）

##  2.  App.vue         汇总所有的组件

##  3.  main.js         入口文件（注册vm）

##  4.  index.html      页面容器

##  5.  创建脚手架       控制台：vue create vue_test（项目名）

##  6.  运行脚手架       npm run serve






#   Vue文件报错 —— package.json文件parserOptions添加 "requireConfigFile": false 
<!-- Parsing error: No Babel config file detected for D:\xk-project\demo\vue.config.js. Either disable config file checking with requireConfigFile: false, or configure Babel so that it can find the config files.eslint -->
````json
"parserOptions": {
      "parser": "@babel/eslint-parser",
      "requireConfigFile": false
    },
````
#   vue文件报错 —— jsconfig.json文件compilerOptions添加 "jsx": "preserve",
<!-- TypeScript intellisense is disabled on template.....
在模板上禁用类型记录智能感知。 -->
`````json
"compilerOptions":{
    "jsx": "preserve",
}
`````