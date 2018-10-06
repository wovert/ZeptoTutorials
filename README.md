# Zepto

## 下载安装 Zepto

``` shell
# npm install -g bower
# bower install zepto
项目目录下安装了
  - bower_componets
    - zepto
      - bower.json
      - components.json
      - composer.json
      - zepto.js
      - zepto.min.js
  - index.html
  - js
    - zepto.js
# vim index.html
  <script charset="utf-8" src="bower_components/zepto/zepto.js"></script>
```

### Zepto.js 与 jQuery.js 的不同点

- 文件体积大小
  - Zepto.js 10K
  - jQuery 30K
- 浏览器兼容性
  - Zepto.js 偏移动
  - jQuery 偏 PC
- 部分 API 接口：表现和参数不相同
- 核心库的性能：Zepto.js 更胜一筹
- 社区发展：jQuery 生态圈更好

### 如何选择？

- WebApp 的平台定位: 移动端 Zepto.js 优于 jQuery
- 统计用户浏览器分布：Zepto.js 对现代浏览器支持更佳
- 坏消息：Foundation 从 Zepto.js 转投了 jQuery 2 阵营

## [自定义构建项目](https://github.com/madrobby/zepto)

## Zepto 工具方法

[JSbin](http://jsbin.com/?html,output)

- $ 选择元素
- $ 构造 DOM
- $ 绑定页面级事件
- $ 全局变量的注意事项

zepto和jQuery同时使用

``` js
var node = Zepto('<h1>Header Title</h1>', {
  css: {color: 'red'},
  id: 'title'
});
Zepto('body').append(node)
```

### 数组

- $.each
- $.map
- $.gep => Array.prototype

### 对象

- $.extend => Object.assign

### 工具

- $.is* => typeof, instanceof

### 节点

- $.contains

### 字符

- $.trim
- $.paraseJSON

