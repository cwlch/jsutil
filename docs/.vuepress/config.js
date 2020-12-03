module.exports = {
    title: 'jsUtil | js工具类',
    description: 'js工具类｜js基础类｜jsTool类｜js邮箱验证｜js手机号验证｜ajax请求导出文件 | http请求导出文件',
    themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '教程', link: '/guide/' },
          { text: 'API', link: '/api/is/' },
          { text: 'GIT', link: 'https://github.com/cwlch/jsUtil.git' },
          { text: 'NPM', link: 'https://www.npmjs.com/package/js-util' }
        ],
        sidebar:{
          '/guide/':[''],
          '/api/' : [
            'is',
            'set',
            'get',
            'format',
            'ohter',
          ]
        },
        displayAllHeaders : true
      }
  } 