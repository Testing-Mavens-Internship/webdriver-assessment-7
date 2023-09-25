const Commom = require("./common");
class Homepage extends Commom {
    constructor() {
        super();
        this.$checkOutHeader = () => $('//span[text()="TechTrove"]')
        this.$input = (inputs) => $(`//input[@name= "${inputs}"]`)
        this.$country = () => $('//option[@value="US"]')
        this.$state = () => $('//option[@value="AZ"]')
    }
    /**
     * Method to input values
     * @param {string} email 
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {string} address1 
     * @param {*} city 
     */
    async inputs(email, firstName, lastName, address1, city) {
        await this.$input(email).setValue(email);
        await this.$input(firstName).setValue(firstName);
        await this.$input(lastName).setValue(lastName);
        await this.$input(address1).setValue(address1);
        await this.$input(city).setValue(city);
        await this.$input("postalCode").setValue("85015");
    }
    /**
     * Method to enter country and state
     */
    async countryAndState() {
        await this.$country.click()
        await this.$state.click();
    }
}
module.exports = new Homepage();