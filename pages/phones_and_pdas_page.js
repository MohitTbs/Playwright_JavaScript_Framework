exports.PhonesAndPDASPage = class PhonesAndPDASPage {
    constructor(page) {
        this.page = page
        this.add_to_cart_button = page.locator("//span[text()='Add to Cart']")
        this.shopping_cart_total = page.locator("#cart-total")
        this.share_checkout_btn = page.locator("//strong[normalize-space()='Checkout']")

    }


    async click_on_add_to_cart_btn(){
        await this.add_to_cart_button.first().click()
    }

    async click_shopping_cart_total(){
        await this.shopping_cart_total.click()
    }

    async click_share_checkout_btn(){
        await this.share_checkout_btn.click()
    }
}