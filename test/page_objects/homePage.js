const Commom = require("./common");
class Homepage extends Commom {
	constructor() {
		super();
		this.$topBar = (section="Collections")=>$(`//a[contains(text(),"${section}")]/ancestor::li[@class="site-nav__item site-nav__expanded-item site-nav--has-dropdown"]`)
		this.$subList =  (sub="Headphone")=>$(`//ul[@class="site-nav__dropdown text-left"]//a[contains(text(),"${sub}")]`)
		this.$sectionHeader = (head="Headphone")=>$(`//h1[contains(text(),"${head}")]`)
	}

/**
 * Methods
*/
	async clickOnHeadPhone(){
		await this.$topBar().moveTo();
		await this.$subList().waitForDisplayed()
		await this.$subList().click()
		await this.$sectionHeader().waitForDisplayed()
	}


}
module.exports = new Homepage();
