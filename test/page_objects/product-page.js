const Commom = require('./common.js');
const {itemDetailsPage} = require('./item-details.js');
class ProductPage extends Commom {
	constructor() {
		super();
		this.$sideTitle = title => $(`//h1[contains(text(),"${title}")]`);
		this.$$price = () => $$(`//span[contains(text(),"£")]`);
		this.$$itemPrice = () => $$(`//div[contains(text(),"£")]`);
		this.$verify = () => $(`//span[contains(text(),"£22.91")]`);
		this.$colour = () => $(`//div[@class="variant-input-wrap"]//option[@value="Red"]`);
		this.$colourDropdown = itemColour => $(`//div[@class="variant-input-wrap"]//option[@value="${itemColour}"]`);
		this.$imageVerify = () => $(`//img[@class="photoswipe__image lazyautosizes lazyloaded"]`);
		this.$itemQuantity = (add) => $(`//div[@class="js-qty__wrapper"]//span[contains(text(),"${add}")]`);
		this.$verifyQuantity = () => $(`//div[@class="js-qty__wrapper"]//input[@value="1"]`);
		this.$addToCart = buyOption => $(`//div[@class="payment-buttons"]//span[contains(text(),"${buyOption}")]`);
	}

	/**
	 *  Method to click on the item reqired
	 * @param {string} item
	 */
	async clickOnItemName(item) {
		await this.$itemName(item).click();
	}

	/**
	 * Method to verify item names
	 * @param {string} item
	 * @returns
	 */
	async verifyName(item) {
		let names = [];
		let newNames = [];
		names = await itemDetailsPage.$sideTitle(item).map(item => item.getText());
		let flag;
		let titles = [];
		let newTitles = [];
		titles.push(await this.$sideTitle('P9 Air Max Wireless Stereo Headphone').getText());
		if (newNames[0] == newTitles[0]) {
			flag = true;
		} else {
			flag = false;
		}
		return flag;
	}

	/**
	 * Method to verify the prices
	 * @returns
	 */
	async verifyPrice() {
		let values = [];
		let newValues = [];
		values = await this.$$price().map(item => item.getText());
		for (let i of values) {
			newValues.push(parseInt(i.replace(/[£,.]/g, '')));
		}
		console.log(newValues);
		let flag;
		let prices = [];
		let newPrices = [];
		prices.push(await this.$$itemPrice().getText());
		for (let item of prices) {
			newPrices.push(parseInt(item.replace(/[£,.]/g, '')));
		}
		if (newValues[0] == newPrices[0]) {
			flag = true;
		} else {
			flag = false;
		}
		return flag;
	}
	/**
	 * 	Method to click on the colour button
	 */
	async clickOnColour() {
		await this.$colour().click();
	}
	/**
	 * Method to select colour from the dropdown list
	 * @param {string} itemColour
	 */
	async selectColour(itemColour) {
		await this.$colour(itemColour).click();
	}
	/**
	 * Method to select the quantity of item
	 * @param {string} add
	 */
	async clickOnQuantity(add) {
		await this.$itemQuantity(add).click();
	}
	/**
	 * Method to click on the add to cart button
	 * @param {string} buyOption
	 */
	async clickOnAddToCart(buyOption) {
		await this.$itemQuantity(buyOption).click();
	}
}

module.exports = {productPage: new ProductPage()};
