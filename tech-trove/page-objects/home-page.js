const Common = require("../page-objects/common");
const {productPage} = require("../page-objects/product-page");
class HomePage extends Common{
    constructor(){
        super();
        this.$collections = () => $(`//li[contains(@class,"site-nav__item ")]//a[contains(text(),"Collections")]`);
        this.$item = (itemName) => $(`//ul[contains(@class,"dropdown")]//a[contains(text(),"${itemName}")]`);
    }
    /**
     * Method to select headphones
     * @param {string} itemName 
     */
    async selectItem(itemName){
        await this.$collections().moveTo();
        await this.$item(itemName).waitForDisplayed({timeout: 5000});
        await this.$item(itemName).click();
        await productPage.$header().waitForDisplayed({timeout: 10000});
    }
}
module.exports = {homePage : new HomePage()}