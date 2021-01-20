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
            `yarn add --dev @types/styled-components`
   
6. 安装路由   `yarn add react-router-dom`
    再安装 它的依赖  yarn add --dev @types/react-router-dom（TS 的声明变量也加载了）
   
7. 手机下部导航栏能不用 fixed 定位就不用，（ 原因是： 可能会被键盘顶上去）
8. 选择字体时 输入关键字 `中文字体 css github`  *屏幕选择黑体*  *打印选择宋体*
9. 在 styled-component 里用$font-family 会出错，暂且现将变量放进 body 里
10. 改变图片的样式，一般用 SVG `Symbols` 方式
    参考文章： https://github.com/JetBrains/svg-sprite-loader
11.  yarn eject   只能将当期代码提交，才能使用（ 不可返回操作 ） <br />
        作用： 弹出 webpack 相关配置 (核心)， 会暴露出webpack.config.js<br />
        输入命令：yarn add --dev svg-sprite-loader
        - 注意: webpack 文件一般都会 --dev(这是个约定)
    
12. 在 webpack.config module => rules 加上 `/ webpack >= 2 multiple loaders` 下面那段代码
      options 改为空
    安装 yarn add --dev svgo-loader
    
13.  使用import引用 一定要加 console.log()  不然 图标也会不见<br/>
     涉及到  TreeShaking ，如果没有用到，将会用 TreeShaking， 将没有用的代码从树上摇下     来， 自动删除 没有用的代码<br/>
     但是 TreeShaking 不适用于 require函数中
     
14.  写完` yarn add --dev @types/webpack-env@1.15.1` 这个命令行，/src/component/icon.tsx 第10行将不会报错
15. 点击导航栏改变颜色 去*react router*搜索 `active class`

16.处理 svg图标默认颜色的方法
    在svgo-loader 里改变 options  <br/>
    详情见语雀 `旺财项目（react版）` 这样不用去一个个删除svg的默认样式<br/>
    参考文章 https://github.com/svg/svgo/blob/master/plugins/removeAttrs.js
17. surround with Emmet 再输入命令，快速多行注释
18. white-space: nowrap; //防止 前面的 备注 字样变成竖着的字样
19. 因为 Money 组件内容太多，所以将它进行模块化

20. TS => 在声明变量后面加冒号和函数类型
    类型有 FunctionComponent（简写：FC），*string* ，*number* ，*boolean*
21. 如果在 webstorm 中要改变组件名，需要先将最后 export 给断开，如果先改内部变量 ，其他关联名字也会智能跟随变化 
22. 如果在输入备注的时候会打印出两遍，那就是 index.tsx 里<React.StrictMode>严格模式下出现的 Bug，也可以删除
23. PS： React onChange 和 HTML onChange 是不一样的
    `React onChange` 会在你`输入一个字`的时候就触发
    `HTML onchange` 会在`鼠标移走`的时候触发，早于 onBlur<br/>
    但是,在这个项目里用`HTML onchange` 时输入一个字就触发，因为React 觉得这个不友好，自己改了规则
24. `src/Money/NumberPadSection.tsx` 文件里 `line 25`里 会出现 `generateOutput` 函数类型undefined 的情况，那是因为 在`generateOutput.tsx` 里没有添加 `default`
25. 


