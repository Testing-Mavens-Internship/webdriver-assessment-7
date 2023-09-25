const Commom = require("./common");
let initialprices = [];
let prices = [];
class ShoppingPage extends Commom {
    constructor() {
        super();
        this.$shopingPageHeader = (item) =>  $(`//h1[contains(text(),"${item}")]`);
        this.$productCount = () =>$('//div[contains(text(),"3 products")]');
        this.$selectProduct = (product) =>$(`//div[@class="grid-product__title grid-product__title--body"][contains(text(),"${product}")]`)
        this.$productPrice = (price) =>$(`//div[@class="grid-product__title grid-product__title--body"][contains(text(),"${price}")]/following-sibling::div[@class="grid-product__price"]`)
        this.$$price = () =>$$('//div[@class="grid-product__price"]');
    }

/**
 * Methods
*/
    /**
     * Method to click on the particular product
     * @param {string} product 
     */
    async selectProduct(product){
        await this.$selectProduct(product).scrollIntoView({block : "center"})
        await this.$selectProduct(product).click()
    }
    /**
     * Get the prices
     */
    async getPrice(){
        for (let price of await this.$$price()) {
            initialprices.push(await price.getText());
        }
        for (let i of initialprices) {
            prices.push(parseInt(i.replace(/£|,/g, "")));
        }
        return true
    }


}
module.exports = new ShoppingPage();