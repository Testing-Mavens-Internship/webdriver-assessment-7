/**
 * Export
 */
class Common {
	constructor() {
		/**
		 * Elements
		 */
		this.$homePageHeader = () => $('//h1/span[contains(text(),"Tech")]');
		this.$header = value => $(`//h1[contains(text(),"${value}")]`);
		this.$button = value => $(`//button/span[contains(text(),"${value}")]`);
		this.$subHeaders = value => $(`//h2[contains(text(),"${value}")]`);
	}

	/**
	 * Methods
	 */

	/**
	 * Open up the application
	 * @param {string} url URL of the application
	 */
	async openUrl() {
		await browser.url('https://techstrove.com/');
		await browser.maximizeWindow();
	}
}

module.exports = Common;
