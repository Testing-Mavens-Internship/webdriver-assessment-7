module.exports = class Common{
    constructor() {
        this.$headerItem = (value) => $(`//h1[contains(text(),"${value}")]`);
    }
    /**
     * Method to launch the url
     */
    async openUrl(value){
        await browser.url('https://techstrove.com/collections');
        await browser.maximizeWindow();
        await value.waitForDisplayed({timeout:3000});
    }
}