# npm 相关

## 镜像相关

设置淘宝镜像

```sh
npm config set registry https://registry.npm.taobao.org
# yarn config set registry https://registry.npm.taobao.org
```

查看镜像源地址

```sh
npm config get registry
# yarn config get registry
```

## 查看全局安装过的包

```sh
npm list -g --depth 0
# yarn global list --depth=0
```

## 查看全局安装的模块位置

```sh
npm root -g
# yarn global dir
```

## 清除全局缓存

```sh
npm cache clean -f
# yarn cache clean
```

## 脚本命令相关

执行顺序：并行执行 `&`，继发执行 `&&`

例 1：`npm run script1.js & npm run script2.js`

例 2：`npm run script1.js && npm run script2.js`

获取当前正在运行的脚本名称 `process.env.npm_lifecycle_event`
