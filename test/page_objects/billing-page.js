const Commom = require('./common');
const productDetailsPage = require('./product-details-page');
class BillingPage extends Commom {
	constructor() {
		/**elements */
		super();
		this.$inputDetails = value => $(`//input[contains(@placeholder,"${value}")]`);
	}
	/**
	 * Method to fill the details of the user
	 * @param {string} firstName
	 * @param {*string} lastName
	 * @param {number} phone
	 * @param {string} address
	 */
	async fillDetails(firstName, lastName, phone, address) {
		await this.$inputDetails('mobile').setValue(phone);
		await this.$inputDetails('First Name').setValue(firstName);
		await this.$inputDetails('Last Name').setValue(lastName);
		await this.$inputDetails('Address').setValue(address);
		await this.$inputDetails('City').setValue('arizona');
		await this.$inputDetails('Postcode').setValue('85015');
	}
}
module.exports = new BillingPage();
