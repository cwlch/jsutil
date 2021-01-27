module.exports = {
    head:[
      ['script',{},`
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?8773ea64a5fadbd5dc21f8ef7f809299";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `]
    ],
    title: 'jsUtil | js工具类',
    description: 'js工具类 | javascript工具类｜js基础类｜jsTool类｜校验一个变量是否为空、校验是否为正常的姓名格式、校验是否为手机号、校验是否为座机号、校验邮箱格式是否正确、校验身份证号是否正确、校验是否为金额格式、时间格式化、金额格式化',
    themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '教程', link: '/guide/' },
          { text: 'API', link: '/api/is/' },
          { text: 'GIT', link: 'https://github.com/cwlch/jsUtil.git' },
          { text: 'NPM', link: 'https://www.npmjs.com/package/js-util-all' }
        ],
        sidebar:{
          '/guide/':[''],
          '/api/' : [
            'is',
            'set',
            'get',
            'format',
            'limit',
            'ohter',
          ]
        },
        displayAllHeaders : true
      }
  } 