const Commom = require('./common');
class Homepage extends Commom {
	constructor() {
		/**elements */
		super();
		this.$homePageHeader = () => $('//h1/span[contains(text(),"Tech")]');
		this.$topNavigationBar = menu => $(`//li/a[contains(text(),"${menu}")]`);
		this.$dropDownOptions = value => $(`//li/a[contains(text(),"${value}")]`);
	}

	/**
	 * Methods
	 */

	/**
	 * Method to click on Get Started
	 * @param {String} header
	 */
	async selectFromTopNavigation(header, headPhone) {
		await this.$topNavigationBar(header).moveTo();
		await this.$dropDownOptions(headPhone).click();
		await this.$header(headPhone).waitForDisplayed({timeout: 30000, timeoutMsg: `Header still not displayed`});
	}
}
module.exports = new Homepage();
