const {landingPage} = require('../pageobjects/landing-page');
const {payment} = require('../pageobjects/payment-page');
const data = require('../testdata/data.json');
describe('End-to-end automation of TechTrove application', () => {
	it('Launch the TechTrove url and validate header', async () => {
		await landingPage.launchUrl();
		expect(await landingPage.$header().isDisplayed())
			.withContext('Expect TechTrove application to be launched and header validated')
			.toBe(true);
	});

	it('Hover over collections and select headphones', async () => {
		await landingPage.hoverCollections();
		expect(await landingPage.$headphoneHeader().isDisplayed())
			.withContext('Expect headphone option is selected and navigation validated')
			.toBe(true);
	});

	it('Click on item and validate navigation', async () => {
		await landingPage.clickOnItem(data.item[0]);
		expect(await landingPage.$product(data.item[0]).isDisplayed())
			.withContext('Expect item to be clicked and navigation validated')
			.toBe(true);
		// expect(await price.isDisplayed()).toBe(true)
	});

	it('Select colour and number of items', async () => {
		await landingPage.clickOnColor(data.color[3]);
		expect(await landingPage.$cartItem().isDisplayed())
			.withContext('Expect color and number of items to be selected')
			.toBe(true);
	});

	it('valiadate price of item ', async () => {
		expect(await landingPage.calculatePrice()).toBe(true);
		expect(await payment.$payHeader().isDisplayed())
			.withContext('Expect header to be displyed')
			.toBe(true);
	});
});
