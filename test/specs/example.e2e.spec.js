const homePage = require('../page_objects/homePage');
const env = require('../../test-data/url.json');
const testData = require('../../test-data/testData.json');
const {viewPage} = require('../page_objects/view-page');

describe('Automation of the techtrove.com headphone purchasing process', () => {
	it('Should be able to launch url', async () => {
		await homePage.openUrl();
		await expect(browser).toHaveUrl('https://techstrove.com/');
		expect(await homePage.$pageHeader().isDisplayed())
			.withContext('Expect header to be displayed')
			.toBe(true);
	});

	it('user should be able to clickon Headphone tab', async () => {
		await homePage.clickONHeadphone();
		expect(await homePage.$sectionHeader('Headphone').isDisplayed())
			.withContext('Expect header to be displayed')
			.toBe(true);
	});

	it('User selects a Headphone', async () => {
		expect(await viewPage.selectProduct(testData.color)).toBe(true);
		expect(await viewPage.$checkOutHeader().isDisplayed())
			.withContext('Expect header to be displayed')
			.toBe(true);
	});
});
