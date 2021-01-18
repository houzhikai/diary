
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