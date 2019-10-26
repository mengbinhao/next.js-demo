### 手动配置next.js

### why use next.js
1. 首屏渲染时间长
2. SEO不友好

### next.js优点
1. 搭建轻松
2. 自带数据同步 SSR
3. 丰富插件，自己形成生态
4. 灵活配置

### create-next-app
- npm i create-next-app -g
- create-next-app xxxx

### knowledge
1. 按照目录创建route
2. 创建组建
3. 声明式导航与编程式导航
  - `React.Children.only expected to receive a single React element child`
4. dync跳转
  - 只能使用query方式传参
5. next route hooks
  - routeChangeStart(url)
  - routeChangeComplete(url)
  - routeChangeError(err, url)
  - beforeHistoryChange(url)
  - hashChangeStart(url)
  - hashChangeComplete(url)

6. 全部的异步请求写到getInitialProps
7. 使用Style JSX编写CSS
  - 不能直接`import xxx.css`
  - 使next支持`import xxx.css`
  ```bash
  yarn add @zeit/next-css
  # 配置next.config.js

  # relaunch
  ```
8. lazyload
  - 第三方模块
  - 自定义组建
9. 自定义Head for SEO
  - 每个组建单独写HEAD
  - HEAD抽取成公共的组建

10. 按需加载antd
```bash
yarn add antd
yarn add babel-plugin-import

# 建立.babelrc
{
  "presets":["next/babel"],  #Next.js的总配置文件，相当于继承了它本身的所有配置
  "plugins":[     #增加新的插件，这个插件就是让antd可以按需引入，包括CSS
    [
      "import",
        {
          "libraryName":"antd",
          "style":"css"
        }
    ]
  ]
}
```

11. 处理antd打包的坑