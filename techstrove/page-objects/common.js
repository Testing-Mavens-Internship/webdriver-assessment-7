class Common {
    constructor() {
        this.$header = () => $(`//span[text()="TechTrove"]`);
        this.$header2 = () => $(`//h1[contains(text(),Headphone)]`);
    }

    /**Load MavenKonnect URL */
    async loadUrl() {
        await browser.url('https://techstrove.com/');
        await browser.maximizeWindow();
        await this.$header().waitForDisplayed({ timeout: 5000 });
    }
}
module.exports = Common;