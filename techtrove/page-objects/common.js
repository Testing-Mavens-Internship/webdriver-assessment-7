class Common{
    constructor(){
        this.$logo = () => $(`//h1[@class="site-header__logo"]`);
        this.$header = (text) => $(`//h1[contains(text(),'${text}')]`);
    }
    /**
     * Method for loading url of Techtrove application
     */
    async openUrl(){
        await browser.url('https://techstrove.com/');
        await browser.maximizeWindow();
        await this.$logo().waitForDisplayed({ timeout : 2000 });
    }
}
module.exports = Common;