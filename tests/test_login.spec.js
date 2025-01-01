const { test, expect } = require('@playwright/test')
const {HomePage} = require('../pages/homepage')
const {LoginPage} = require('../pages/login_page')

test('Login the user with valid credentials', async ({ page }) => {
    await page.goto('')
    let hp = new HomePage(page)
    await hp.click_on_my_account_menu()
    await hp.click_on_login_btn()
    let lp =new LoginPage(page)
    await lp.enter_email('hgjhhgfjr.com')
    await lp.enter_password('123trtrttrtr45tyyttr678')
    await lp.click_on_login_button()
    await page.waitForTimeout(5000)

})