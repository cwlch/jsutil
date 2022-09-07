/*
 * @Author: ch cwl_ch@163.com
 * @Date: 2022-09-07 06:23:43
 * @LastEditors: ch
 * @LastEditTime: 2022-09-07 08:03:31
 * @Description: file content
 */
import { defaultTheme } from '@vuepress/theme-default'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default {
  head: [
    ['meta', { name: 'keywords', content: 'jsutil函数库,jsutil工具类,js工具类,javascript工具类,js基础类,jsTool类,时间格式化,校验手机号,校验邮箱格式,校验身份证号,校验金额格式,金额格式化,校验座机号,校验为空,校验姓名格式'}],
    ['script', {}, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?8773ea64a5fadbd5dc21f8ef7f809299";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
        })();
      `]
  ],
  title: 'Jsutil',
  description: 'jsutil是一个功能型JavaScript函数库，一个功能型js工具类',
  theme: defaultTheme({
    logo:'/imgs/logo.png',
    navbar: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/guide/' },
      { text: 'API', link: '/api/is/' },
      { text: 'GIT', link: 'https://github.com/cwlch/jsutil.git' },
      { text: 'NPM', link: 'https://www.npmjs.com/package/@gykeji/jsutil' }
    ],
    sidebar: {
      '/guide/': [''],
      '/api/': [
        'is',
        'set',
        'get',
        'format',
        'limit',
        'ohter'
      ]
    },
    displayAllHeaders: true,
    themePlugins : {
      git : false
    },
  }),
  plugins: [
    docsearchPlugin({
      appId: 'PB5HMXOQ5M',
      apiKey: '3c48036086bcf47c9b5f3e46dadec8c1',
      indexName: 'jsutil',
    })
  ]
  
}

