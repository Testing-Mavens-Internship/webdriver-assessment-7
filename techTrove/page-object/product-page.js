const Common = require("./common.js");

class ProductPage extends Common{
    constructor() {
        super();
        this.$productHeader =(item) => $(`//span/preceding-sibling::p[contains(text(),"${item}")]`)
        this.$clickColor = ()=> $(`//div[@class="variant-input-wrap"]`);
        this.$productPrice = (value) =>$(`//span[contains(text(),"${value}")]`)
        this.$selectColor = (color) => $(`//select[contains(@class,"variant__input")]//option[contains(text(),"${color}")]`);
        this.$quantityButton = (increaseReduce,index) => $(`(//button[contains(@aria-label,"${increaseReduce}")])[${index}]`);
        this.$addToCartButton = () => $(`//button[@name="add"]//span[contains(text(),"Add to cart")]`);
        this.$cartProductName = (itemName) =>$(`//a[contains(text(),"${itemName}")]`);
        this.$checkoutButton =()=> $(`//button[contains(text(),"Check out")]`);
        this.$totalValue = () => $(`//p[text()="Subtotal"]/../following-sibling::div//p`)
    }
    /**
     * Method to apply color filter and quantity
     */
    async applyItemFilter(color,itemName){
        await this.$clickColor().click();
        await this.$selectColor(color).click();
        await this.$quantityButton("Increase",1).waitForClickable({timeout:5000});
        await this.$quantityButton("Increase",1).doubleClick();
        await this.$addToCartButton().click();
        await this.$cartProductName(itemName).waitForDisplayed({timeout:3000});
    }
    /**
     * Method to click checkout Button
     */
    async clickCheckoutButton(itemName){
        await this.$quantityButton("Reduce",1).click();
        await this.$checkoutButton().waitForClickable();
        await this.$checkoutButton().click();
        await itemName.waitForDisplayed({timeout:3000});
    }
    /**
     * Method to get the total value
     * @param {string} value 
     * @returns boolean
     */
    async getTotal(value){
        let total =[];
        let newTotal = [];
        let price =[];
        total.push(await this.$totalValue().getText());
        for(let i of total){
        newTotal = total.push(i.replace(/[£.]/g,""));
        }
        price = value.push(replace(/[£.]/g,""));
        if(newTotal[0]==(2*price[0])){
            return true;
        }
        else{
            return false;
        }
    }
}
module.exports = {
    productPage : new ProductPage()
}