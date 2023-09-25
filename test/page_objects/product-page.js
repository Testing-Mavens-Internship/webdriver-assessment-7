const Common = require("./common");
class ProductPage extends Common{
    constructor(){
        super();
        this.$productName = (product) => $(`//div[text()="${product}"]`);
        this.$$getDetails = (product) => $$(`//div[text()="${product}"]//..//div`)
        this.$quickViewButton = () => $('//span[text()="Quick view"]')
    }
    /**
     * Method to select product
     * @param {string} product 
     */
    async selectProduct(product){
        await this.$productName(product).scrollIntoView({block : 'center'})
        await this.$productName(product).moveTo();
        let getDetails = await this.$$getDetails().map((item) => item.getText());
        await this.$quickViewButton().click();
        await this.$verifyProduct(product).waitForDisplayed({timeout : 3000});
    }

}
module.exports = new ProductPage();