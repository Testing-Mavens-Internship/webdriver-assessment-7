const Common = require('../page_objects/common.js');
class CollectionsPage extends Common {
    constructor() {
      super();
      this.$validateName = () => $('//a[@href="/collections/headphone/products/p9-air-max-wireless-stereo-headphone" ]');
      this.$validateQuantity = () => $('//input[@value="2"]');
      this.$validateColor = () => $('//span[text()="Red"]');
      this.$decreaseQuantity = () => $('//div[@class="ajaxcart__quantity"]//button[@class="js-qty__adjust js-qty__adjust--minus"]');
      this.$checkoutButton = () => $('//button[@name="checkout"]');


    }
    /**
     * Method for reducing the product quantity and click on checkout button
     */
      async reduceQuantity() {
        await this.$decreaseQuantity().click();
        await this.$checkoutButton().click();    
    }
  }
  module.exports = {
    collectionsPage : new CollectionsPage()
  }