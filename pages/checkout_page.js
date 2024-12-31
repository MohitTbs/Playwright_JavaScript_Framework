exports.CheckOutPage = class CheckOutPage {
    constructor(page) {
        this.page = page
        this.guest_checkout_radio_btn = page.locator("//label[normalize-space()='Guest Checkout']")
        this.continue_btn = page.locator("#button-account")
        this.fname = page.locator("//input[@name='firstname']")
        this.lname = page.locator("//input[@name='lastname']")
        this.email = page.locator("//input[@name='email' and @id='input-payment-email']")
        this.telephone = page.locator("//input[@name='telephone']")
        this.address1 = page.locator("//input[@name='address_1']")
        this.city = page.locator("//input[@name='city']")
        this.postcode = page.locator("//input[@name='postcode']")
        this.country_drpdwn = page.locator("#input-payment-country")
        this.state_drpdwn = page.locator("#input-payment-zone")
        this.continue_btn_2 = page.locator("#button-guest")
        this.continue_btn_shipping = page.locator("input#button-shipping-method")
        this.continue_btn_payment = page.locator("input#button-payment-method")
        this.terms_and_conditions_checbox = page.locator("//input[@name='agree']")
        this.confirm_order_btn = page.locator("input#button-confirm")

    }


    async click_on_guest_checkout_radio_btn() {
        await this.guest_checkout_radio_btn.click()
        await this.page.waitForTimeout(1000)
    }

    async click_on_continue_btn() {
        await this.continue_btn.click()
    }

    async enter_first_name(fname) {
        await this.fname.fill(fname)
    }

    async enter_last_name(lname) {
        await this.lname.fill(lname)
    }

    async enter_email(email) {
        await this.email.fill(email)
    }

    async enter_telephone(telephone) {
        await this.telephone.fill(telephone)
    }

    async enter_address1(address1) {
        await this.address1.fill(address1)
    }

    async enter_city(city) {
        await this.city.fill(city)
    }

    async enter_postcode(postcode) {
        await this.postcode.fill(postcode)
    }

    async select_country_from_drpdwn(country_name){
        await this.country_drpdwn.selectOption(country_name)
    }

    async select_state_from_drpdwn(state_name){
        await this.state_drpdwn.selectOption(state_name)
    }

    async click_on_continue_btn2() {
        await this.continue_btn_2.click()
    }

    async click_on_continue_btn_shipping() {
        await this.continue_btn_shipping.click()
    }

    async click_on_continue_btn_payment() {
        await this.continue_btn_payment.click()
    }

    async click_on_terms_and_conditions_checbox(){
        await this.terms_and_conditions_checbox.click()
    }

    async click_on_confirm_order_btn(){
        await this.confirm_order_btn.click()
    }




}
