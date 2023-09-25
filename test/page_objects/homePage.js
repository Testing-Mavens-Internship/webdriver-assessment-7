const Common = require("./common");
class Homepage extends Common {
	constructor() {
		super();
		}
		/**
		 * method to select outlet
		 * @param {string} second 
		 * @param {string} drop 
		 */
		async clickSubHeader(second,drop){
			await this.$secondHeader(second).moveTo();
			await this.$dropDownHeader(drop).click();

		}
}
module.exports = new Homepage();
