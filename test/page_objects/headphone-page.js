const billingPage = require('./billing-page');
const Commom = require('./common');
const productDetailsPage = require('./product-details-page');
class HeadphonePage extends Commom {
	constructor() {
		/**elements */
		super();
		this.$productName = name => $(`//div[contains(text(),"${name}")]`);
		this.$productPrice = name => $(`//div[contains(text(),"${name}")]/following-sibling::div`);
		this.$quickView = name => $(`//span[contains(text(),"Quick")]//ancestor::div[contains(@class,"grid-p")]//div[contains(text(),"${name}")]`);
		this.$quickViewHeader = name => $(`//p[contains(text(),"${name}")]`);
		this.$cartHeader = () => $('//div[contains(text(),"Cart")]');
		this.$plusButton = () => $('(//button[@class="js-qty__adjust js-qty__adjust--plus"])[1]');
		this.$checkoutButton = () => $('//button[contains(text(),"Check out")]');
		this.$cartProductName = value => $(`//a[contains(text(),"${value}")]`);
	}
	/**methods */

	/**
	 * Method to select a product
	 * @param {string} product
	 */
	async selectProduct(product) {
		await this.$productName(product).click();
		await productDetailsPage.$header(product).waitForDisplayed({timeout: 30000});
	}
	/**
	 * Method to quickview the product details
	 * @param {string} product
	 */
	async quickView(product) {
		await this.$productName(product).moveTo();
		await this.$quickView(product).waitForDisplayed({timeout: 30000});
		await this.$quickView(product).click();
		await this.$quickViewHeader(product).waitForDisplayed({timeout: 30000});
	}
	/**
	 * Method to add a product to the cart
	 */
	async addToCart() {
		await this.$button('Add to Cart').click();
		await this.$cartHeader().waitForDisplayed({timeout: 30000});
	}
	/**
	 * Method to increase the quantity of the product and checkout
	 * @param {string} subHeader
	 */
	async addCountOfProduct(subHeader) {
		await this.$plusButton();
		await this.$checkoutButton();
		await billingPage.$subHeaders(subHeader).waitForDisplayed({timeout: 30000});
	}
}
module.exports = new HeadphonePage();
