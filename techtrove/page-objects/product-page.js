const Common = require('./common');
let colour, quantity;
class ProductPage extends Common {
	constructor() {
		super();
		this.$productName = name => $(`//h1[contains(text(),"${name}")]`);
		this.$selectColour = () => $('//div[@class="variant-input-wrap"]');
		this.$productQauntity = () => $('//button[@class="js-qty__adjust js-qty__adjust--plus"]');
		this.$colour = name => $(`//select[@class="product-single__variants no-js"]/option[contains(text(),"${name}")]`);
		this.$quantity = () => $('//input[@class="js-qty__num"]');
		this.$addToart = () => $('//span[text()="Add to cart"]');
	}
	/**
	 * Method to select the colour and quantity of the product
	 * @param {String} quantity
	 * @param {String} colour
	 */
	async selectColourAndIncreaseQuantity(quantity, colour) {
		await this.$selectColour().click();
		await this.$colour(colour).click();
		
		for (let i = 0; i < quantity; i++) {
			await this.$productQauntity().click();
		}
        colour = await this.$selectColour().getText();
		quantity = await this.$quantity().getText();
		await this.$addToart().click();
	}
}
module.exports = new ProductPage();
