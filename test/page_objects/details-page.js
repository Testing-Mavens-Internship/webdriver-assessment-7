const Common = require("./common");
class DetailsPage extends Common{
    constructor(){
        super();
        this.$selectColor = (color) => $(`//div[@class="variant-input-wrap"]//option[contains(text(),"${color}")]`)
        this.$incCount = () => $('//span[text()="+"]//..');
        this.$addToCart = () => $('//span[contains(text(),"Add to cart")]')
    }
    /**
     * Method to select color,count and click on add to cart
     * @param {string} color 
     * @param {string} count 
     */
    async addToCart(color,count){
        await this.$selectColor(color).click();
        await this.$incCount().waitForClickable({timeout : 3000})
        for(let i=0;i<count-1;i++){
            await this.$incCount().click();
        }
        await this.$addToCart().click();
    }
}
module.exports = new DetailsPage();