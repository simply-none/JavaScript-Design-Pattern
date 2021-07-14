# 项目总结

## 目录结构

```js
|---public
  |---favicon.ico
  |---index.html
|---src
  |---api
    |---index.js：引用（引入所有模块）
    |---module
      |---module1.js：需引入http.js文件
      |---module2.js
    |---http.js: 改造axios的拦截
    |---url.js：存放所有url对象
  |---assets
    |---img
    |---scss
      |---common
        |---global.scss
        |---elementui.scss
        |---reset.scss
        |---variable.scss
        |---color.scss
      |---module1
        |---xxx1.scss
        |---xxx2.scss
      |---module2
        |---xxx1.scss
        |---xxx2.scss
  |---common
    |---pages.vue
    |---bar.vue
  |---components
    |---module1
      |---xxx.vue
    |--module2
      |---xxx.vue
  |---utils
    |---validator
      |---a.js
      |---b.js
    |---common
      |---lib.js
      |---util.js
  |---views
    |---apagemodule
      |---a.vue
    |---bpagemodule
      |---b.vue
  |---App.vue
  |---main.js
|---.gitignore
|---.npmrc
|---babel.config.js
|---vue.config.js
|---package.json
|---readme.md
```

