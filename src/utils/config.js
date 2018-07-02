// https://card-server.show.sanqimei.com
// https://card-server.sanqimei.com
// https://app-server.show.sanqimei.com
// https://app.sanqimei.com
// https://card-server.dev.sanqimei.com
let config = {}
const hostList = {
    'dev': 'https://card-server.dev.sanqimei.com',
    'show': 'https://card-server.show.sanqimei.com',
    'test': 'https://card-server.test.sanqimei.com',
    'production': 'https://card-server.sanqimei.com'
}
const payList = {
    'dev': 'https://app-server.dev.sanqimei.com',
    'show': 'https://app-server.show.sanqimei.com',
    'test': 'https://app-server.test.sanqimei.com',
    'production': 'https://app.sanqimei.com'
}
config.env = process.env.NODE_ENV;
config.host = hostList[config.env];
config.payServer = payList[config.env];
config.pageSize = 10;
config.__VERSION__ = '0.1'; // storage 版本
config.sleepTime = 0.5; //
config.countdown = 60 // 获取验证码倒计时
config.isLoading = false;
config.cdn = '';
// config.getIp = 'https://www.taobao.com/help/getip.php';
export default config;