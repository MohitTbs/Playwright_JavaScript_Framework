exports.LaptopsAndNotebooksPage = class LaptopsAndNotebooksPage {
    constructor(page) {
        this.page = page
        this.add_to_cart_btn = page.locator("//span[text()='Add to Cart']")


    }

    async click_on_add_to_cart_btn(){
        await this.add_to_cart_btn.first().click()
    }
}