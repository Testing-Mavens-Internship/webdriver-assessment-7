const {Common} = require('./common');

class PaymentPage extends Common {
	constructor() {
		this.$payHeader = () => $(`//h1[@class="n8k95w1 _1frageme0 n8k95w2"]`);
	}
}
module.exports = {
	payment: new PaymentPage(),
};
