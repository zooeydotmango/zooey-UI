# zooey-UI - 一个Vue UI组件[![Build Status](https://travis-ci.org/zooeydotmango/zooey-UI.svg?branch=master)](https://travis-ci.org/zooeydotmango/zooey-UI)
## 介绍

这是我在学习Vue过程中做的一个UI框架，希望对你有用。

## 开始使用

1. 使用须知

    使用本框架前，请在CSS中开启border-box
    
    ```
    *, *::before, *::after {box-sizing:border-box;}
    ```
    
    IE8 及以上浏览器都支持此样式
    

2. 安装 zooeyui
    ```
    npm install --save zooeyui
    ```
    
3. 引入 zooeyui
    ```
    import {Button, ButtonGroup, Icon} from 'zooeyui'
    import 'zooeyui/dist/index.css'
    export default {
      name: 'app',
      components: {
        'g-button':Button,
        'g-icon': Icon
      }
    }
    ```
    共提供了`Button`，`Tab`，`Input`，`Grid`，`Layout`，`Toast`，`Popover`等常用组件，可以按需求引入
    

## 文档
[官网地址](https://zooeydotmango.github.io/zooey-UI/)

## 联系方式



