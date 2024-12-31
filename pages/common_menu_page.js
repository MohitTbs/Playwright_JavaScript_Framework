exports.CommonMenuPage = class CommonMenuPage {
    constructor(page) {
        this.page = page
        this.shopping_cart_btn = page.locator("//span[text()='Shopping Cart']")


    }

    async click_on_shopping_cart_btn(){
        await this.shopping_cart_btn.click({force:true})
    }
}