/**
 * Export
 */
class Common {
	constructor() {
		/**
		 * Elements
		 */
		this.$header = ()=>$(`//a[@class="site-header__logo-link logo--has-inverted"]`)

	}


	/**
	 * Methods
	 */

	/**
	 * Open up the application
	 * @param {string} url URL of the application
	 */
	async openUrl(url) {
		await browser.url(url);
		await browser.maximizeWindow();
	}
}

module.exports = Common;
