const Commom = require('./common.js');
const {itemDetailsPage} = require('./item-details.js');
const {productPage} = require('./product-page.js');
class CartPage extends Commom {
	constructor() {
		super();
		this.$cartHeader = () => $(`//div[contains(text(),"Cart")]`);
		this.$$reduceItem = reduce => $$(`//button[@aria-label="Reduce item quantity by one"]//following-sibling::span[text()="${reduce}"]`);
		this.$verifyReduce = () => $('//input[@value="2"]');
		this.$verifyCartPrice = () => $$('//span[contains(text(),"£")]');
		this.$total = () => $('//p[contains(text(),"£45.82")]');
        this.$checkout = () => $('//button[contains(text(),"Check out")]');
        this.$verifyCheckout = () => $('//h2[contains(text(),"Contact")]');
	}
	/**
	 * Method to reduce one item
	 * @param {string} item
	 */
	async clickOnReduce(reduce) {
		let reduceQuantity = [];
		reduceQuantity = await this.$$reduceItem(reduce).map(item => item.getText());
	}
	/**
	 * Method to verify the cart page
	 * @returns
	 */
	async verifyPriceOnCartPage() {
		let cartValues = [];
		let newCartValues = [];
		cartValues = await productPage.$$itemPrice().map(item => item.getText());
		for (let i of cartValues) {
			newCartValues.push(parseInt(i.replace(/[$,.]/g, '')));
		}
		console.log(newCartValues);
		let flag;
		let prices = [];
		let newPrices = [];
		prices.push(await this.$itemPrices().getText());
		for (let item of prices) {
			newPrices.push(parseInt(item.replace(/[$,.]/g, '')));
		}
		let total = newCartValues[0] * newCartValues[0];
		if (newCartValues[0] == newPrices[0] && total == newCartValues[0]) {
			flag = true;
		} else {
			flag = false;
		}
		return flag;
	}

    /**
     * Method to click on checkout button
     */
    async clickOnCheckOut() {

		await this.$checkout().click();
	}
}

module.exports = {cartPage: new CartPage()};
