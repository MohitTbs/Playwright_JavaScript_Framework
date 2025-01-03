const log4js = require('log4js');

// const workerId = process.env.TEST_WORKER_INDEX || 'default';

log4js.configure({
    appenders: {
        file: { type: 'file', filename:`testlogs.log`},
        console: { type: 'console' }
    },
    categories: {
        default: { appenders: ['file', 'console'], level: 'info' }
    }
});

module.exports = log4js;