const { test, expect} = require('@playwright/test')
const {HomePage} = require('../pages/homepage')

test('Verify the working of swiper-pagination-bullet-active', async ({page}) => {
    await page.goto('')
    const hp = new HomePage(page)
    //await hp.click_on_my_account_menu()
    //await hp.click_on_login_btn()
    const active_array = await hp.click_on_all_footer_advertisement_bullet()
    for(let i of active_array){

        expect(i.includes('active')).toBeTruthy()
        
    }
    
})

test.only('Verify the user gets the message to login or create account when they add a product to wish list as a guest', async ({page}) => {
    await page.goto('')
    const hp = new HomePage(page)
    await hp.click_on_random_wish_list_button()
    await page.waitForTimeout(2000)
    let msg = await hp.get_text_from_alert_dismissible_msg()
    msg = msg.trim().toLowerCase()
    expect(msg).toContain('You must login or create an account'.toLowerCase())
    
})

