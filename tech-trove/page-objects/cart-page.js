const Common = require("../page-objects/common");
const {productPage} = require("../page-objects/product-page");
let productName;
let productColour;
let totalPrice;
class CartPage extends Common{
    constructor(){
        super();
        this.$header = () => $(`//div[text()="Cart"]`);
        this.$productName = () => $(`//div[contains(@class,"product-name")]//a`);
        this.$productColour = () => $(`//div[contains(@class,"product-name")]//span`);
        this.$subTotal = () => $(`//p[contains(@class,"subtotal")]`);
        this.$productDetails = () => $(`//aside`)
    }
    /**
     * Method to get name and colour of product in cart page
     */
    async getProductNameAndColour(){
        let product = await this.$productName().getText();
        productName = await product.toUpperCase();
        productColour = await this.$productColour().getText();
    }
    /**
     * Method to verify product name and colour is same in cart page
     * @param {string} product 
     * @param {string} colour 
     * @returns boolean
     */
    async verifyProductNameAndColour(product,colour){
        return product === productName && colour === productColour;
    }
    /**
     * 
     * @param {number} price 
     * @param {number} count 
     * @returns boolean
     */
    async verifyTotalPrice(price,count){
        totalPrice = await this.$subTotal().getText();
        totalPrice = totalPrice.replace(/£/g,'');
        totalPrice = parseFloat(totalPrice);
        return totalPrice == price*count;
    }
    /**
     * Method to reduce count 
     */
    async reduceCount(){
        await this.$button("minus").click();
    }
    /**
     * Method to click checkout
     */
    async clickOnCheckout(){
        await this.$button("checkout").click();
        await this.$productDetails().waitForDisplayed({timeout: 5000});
    }
}
module.exports = {cartPage : new CartPage()}