const Common = require("./common.js");

class CheckoutPage extends Common{
    constructor() {
        super();
        this.$checkoutProductName = (itemName) => $(`//p[contains(text(),"${itemName}")]`);
    }
    
}
module.exports = {
    checkoutPage : new CheckoutPage()
}