class Common {
    constructor() {
        this.$mainHeader = () => $(`//a[@class="site-header__logo-link logo--has-inverted"]`); // Application Logo
        this.$productPageHeader=(headerName)=>$(`//h1[contains(text(),"${headerName}")]`) // product name header
        this.$button=(buttonName)=>$(`//span[text()="${buttonName}"]`) //button
        
    }

    async launchUrl() {
        await browser.url("https://techstrove.com/");
        await browser.maximizeWindow()
        await this.$mainHeader().waitForDisplayed()
    }
}
module.exports = Common;
