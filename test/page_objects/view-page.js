class ViewPage {
	constructor() {
		this.$productHeadphone = product => $(`//div[contains(text(),"${product}")]`);
		this.$productHeader = value => $(`//h1[contains(text(),"${value}")]`);
		this.$colorButton = () => $(`//select[contains(@class,"variant__input")]`);
		this.$color = color => $(`select//option[@value="${color}"]`);
		this.$increaseTheCount = () => $(`(//*[local-name()="svg"][contains(@class, "icon-plus")])[2]`);
		this.$addToCartButton = () => $(`//span[contains(text(),"Add to cart")]`);
		this.$cartHeader = () => $(`//div[text()="Cart"]`);
		this.$decreaseTheCount = () => $(`(//*[local-name()="svg"][contains(@class, "icon-minus")])[1]`);
		this.$checkOut = () => $(`//button[@name="checkout"]`);
		this.$priceOfItem = () => $(`//span[@class="ajaxcart__price"]`);
		this.$totalPrice = () => $(`//p[@class="ajaxcart__price"]`);
		this.$checkOutHeader = () => $(`//span[text()="TechTrove"]`);
	}
    
    /**
     * Method to view the Products and select a headphone and validating
     * @param {string} color 
     * @returns 
     */
	async selectProduct(color) {
		await this.$productHeadphone('Air Max').scrollIntoView({inline: 'center'});
		await this.$productHeadphone('Air Max').click();
		await this.$colorButton().waitForClickable();
		await this.$colorButton().click();
		await this.$color(color).waitForClickable();
		await this.$color(color).click();
		await this.$increaseTheCount().doubleclick();
		await this.$addToCartButton().click();
		await this.$cartHeader().waitForDisplayed();
		await this.$decreaseTheCount().click();
		await this.$checkOut().clcik();
		let price = [];
		price = await this.$priceOfItem().map(item => item.getText());
		let priceInInt = [];
		for (let item of price) {
			priceInInt.push(parseInt(item.replace(/[₹,]/g, '')));
		}
		console.log(priceInInt);
		let totalPrice = [];
		totalPrice = await this.$totalPrice().map(item => item.getText());
		let totalPriceInInt = [];
		for (let item of totalPrice) {
			totalPriceInInt.push(parseInt(item.replace(/[₹,]/g, '')));
		}
		console.log(totalPriceInInt);
		if (totalPriceInInt === 2 * priceInInt) return true;
		else return false;
	}
}
module.exports = {viewPage: new ViewPage()};
