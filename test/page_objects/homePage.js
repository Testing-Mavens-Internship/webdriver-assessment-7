const Common = require('./common.js');
class Homepage extends Common {
	constructor() {
		super();
		this.$collection = () => $('//div[@class="header-item header-item--navigation text-center"]//a[contains(text(),"Collections")]');
		this.$headPhones = () => $(`//div[@class="mobile-nav__child-item"] //a[contains(text(),"this.$sideTitle = () => $('//h1[contains(text(),"Headphone")]`);
	}

	/**
	 * Method to hover collection option
	 */
	async hoverCollection() {
		await this.browser.elementHover("Collections");
		await this.$headPhones().click();
	}

	/**
	 * Method to select headphones from the dropdown
	 */
	async clickOnHeadphones() {
		await this.$headPhones().click();
	}
}

module.exports = {homePage: new Homepage()};
