const logger = require('../Logging/logger')

export function beforeEachLogs(testInfo){
    logger.info(`${String(testInfo.title)} ------>  Started`)
    console.log(`${String(testInfo.title)} ------>  Started`);
}

export function afterEachLogs(testInfo){
    if(testInfo.status == "failed") {
        logger.error(`${String(testInfo.title)} ------>  Failed`)
    } else if(testInfo.status == "passed"){
        logger.info(`${String(testInfo.title)} ------>  Passed`)
        console.log(`${String(testInfo.title)} ------>  Passed`);
    }

    try {
        page.close()
    } catch (error) {
        
    }
}