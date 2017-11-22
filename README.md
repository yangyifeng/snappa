## 部署说明

项目使用gulp构建，请先安装gulp。nodejs以及npm的安装不作说明。

```
npm install -g gulp
```

安装gulp相关插件以及其他依赖。

```
cd /path/to/
npm install
```

开发调试：

```
gulp d
```
打开浏览器访问: http://localhost:8000/

部署到服务器：

```
gulp clean
gulp p
```
设置apache的vhosts，目录指向dist并开启rewrite。