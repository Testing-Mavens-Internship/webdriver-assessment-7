const Common = require("./common");
class CartPage extends Common{
    constructor(){
        super();
        this.$verifyCart = () => this.$verifyCart('//div[text()="Cart"]')
        this.$decCount = () => $('//span[text()="−"]//..');
        this.$getCount = () => $('//div[@class="grid__item display-table-cell one-half"]//input[@aria-label="quantity"]')
        this.$getPrice = () => $('//span[@class="ajaxcart__price"]');
        this.$subTotal = () => $('//p[@class="ajaxcart__price"]')
    }
    /**
     * Method to validate the total price of the product
     * @param {string} decCount 
     * @returns 
     */
    async checkPrice(decCount){
        for(let i=decCount;i>0;i--){
            await this.$decCount().click();
        }
        let count = await this.$getCount().map((item) => item.getText());
        let price = await this.$getPrice().map((item) => item.getText());
        price = price.map((item) => item.replace(/[£.]/g, "")).map(Number);
        let subTotal = await this.$subTotal().map((item) => item.getText());
        subTotal = subTotal.map((item) => item.replace(/[£.]/g, "")).map(Number);
        let total = count*price;
        if(total==subTotal){
            return true;
        }
        else{
            return false;
        }
    }
    async clickCheckout(){
        await this.clickCheckout().click();
        await this.$pageHeader().waitForDisplayed({timeout: 3000})
    }
}
module.exports = new CartPage();