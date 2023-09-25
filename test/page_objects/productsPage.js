const Common = require("./common.js");
class ProductsPage extends Common{
    constructor(){
        super()
        this.$productName=(name)=>$(`//div[@class="grid-product__title grid-product__title--body"][contains(text(),"${name}")]`) // product name
        this.$quantitySelect=(value)=>$(`//button[@class="js-qty__adjust js-qty__adjust--${value}"]`) //for selecting the quantity
        this.$colorBox=()=>$(`//select[@class="variant__input-8378768654650"]`) // color option
        this.$selectColor=(color)=>$(`//option[@class="variant-input"][contains(text(),"${color}")]`) //choosing color
        this.$cartHeader=()=>$(`//div[@class="drawer__header appear-animation appear-delay-1"]/div[@class="h2 drawer__title"]`) //cart sidenav header
        this.$productValidationCart=(productValidName)=>$(`//a[@class="ajaxcart__product-name"][contains(text(),"${productValidName}")]`) //name of product in cart
        this.$checkOutButton=()=>$(`//button[contains(text(),"Check out")]`) //checkout button
        this.$totalPrice=()=>(`//p[@class="ajaxcart__price"]`) //total price
        this.$currentPrice=()=>(`//span[@class="ajaxcart__price"]`) //real price
    }/**
     * function for choosing a particular product (P9 AIR MAX WIRELESS STEREO HEADPHONE)
     * @param {String} productName 
     */
    async clickOnProduct(productName){
        await this.$productName(productName).click()
        await this.$productPageHeader(productName).waitForDisplayed()
    }/**
     * Function for choosing color
     * @param {String} quantitySelectPlus 
     * @param {String} limit 
     */
    async selectingQuantity(quantitySelectPlus,limit1){
        let count=limit1;
        for(let i=1;i<=count;i++){
            await this.$quantitySelect(quantitySelectPlus).click()
        }
        
    }/**
     * function for selecting the color
     * @param {String} selectColor 
     * @param {String} buttonName 
     * @param {String} quantitySelectMinus 
     * @param {String} limit2 
     */
    async selectingColor(selectColor,buttonName,quantitySelectMinus,limit2){
        await this.$colorBox().click()
        await this.$selectColor(selectColor).click()
        await this.$button(buttonName).click()
        await browser.pause(5000)
        await this.selectingQuantity(quantitySelectMinus,limit2) //function call for decrement the quantity
    }
    // async priceValidation(){
       
    // }


}

module.exports = { productsPage: new ProductsPage() };