const { test, expect, use } = require('@playwright/test')
const {HomePage} = require('../pages/homepage')
const {ProductSearchPage} = require('../pages/product_search_page')
const data = JSON.parse(JSON.stringify(require('../testdatafiles/data.json')))
const {beforeEachLogs, afterEachLogs} = require('../utilities/logsfortest')

test.beforeEach(async ({page},testInfo) => {
    beforeEachLogs(testInfo)
})

test.afterEach(async ({page},testInfo) => {
    afterEachLogs(testInfo)
})

for (let value of data.searchProducts) {


    test(`Verify the user is able to search the products: ${value}`, async ({ page }) => {

        await page.goto('')
        const hp = new HomePage(page)
        await hp.enter_product_to_search(value)
        const psp = new ProductSearchPage(page)
        const heading = await psp.get_searched_product_heading()
        expect(heading.toLowerCase()).toContain(value.toLowerCase())
        
    })
}

