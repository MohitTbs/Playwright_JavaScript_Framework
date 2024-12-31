exports.CheckoutSuccessPage = class CheckoutSuccessPage {
    constructor(page) {
        this.page = page
        this.success_msg = page.locator("//div[@id='content']/p[1]")

    }

    async get_placed_order_msg(){
        return await this.success_msg.textContent()
    }
}