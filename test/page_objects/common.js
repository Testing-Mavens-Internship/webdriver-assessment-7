class Common {
    //locator
    constructor(){
        this.$header = () => $('//h1[@class="site-header__logo"]');
    }
    /**
    * function for launching url
    */
   async openUrl() {
    await browser.url('https://techstrove.com/');
    await browser.maximizeWindow();
    await this.$header().waitForDisplayed({setTimeout:20000});
 }
}
module.exports = Common;