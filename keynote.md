
yarn global add create-react-app@3.4.1 （亦可用 npm 全局安装）
create-react-app morney --template typescript（项目名可以自定）   全局使用TS

不喜欢自动，就运行 echo 'BROWSER=none' > .env 再 yarn start

版本号最好与视频一致

1.  .env里写 BROWSER=none  再次执行 yarn start不会另打开一页
2.  .gitignore 里加上 /.vscode 上传文件不会加上 .vscode文件
3.  js 
    jsx  - 支持标签的JS
    .ts  - TypeScript
    .tsx - 支持标签的TS（推荐）
    
4. yarn add node-sass@npm:dart-sass 在本地使用node-sass，但是用dart-sass进行偷梁换柱
5. 安装 styled-components
        但是只安装这个不会提示全名称，再执行
            yarn add --dev @types/styled-components
   
6. 安装路由   yarn add react-router-dom
    再安装 它的依赖  yarn add --dev @types/react-router-dom（TS 的声明变量也加载了）
   
7. 手机下部导航栏能不用 fixed 定位就不用，（ 原因是： 可能会被键盘顶上去）
8. 选择字体时 输入关键字 `中文字体 css github`  屏幕选择黑体  打印选择宋体
9. 在 styled-component 里用$font-family 会出错，暂且现将变量放进 body 里
10. 改变图片的样式，一般用 SVG Symbols 方式
11.  yarn eject   只能将当期代码提交，才能使用（ 不可返回操作 ） 
        作用： 弹出 webpack 相关配置 (核心)， 会暴露出webpack.config.js
