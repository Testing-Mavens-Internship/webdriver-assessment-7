const {launchPage} = require('../page-object/launch-page.js');
const {productPage} = require('../page-object/product-page.js');
const {checkoutPage} = require('../page-object/checkout-page.js');
const data = require('../testData/data.json');

describe('Automation for booking a product from Tech Trove website:', () => {
	it('Launch the url', async () => {
		await launchPage.openUrl(launchPage.$headerList(data.list[1]));
		expect(await launchPage.$headerList(data.list[0]).isDisplayed())
			.withContext('Expect the Home header to be displayed')
			.toBe(true);
	});

	it('Click on headphones, select a product and navigate to product page', async () => {
		await launchPage.clickOnHeadphone(data.list[1], data.list[2], data.items[0], productPage.$productHeader(data.items[0]), productPage.$productPrice(data.price[0]));
		expect(await launchPage.$headerItem(data.list[2]).isDisplayed()).withContext('Expect the Headphone header to be displayed');
		expect(await productPage.$productHeader(data.items[0]).isDisplayed()).withContext('Expect the name of the product to be displayed').toBe(true);
		expect(await productPage.$productPrice(data.price[0]).isDisplayed())
			.withContext('Expect the name of the product to be displayed')
			.toBe(true);
	});
	it('Apply color filter , quantity and add the product to cart', async () => {
		await productPage.applyItemFilter(data.color[2], data.items[0]);
		expect(await productPage.$cartProductName(data.items[0]).isDisplayed())
			.withContext('Expect the product name to be displayed')
			.toBe(true);
		expect(await productPage.getTotal(data.price[0])).toBe(true);
	});

	it('Click on Checkout button and navigate to checkout page', async () => {
		await productPage.clickCheckoutButton(checkoutPage.$checkoutProductName(data.items[0]));
		expect(await checkoutPage.$checkoutProductName(data.items[0]).isDisplayed())
			.withContext('Expect the product name to be displayed')
			.toBe(true);
	});
});
