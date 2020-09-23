const navConf = require('./conf/navigator')
const sidebarConf = require('./conf/sidebar')

module.exports = {
    title: 'Kimme',
    description: 'This is my blog',
    port: '9000',
    dest: './dist',
    themeConfig: {
        repo: 'Kimsome/Kimme-blog',
        repoLabel: '查看源码',
        nav: navConf,
        sidebar: sidebarConf,
        lastUpdated: 'Last Updated'
    }
}