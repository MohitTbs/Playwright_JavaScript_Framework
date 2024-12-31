exports.ProductPage = class ProductPage {
    constructor(page) {
        this.page = page
        this.add_to_cart_btn = page.locator("#button-cart")
        this.checkout_btn = page.locator("//a[text()='Checkout']")

    }

    async click_on_add_to_cart_btn(){
        await this.add_to_cart_btn.first().click()
        await this.page.waitForTimeout(1000)
    }

    async click_on_checkout_btn(){
        await this.checkout_btn.click()
    }
}