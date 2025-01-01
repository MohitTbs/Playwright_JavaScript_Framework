exports.ProductSearchPage = class ProductSearchPage{
    constructor(page){
        this.page = page
        this.searched_heading = this.page.locator("div#content > h1")

    }

    async get_searched_product_heading(){
        return await this.searched_heading.textContent()
    }
}