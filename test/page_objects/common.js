/**
 * Export
 */
class Common {
	constructor() {
		/**
		 * Elements
		 */
		this.$pageHeader = () => $(`//header[contains(@class,"site-header")]`);
	}

	/**
	 * Methods
	 */

	/**
	 * Open up the application
	 */
	async openUrl() {
		await browser.url('https://techstrove.com/');
		await browser.maximizeWindow();
		await this.$pageHeader().waitForDisplayed({timeout: 20000});
	}
}

module.exports = Common;
