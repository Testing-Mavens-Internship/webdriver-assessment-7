const Common = require('./common');
class CartPage extends Common {
	constructor() {
		super();
		this.$cartheader = () => $('//div[text()="Cart"]');
		this.$priceIncart = () => $('//span[@class="ajaxcart__price"]');
		this.$quantityIncart = () => $('//div[@class="drawer__inner"]//div[@class="js-qty__wrapper"]/input[@class="js-qty__num"]');
		this.$subTotal = () => $('//p[@class="ajaxcart__price"]');
		this.$productName = name => $(`//a[@class="ajaxcart__product-name" and contains(text(),"${name}")]`);
		this.$checkOutButton = () => $('//button[contains(text(),"Check out")]');
		this.$decrease = () => $('//div[@class="drawer drawer--right drawer--is-open"]//button[@class="js-qty__adjust js-qty__adjust--minus"]');
	}
	/**
	 * Method to validate the price of the product in the cart page
	 * @returns Boolean
	 */
	async validateTotalPrice() {
		let price = await this.$priceIncart().getText();
		price = price.replace('£', '');
		price = Number(price);
		let quantity = await this.$quantityIncart().getText();
		quantity = Number(quantity);
		let total = quantity * price;
		let subtotal = await this.$subTotal().getText();
		subtotal = subtotal.replace('£', '');
		subtotal = Number(subtotal);
		if (total == subtotal) {
			return true;
		} else {
			return false;
		}
	}
	/**
	 *
	 * Method to reduce the quantity of the product by one and click on checkout button
	 */
	async checkout() {
		await this.$decrease().click();
		await this.$checkOutButton.click();
	}
}

module.exports = new CartPage();
