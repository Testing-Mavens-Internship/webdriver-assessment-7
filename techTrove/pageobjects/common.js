class Common {
	constructor() {
		this.$header = () => $(`//a[@class="site-header__logo-link logo--has-inverted"]`);
	}
	/**
	 * Method to launch url
	 */
	async launchUrl() {
		await browser.url('https://techstrove.com/');
		await browser.maximizeWindow();
	}
}
module.exports = {Common};
