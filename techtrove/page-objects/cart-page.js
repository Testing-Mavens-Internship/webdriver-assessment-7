const Common = require("./common.js");

class CartPage extends Common{
    constructor(){
        super();
        this.$cartHeader = (header) => $(`//div[@class="h2 drawer__title"][text()='${header}']`);
    }
}
module.exports = new CartPage();