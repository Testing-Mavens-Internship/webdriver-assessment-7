const Common = require('./common');
let priceOfProduct;
class HeadphonesPage extends Common {
	constructor() {
		super();
		this.$headphonesHeader = () => $('//h1[contains(text(),"Headphone")]');
		this.$product = name => $(`//div[text()="${name}"]`);
		this.$price = product => $(`//div[text()="${product}"]/following-sibling::div`);
		this.$priceOfProduct = product => $(`//h1[contains(text(),"${product}")]/following-sibling::span[@class="product__price"]`);
	}
	/**
	 * Method to select the headphone
	 * @param {String} product
	 * @returns boolean
	 */
	async selectHeadphone(product) {
		let productPrice = await this.$price(product).getText();
		productPrice = productPrice.replace('£', '');
		await this.$product(product).click();
		priceOfProduct = await this.$priceOfProduct(product).getText();
		priceOfProduct = priceOfProduct.replace('£', '');
		if (productPrice == priceOfProduct) {
			return true;
		} else {
			return false;
		}
	}
}

module.exports = new HeadphonesPage();
