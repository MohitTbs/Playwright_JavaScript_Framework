exports.LoginPage = class LoginPage{
    constructor(page){
        this.page = page
        this.email_box = this.page.locator("#input-email")
        this.password_box = this.page.locator("#input-password")
        this.login_button = this.page.locator("input[type=submit]")

    }

    async enter_email(email){
        await this.email_box.fill(email)
    }

    
    async enter_password(password){
        await this.password_box.fill(password)
    }

    async click_on_login_button(){
        await this.login_button.click()
    }

    async do_login(email, password){
        await this.enter_email(email)
        await this.enter_password(password)
        await this.click_on_login_button()
    }
}