const Common = require("./common.js");

class CartPage extends Common{
    constructor(){
        super();
        this.$cartHeader = (header) => $(`//div[@class="h2 drawer__title"][text()='${header}']`);
        this.$displayedColor = () => $(`//span[@class="ajaxcart__product-meta"]`);
        this.$unitPrice = () => $(`//span[@class="ajaxcart__price"]`);
        this.$totalPrice = () => $(`//p[@class="ajaxcart__price"]`);
        this.$reduceButton = () => $(`//div[@class="ajaxcart__quantity"]//button[contains(@aria-label,"Reduce item")]`);
        this.$checkOutButton = () => $(`//button[contains(text(),"Check out")]`);
    }
    /**
     * Method for verifying total price
     * @param {string} unitPrice 
     * @param {string} totalPrice 
     * @param {string} quantity 
     * @returns boolean
     */
    async verifyTotal(unitPrice, totalPrice, quantity){
        let total = await parseFloat(unitPrice * quantity).toFixed(2) ;
        if(totalPrice == total){
            return true;
        }
    }
    /**
     * Method for reduce item by One
     */
    async reduceItem(){
        await this.$reduceButton().click;
    }
    /**
     * Method for click on checkout Button
     */
    async clickOnCheckOut(){
        await this.$checkOutButton().scrollIntoView();
        await this.$checkOutButton().click();
    }
}
module.exports = new CartPage();