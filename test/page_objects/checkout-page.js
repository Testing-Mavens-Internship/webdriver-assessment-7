const Common = require('../page_objects/common.js');
class CheckoutPage extends Common {
    constructor() {
      super();
      this.$techTroveHeader = () => $('//a[@href="https://techstrove.com"]');
      this.$enterDetails = (text) => $(`//input[@placeholder="${text}"]`);
      this.$enterCountry = () => $('//select[@id="Select2"]//option[@value="US"]');
      this.$enterState = () => $('//select[@id="Select3"]//option[@value="AZ"]');
      this.$validateName = () => $('//p[text()="P9 Air Max Wireless Stereo Headphone"]');
      this.$validatePrice = () => $('//strong[text()="£45.82"]');
      this.$validateColor = () => $('//p[text()="Red"]');
    }
    /**
     * Method for filling the details
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {string} address 
     * @param {string} city 
     * @param {string} zip
     */
      async fillDetails(firstName,lastName,address,city,zip) {
        await this.$enterfields('First name (optional)').setValue(firstName)
        await this.$enterfields('Last name').setValue(lastName)
        await this.$enterfields('Address').setValue(address)
        await this.$enterfields('City').setValue(city)
        await this.$enterfields('ZIP code').setValue(zip)
        await this.$enterCountry().click();
        await this.$enterState().click();
    }
  
  }
  module.exports = {
    checkoutPage : new CheckoutPage()
  }