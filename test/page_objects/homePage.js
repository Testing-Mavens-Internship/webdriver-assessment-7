const Commom = require('./common');

class Homepage extends Commom {
	constructor() {
		super();
		this.$clickOnTab = () => $(`(//a[@href="/collections/headphone"])[2]`);
		this.$sectionHeader = value => $(`//h1[contains(text(),"${value}")]`);
		this.$elementHover = () => $(`//li/a[contains(text(),"Collections")]`);
	}

	/**
	 * Methods
	 */

	/**
	 * Method to Hover on collection and click on headphone
	 */
	async clickONHeadphone() {
		const elementHover = this.$elementHover();
		await elementHover.moveTo();
		await this.$clickOnTab().waitForClickable();
		await this.$clickOnTab().click();
		await this.$sectionHeader("Headphone").waitForDisplayed({timeout: 10000});
	}
}
module.exports = new Homepage();
