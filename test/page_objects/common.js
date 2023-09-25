class Common {
	constructor() {
		this.$pageHeader = () => $('//h1//span[text()="TechTrove"]');
		this.$secondHeader = (second) => $(`//div[@class="page-width"]//a[contains(text(),"${second}")]`)
		this.$dropDownHeader = (drop) => $(`//ul[@class="site-nav__dropdown text-left"]//a[contains(text(),"${drop}")]`);
		this.$subMainHeader = (main) => $(`//h1[contains(text(),"${main}")]`);
		this.$verifyProduct = (product) => $(`//p[@class="h2 product-single__title"][contains(text(),"${product}")]`)
	}
	/**
	 * Open up the application
	 * @param {string} url URL of the application
	 */
	async openUrl() {
		await browser.url("https://techstrove.com/");
		await browser.maximizeWindow();
		await this.$pageHeader().waitForDisplayed({ timeout: 20000 });
	  }
	}

module.exports = Common;
