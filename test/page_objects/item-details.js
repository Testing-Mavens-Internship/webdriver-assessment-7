const Commom = require('./common.js');
class ItemDetailsPage extends Commom {
	constructor() {
		super();
		this.$sideTitle = title => $(`//h1[contains(text(),"${title}")]`);
		this.$itemName = item => $(`//div[contains(text(),"${item}")]`);
	}
	/**
	 * Method to click on the item reqired
	 * @param {string} item
	 */
	async clickOnItemName(item) {
        await this.$itemName(item).scrollIntoView({ block: "center" });
        await this.$itemName(item).waitForClickable(5000);
		await this.$itemName(item).click();
	}
}

module.exports = {itemDetailsPage: new ItemDetailsPage()};
