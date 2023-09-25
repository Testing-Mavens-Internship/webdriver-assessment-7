module.exports = class Common{
    constructor(){
        this.$header = () => $(`//span[@class="announcement-text"]`);
        this.$logo = () => $(`//div[contains(@class,"header-item--logo")]`);
        this.$button = (value) => $(`//button[contains(@class,"${value}")]`);
    }
    /**
     * Method to launch url
     */
    async launchUrl(){
        await browser.url("https://techstrove.com/");
        await browser.maximizeWindow();
        await this.$header().waitForDisplayed({timeout: 10000});
    }
}