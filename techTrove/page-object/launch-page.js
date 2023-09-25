const Common = require("./common.js");

class LaunchPage extends Common{
    constructor() {
        super();
        let value = [];
        let newValue = [];
        this.$headerList = (list) => $(`//div[contains(@class,"header-item--navigation")]//a[contains(text(),"${list}")]`);
        this.$selectItem = (item) => $(`//div[contains(text(),"${item}")]`)
        this.$$values = () => $$(`//div[@class="grid-product__price"]`)
    }
    
    /**
     * Method to click on Headphone list and select an item
     * @param {string} value 
     */
    async clickOnHeadphone(value1,value2,item,header,price){
        await this.$headerList(value1).moveTo();
        await this.$headerList(value2).click();
        await this.$headerItem(value2).waitForDisplayed({timeout: 2000});
        await this.$selectItem(item).scrollIntoView({block:'center'});
        await this.$selectItem(item).waitForClickable({timeout:2000});
        await this.$selectItem(item).click();
      //  await header.waitForDisplayed({timeout: 4000});
        await price.waitForDisplayed({timeout: 4000});
    }
    /**
     * Method to get the price of an item 
     */
    async getValue(){
        let value = [];
        let newValue = [];  
        for(let item of await this.$$values()){
         value.push(item.getText());
        }
        console.log(value)
        for(let i of value){
        newValue.push(parseInt(i.replace(/[£.]/g,"")))
        }
    }
    
}
module.exports = {
    launchPage: new LaunchPage()
}