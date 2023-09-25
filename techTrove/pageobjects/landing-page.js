const {Common} = require('./common');

class LandingPage extends Common {
	constructor() {
		super();
		this.$collections = () => $(`//li[@class="site-nav__item site-nav__expanded-item site-nav--has-dropdown"]//a[contains(text()," Collections")]`);
		this.$headphones = () => $(`//ul[@class="site-nav__dropdown text-left"]//a[@href="/collections/headphone"]`);
		this.$headphoneHeader = () => $(`//h1[contains(text()," Headphone")]`);
		this.$item = item => $(`//div[text()="${item}"]`);
		this.$$price = () => $$(`//div[@class="grid-product__price"]`);
		this.$product = product => $(`//h1[contains(text(),"${product}")]`);
		this.$colorButton = () => $(`//select[@class="variant__input-8378768654650"]`);
		this.$color = value => $(`//select[@class="variant__input-8378768654650"]//option[contains(text()," ${value}")]`);
		this.$increment = () => $(`//button[@class="js-qty__adjust js-qty__adjust--plus"]`);
		this.$addToCart = () => $(`//button[@class="btn btn--full add-to-cart btn--secondary"]`);
		this.$cartItem = () => $(`//div[@class="ajaxcart__product-name--wrapper"]`);
		this.$singlePrice = () => $(`//span[@class="ajaxcart__price"]`);
		this.$quantity = () => $(`//div[@class="ajaxcart__quantity"]//div[@class="js-qty__wrapper"]`);
		this.$total = () => $(`//p[@class="ajaxcart__price"]`);
		this.$checkout = () => $(`//button[@class="btn btn--full cart__checkout"]`);
	}
	/**
	 * Method to hover over collections options
	 */
	async hoverCollections() {
		await this.$collections().moveTo();
		await this.$headphones().waitForClickable();
		await this.$headphones().click();
		await this.$headphoneHeader().waitForDisplayed({timeout: 3000});
	}
	/**
	 * Method to click on item and navigate to item page
	 * @param {string} item
	 */
	async clickOnItem(item) {
		await this.$item(item).click();
		// let price = await this.$$price().getValue();
		// console.log(price)
		//return price;
	}
	/**
	 * Method to select color and number of items
	 * @param {string} color
	 */
	async clickOnColor(color) {
		await this.$colorButton().click();
		await this.$color(color).click();
		await this.$increment().click();
		await this.$increment().click();
		await this.$addToCart().click();
		await this.$cartItem().waitForDisplayed();
	}
	/**
	 * Method to validate price
	 * @returns boolean
	 */
	async calculatePrice() {
		let single = this.$singlePrice().getText();
		single = await this.$singlePrice().map(item => item.replace('£', ''));
		let newPrice = Number(single);
		let quantity = this.$quantity().getValue();
		let newQuantity = Number(quantity);
		let total = this.$total().getText();
		total = await this.$total().map(item => item.replace('£', ''));
		let newtotal = Number(total);
		if (newPrice * quantity == newtotal) {
			return true;
		} else {
			return false;
		}
	}
	/**
	 * Method to click checkout
	 */
	async clickOncheckOut() {
		await this.$checkout().waitForClickable();
		await this.$checkout().click();
	}
}
module.exports = {
	landingPage: new LandingPage(),
};
