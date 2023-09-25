const Common = require("./common");
const fs = require('fs');
const testData = require("../../test-data/testData.json")
class Products extends Common{
    constructor(){
        super()
        this.$productHover = (product="P9 Air Max Wireless Stereo Headphone") => $(`//div[text()="${product}"]`)
        this.$productView = (product)=>$(`//div[text()="${product}"]/ancestor::div[@class="grid-product__content"]//span`)
        this.$verifyProductPopUp = (nameOfProduct) => $(`(//p[contains(text(),"${nameOfProduct}")])[1]`)
        this.$productPrice = ()=>$(`(//span[@class="product__price"])[1]`)
        this.$increaseItemQuantity = (mode="Increase item quantity by one")=>$(`//button[@aria-label="${mode}"]`)
        this.$colorDropDown = ()=>$(`//div[@class="variant-input-wrap"]`)
        this.$colorSelector = (color)=>$(`//option[@value="${color}"]`)
        this.$addToCartButton = (type="Add to cart")=>$(`//span[contains(text(),"${type}")]`)
        this.$productNameInCart = (name)=>$(`//a[contains(text(),"${name}")]`)
        this.$cartMinus = ()=>$(`(//button[@aria-label="Reduce item quantity by one"])[1]`)
    }
    async clickOnAirMax(productName){
        const value = await this.$productPrice().getText()
        console.log(value)
        const realValue = value.toString()
        const symbolsToRemove = /[€\,]/g;
        const cost = realValue.replace(symbolsToRemove,'')
        const filePath = 'test-data/testData.json';
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              console.error('Error reading file:', err);
              return;
            }
            try {
              const jsonData = JSON.parse(data);
              jsonData.product = productName; 
              jsonData.price=cost
              const updatedJsonData = JSON.stringify(jsonData, null, 2); 
              fs.writeFile(filePath, updatedJsonData, 'utf8', (writeErr) => {
                if (writeErr) {
                  console.error('Error writing to file:', writeErr);
                } else {
                  console.log('Data has been successfully written to the file.');
                }
              });
            } catch (parseErr) {
              console.error('Error parsing JSON:', parseErr);
            }
          });
        await this.$productHover().moveTo()
        await this.$productView(productName).waitForDisplayed()
        await this.$productView(productName).click()
        await this.$verifyProductPopUp(productName).waitForDisplayed()
    }
    async addProductToCart(){
        await this.$increaseItemQuantity().click()
        await this.$colorDropDown().click()
        await this.$colorSelector(testData.color).click()
        await this.$addToCartButton().click()
    }
}
module.exports=new Products()