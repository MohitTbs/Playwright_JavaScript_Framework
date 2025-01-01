exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page
        this.my_account_menu = page.locator("a[title='My Account']")
        this.login_btn = page.locator("//a[text()='Login']")
        this.swiper_pagination_bullets = page.locator("(//div[contains(@class,'carousel')])[last()]/span").all()
        this.wishlist_buttons_on_feature = page.locator("//button[@data-original-title='Add to Wish List']").all()
        this.alert_dismissible_msg = page.locator(".alert-dismissible")
        this.phones_pdas_tab = page.locator("//a[text()='Phones & PDAs']")
        this.laptops_and_notebooks_tab = page.locator("//a[text()='Laptops & Notebooks']")
        this.show_all_laptops_and_notebooks_link = page.locator("//a[text()='Show All Laptops & Notebooks']")
        this.search_box = page.locator("#search > input")

    }

    async click_on_my_account_menu() {
        await this.my_account_menu.click()
    }

    async click_on_login_btn() {
        await this.login_btn.click()
    }

    async click_on_all_footer_advertisement_bullet() {
        const bullet_array = await this.swiper_pagination_bullets
        const active_array = []
        for (let i = 0; i < bullet_array.length; i++) {
            
                await bullet_array[i].click()
                const att = await bullet_array[i].getAttribute('class')
                active_array.push(att)
                // console.log(att);
            
        }
        return active_array
    }

    async click_on_random_wish_list_button(){
        const wishlist_buttons_list = await this.wishlist_buttons_on_feature
        const ranNum = Math.floor(Math.random() * wishlist_buttons_list.length)
        await wishlist_buttons_list[ranNum].click()

    }

    async get_text_from_alert_dismissible_msg(){
        let msg = await this.alert_dismissible_msg.textContent()
        return msg
    }

    async click_on_phones_pdas_tab(){
        await this.phones_pdas_tab.click()
    }

    async click_on_laptops_and_notebooks_tab(){
        await this.laptops_and_notebooks_tab.click()
    }

    async click_on_show_all_laptops_and_notebooks_link(){
        await this.show_all_laptops_and_notebooks_link.click()
    }

    async enter_product_to_search(product_name){
        await this.search_box.click()
        await this.page.keyboard.type(product_name)
        await this.page.keyboard.press('Enter')

    }

    async navigate_to_login_page(){
        await this.click_on_my_account_menu()
        await this.click_on_login_btn()
    }
}