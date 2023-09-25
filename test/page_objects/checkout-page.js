const {faker} = require('@faker-js/faker');
class CheckOut {
	constructor() {
		this.$inputField = (val) => $(`//span[contains(text()="${val}")]`);
	}

	/**
	 * Method to Fill in the details and Checkout
	 */
	async checkOut() {
		let fname = faker.person.firstName();
		let lname = faker.person.lastName();
		let ph = Math.floor(Math.random() * 9000000000) + 1000000000;
	}
}
