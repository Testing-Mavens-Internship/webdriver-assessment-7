const Common = require("./common.js");

class HomePage extends Common{
    constructor(){
        super();
        this.$navigationItem = (item) => $(`//li[contains(@class,"site-nav__item")]//a[contains(text(),'${item}')]`);
        this.$dropDownlist = () => $(`//ul[@class="site-nav__dropdown text-left"]`);
    }
    /**
     * Method for hovering on navigation item
     * @param {string} item 
     */
    async hoverOnNavigation(item){
        await this.$navigationItem(item).moveTo();
        if(item === 'Collections'){
            await this.$dropDownlist().waitForDisplayed({ timeout : 2000 });
        }
    }
    /**
     * method for click on navigation item
     * @param {string} item 
     */
    async clickOnNavigation(item){
        await this.$navigationItem(item).click();
        await this.$header(item).waitForDisplayed({ timeout : 2000 });
        await this.$header(item).scrollIntoView(500);
    }
}
module.exports = new HomePage();