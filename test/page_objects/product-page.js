const Commom = require("./common");
class ProductPage extends Commom {
    constructor() {
        super();
        this.$prodctPrice = () =>$(`//h1[@class="h2 product-single__title"]/following-sibling::span[@class="product__price"]`);
        this.$clickColor = () =>$('//div[@class="variant-input-wrap"]');
        this.$selectColor = (color) =>$(`//div[@class="variant-input-wrap"]//option[contains(text(),"${color}")]`)
        this.$increase = () =>$(`//div[@class="product__quantity product__quantity--dropdown"]//button[@aria-label="Increase item quantity by one"]`)
        this.$addToCart = () =>$('//button[@type="submit"]//span[text()="Add to cart"]');
        this.$cartHeader = () =>$('//div[@class="drawer__header appear-animation appear-delay-1"]//div[@class="h2 drawer__title"]')
        this.$itemImage = () =>$('//a[@href="//techstrove.com/cdn/shop/files/4e16129d7c9767563d46e7245760ca0c_1800x1800.jpg?v=1687807845"]');
        this.$itemQuantity = ()=>$('//input[@value="1"]');
        this.$clickOnCheckOut =() =>$('//button[@name="checkout"]')
        this.$decrease = () =>$('//div[@class="ajaxcart__quantity"]//button[@aria-label="Reduce item quantity by one"]')
        this.$finalPrice = () =>$('//p[@class="ajaxcart__price"]')

    }

    /**
     * Method to click on the choose color and pick a particular color
     * @param {string} color 
     */
    async chooseColor(color){
        await this.$clickColor().click();
        await this.$selectColor(color).click()
    }
    /**
     * Method to increase the quantity of the item
     * @param {string} quantity
     */
    async quantityIncrease(){
        await this.$increase().doubleClick();
    }
    /**
     * Method to click on the add to cart button
     */
    async clickOnAddToCart(){
        await this.$addToCart().click();
    }
    /**
     * Method to decrease the quantity
     * @param {string} quantity 
     */
    async quantityDecrease(){
        await this.$decrease().click();
    }
    async total(price){
        let count=2;
        let subTotal = count*price
        return subTotal;
    }
    /**
     * Method to click on checkout
     */
    async clickOnCheckOut(){
        await this.$clickOnCheckOut().click()
    }
}


module.exports = new ProductPage();