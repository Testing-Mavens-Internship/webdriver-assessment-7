/**
 * Export
 */
class Common {
	constructor() {
		/**
		 * Elements
		 */
		this.$homePageHeader = () =>  $('//h1[@class="site-header__logo"]');
		this.$product = (product) =>$(`//h1[contains(text(),"${product}")]`);
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
