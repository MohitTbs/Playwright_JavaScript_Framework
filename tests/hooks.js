const { test, events } = require('@playwright/test');
// const logger = require('../Logging/logger')


test.beforeEach(async ({page},testInfo) => {
    //logger.info(`${String(testInfo.title)} ------>  Started`)
    console.log(`${String(testInfo.title)} ------>  Started`);
})

test.afterEach(async ({page},testInfo) => {
    
    if(testInfo.status == "failed") {
        //logger.error(`${String(testInfo.title)} ------>  Failed`)
    } else if(testInfo.status == "passed"){
        //logger.info(`${String(testInfo.title)} ------>  Passed`)
        console.log(`${String(testInfo.title)} ------>  Passed`);
    }

    try {
        page.close()
    } catch (error) {
        
    }
})