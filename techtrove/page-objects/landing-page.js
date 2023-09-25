const Common = require('./common');
class LandingPage extends Common {
	constructor() {
		super();
		this.$collections = () => $('//a[contains(text(),"Collections") and @class="site-nav__link site-nav__link--underline site-nav__link--has-dropdown" ]');
		this.$headphones = () => $('//a[contains(text(),"Headphone") and @class="site-nav__dropdown-link site-nav__dropdown-link--second-level "]');
	}
	/**
	 *
	 * @param {String} headphonesHeader
	 */
	async selectHeadphones(headphonesHeader) {
		await this.$collections().moveTo();
		await this.$headphones().click();
		await headphonesHeader.waitForDisplayed({timeout: 3000});
	}
}

module.exports = new LandingPage();
