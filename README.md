# zooey-UI - 一个Vue UI组件
[![Build Status](https://travis-ci.org/zooeydotmango/zooey-UI.svg?branch=master)](https://travis-ci.org/zooeydotmango/zooey-UI)
## 介绍

这是我在学习Vue过程中做的一个UI框架，希望对你有用。

## 开始使用

1. 安装

    使用本框架前，请在CSS中开启border-box
    
    ```
    *, *::before, *::after {box-sizing:border-box;}
    ```
    
    IE8 及以上浏览器都支持此样式
    
    你还需要设置默认颜色等变量（后续会改）
    ```
    html {
            --button-height: 32px;
            --font-size: 14px;
            --border-radius: 4px;
            --button-active-bg: #eee;
            --button-bg: #fff;
            --border-color: #999;
            --border-color-hover: #666;
        }
    ```
    IE 15 及以上浏览器都支持此样式

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
        HelloWorld,
        'g-button':Button,
        'g-icon': Icon
      }
    }
    ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码


