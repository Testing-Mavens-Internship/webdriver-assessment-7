const Common = require("../page-objects/common");
const {cartPage} = require("../page-objects/cart-page");
let product;
let price;
class ProductPage extends Common{
    constructor(){
        super();
        this.$header = () => $(`//h1[contains(text(),"Headphone")]`);
        this.$productName = () => $(`//div[contains(text(),"22.91")]/..//div[contains(@class,"product__title")]`);
        this.$productPrice = () => $(`//div[contains(text(),"22.91")]`);
        this.$product = () => $(`//h1[contains(text(),"Headphone")]`);
        this.$cost = () => $(`//h1[contains(text(),"Headphone")]/following-sibling::span[@class="product__price"]`);
        this.$colourOption = () => $(`//div//select[contains(@class,"input")]`);
        this.$colour = (color) => $(`//div//select[contains(@class,"input")]/option[contains(text(),"${color}")]`);
    }
    /**
     * Method to get name of the product
     * @returns string
     */
    async getProductName(){
        let productName = await this.$productName().getText();
        product = productName.toUpperCase();
        return product;
    }
    /**
     * Method to get price of the product
     * @returns number
     */
    async getProductPrice(){
        price = await this.$productPrice().getText();
        price = price.replace(/£/g,'');
        price = parseFloat(price);
        return price;
    }
    /**
     * Method to choose product and verify the displayed product is same as selected 
     * @returns boolean
     */
    async selectProduct(){
        await this.$productName().scrollIntoView();
        await this.$productName().click();
        let item = await this.$product().getText();
        let value = await this.$cost().getText();
        value = value.replace(/£/g,'');
        value = parseFloat(value);
        return item === product && value === price;
    }
    /**
     * Method to select colour
     * @param {string} color 
     */
    async selectColor(color){
        await this.$colourOption().click();
        await this.$colour(color).click();
    }
    /**
     * Method to select quantity
     * @param {number} count 
     */
    async selectQuantity(count){
        for(let i=1;i<count;i++){
            await this.$button("plus").click();
        }
    }
    /**
     * Method to click add to cart button
     */
    async addToCart(){
        await this.$button("cart").click();
        await cartPage.$header().waitForDisplayed({timeout: 5000});
    }
}
module.exports = {productPage : new ProductPage()}