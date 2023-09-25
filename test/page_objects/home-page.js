const Common = require('./common.js');
class HomePage extends Common {
  constructor() {
    super();
    this.$collectionsTitle = () => $('//li[@class ="site-nav__item site-nav__expanded-item site-nav--has-dropdown"]');
    this.$headphoneTitle = () => $('(//a[@href="/collections/headphone"][contains(text(),"Headphone")])[2]');
    this.$headphoneHeader = () => $('//h1[@class="section-header__title"]');
    this.$selectItem = () => $('//a[@href="/collections/headphone/products/p9-air-max-wireless-stereo-headphone" ]');
    this.$validateItemName = () => $('//h1[contains(text(),"P9")]');
    this.$clickColor = () => $('//select[@class="variant__input-8378768654650"]');
    this.$selectColor = (value) => $(`//option[@value="${value}"]`);
    this.$selectQuantity = () => $('//div[@class="product__quantity product__quantity--dropdown"]//button[@class="js-qty__adjust js-qty__adjust--plus"]');
    this.$cartButton = () => $('//span[contains(text(),"Add")]');
    this.$cartHeader = () => $('//div[text()="Cart"]');
  }
/**
 * Method for selecting headphone option 
 */
    async clickOnHeadphone() {
      await this.$collectionsTitle().moveTo();
      await this.$headphoneTitle().waitForClickable({ timeout: 5000 });
      await this.$headphoneTitle().click();      
  }
  /**
   * Method for selecting the product
   */

  async selectItem() {
    await this.$selectItem().click();
  }
  /**
   * Method for selecting color and quantity and click on add to cart button
   * @param {string} color 
   * @param {number} quantity 
   */

  async selectOptions(color,quantity) {
    await this.$clickColor().click();
    await this.$selectColor(color).click(); 
    await this.$selectQuantity().click();
    for(let i=0;i<quantity;i++){
      await this.$selectQuantity().click();
    }
    await this.$cartButton().click();
  }
}
module.exports = {
  homePage : new HomePage()
}
