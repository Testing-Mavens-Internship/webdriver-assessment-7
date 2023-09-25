const Common = require("./common.js");
class CheckoutPage extends Common{
    constructor(){
        super();
        this.$textFields=(textBoxName)=>$(`//input[@placeholder="${textBoxName}"]`)
    }
    async fillingDetails(email,firstName,lastName,Address,city,emailid,fname,lname){
        await this.$checkOutButton().click()
        await this.$textFields(email).setValue(emailid)
        await this.$textFields(firstName).setValue(fname)
        await this.$textFields(lastName).setValue(lname)
    }

}
module.exports = { checkoutPagee: new CheckoutPage() };