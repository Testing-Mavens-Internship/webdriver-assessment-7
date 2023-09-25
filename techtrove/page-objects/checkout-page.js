const Common = require('./common');
class CheckoutPage extends Common{
    constructor(){
        super()
        this.$productName=(name)=>(`//p[@class="_1x52f9s1 _1frageme0 _1x52f9so _1fragemfq _1x52f9s2" and contains(text(),"${name}")]`)
    }
/**
 * Method to enter the details of the user
 */
    async enterDetails(){

    }
}

module.exports = new CheckoutPage();