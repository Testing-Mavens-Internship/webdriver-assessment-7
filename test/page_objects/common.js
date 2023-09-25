/**
 * Export
 */
class Common {
	constructor() {
		/**
		 * Elements
		 */
		this.$pageHeader = title => $(`//span[contains(text(),'${title}')]`);
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
		await this.$pageHeader().waitForDisplayed({timeout: 40000});
	}
}

module.exports = Common;
