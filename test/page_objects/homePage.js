const Commom = require("./common");
class Homepage extends Commom {
	constructor() {
		super();
		this.$categoryHover = () =>$('//li[@class="site-nav__item site-nav__expanded-item site-nav--has-dropdown"]')
		this.$categoryClick = (item) =>$(`//ul[@class="site-nav__dropdown text-left"]//a[contains(text(),"${item}")]`);
	}

/**
 * Methods
*/



// Use the moveTo method to hover over the element

	/**
	 * Method to hover on collection and select item
	 * @param {string} item 
	 */
	async hoverOverItem(item){
		this.$categoryHover().moveTo();
		await this.$categoryClick(item).waitForClickable();
		await this.$categoryClick(item).click();
	}

}
module.exports = new Homepage();
