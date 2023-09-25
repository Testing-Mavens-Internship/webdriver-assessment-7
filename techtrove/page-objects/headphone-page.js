const Common = require("./common.js");

class HeadphonePage extends Common{
    constructor(){
        super();
        this.$productTile = (product) => $(`//div[contains(text(),'${product}')]/../preceding-sibling::div`);
        this.$quickViewButton = (product) => $(`//div[contains(text(),'${product}')]/../preceding-sibling::div//span`);
        this.$productTitle = (title) => $(`//p[contains(text(),'${title}')]`);
        this.$productPrice = (product) => $(`//p[contains(text(),'${product}')]/..//span[@class="product__price"]`);
        this.$colorField = () => $(`//select[contains(@id,"SingleOptionSelector")]`);
        this.$colorList = (color) =>$(`//option[@value="${color} With Box"]`)
        this.$button = (product, type) => $(`//p[contains(text(),'${product}')]/..//button//span[contains(text(),"${type}")]/..`)
    }
    /**
     * Method for click on product tile
     * @param {string} product 
     */
    async clickOnProduct(product){
        await this.$productTile(product).moveTo();
        await this.$quickViewButton(product).click();
        await this.$productTitle(product).waitForDisplayed({ timeout : 3000 });
    }
    /**
     * Method for setting color, quantity then add product to cart
     * @param {string} product 
     * @param {string} color 
     * @param {number} quantity 
     * @param {string} elementToDisplayed
     */
    async setColorAndQuantity(product, color, quantity, elementToDisplayed){
        await this.$colorField().click();
        await this.$colorList(color).waitForDisplayed({ timeout : 2000 });
        await this.$colorList(color).click();
        let count = 1;
        do {
             await this.$button(product,"+").click();
             count ++ ;
        }
        while (count < quantity);
        await this.$button(product, "Add to cart").scrollIntoView({ block : 'center'});
        await this.$button(product, "Add to cart").click();
        await elementToDisplayed.waitForDisplayed({ timeout : 20000 });
    }
}
module.exports = new HeadphonePage();