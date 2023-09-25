const landingPage = require('../page-objects/landing-page');
const headphonesPage = require('../page-objects/headphones-page');
const productPage = require('../page-objects/product-page');
const cartPage = require('../page-objects/cart-page');
const checkoutPage = require('../page-objects/checkout-page');
const data = require('../test-data/testdata.json');

describe('End to end automation of TECH TROVE', () => {
	it('Load the website', async () => {
		await landingPage.loadUrl();
		expect(await landingPage.$header().isDisplayed())
			.withContext('Header is not displayed')
			.toBe(true);
	});

	it('Select Headphones from Collections drop down list', async () => {
		await landingPage.selectHeadphones(headphonesPage.$headphonesHeader());
		expect(await headphonesPage.$headphonesHeader().isDisplayed())
			.withContext('Header is not displayed')
			.toBe(true);
	});

	it('Select a headphone from Headphones page', async () => {
		let priceValidation = await headphonesPage.selectHeadphone(data.product);
		expect(await productPage.$productName(data.product).isDisplayed()).toBe(true);
		expect(await priceValidation).toBe(true);
	});

	it('Increase the quantity of the product and select the colour of the product and add the product to cart', async () => {
		await productPage.selectColourAndIncreaseQuantity(data.quantity, data.colour);
		expect(await cartPage.$productName(data.product).isDisplayed())
			.withContext('Product name in the cart is wrong')
			.toBe(true);
		expect(await cartPage.$cartheader().isDisplayed())
			.withContext('Cart header is not displayed')
			.toBe(true);
	});

	it('Validate the total price of the item in cart page', async () => {
		let priceValidation = await cartPage.validateTotalPrice();
		expext(await priceValidation).toBe(true);
	});
	it('reduce the quantity of the product by one in the cart page and click on the checkout button', async () => {
		await cartPage.checkout(data.product);
		expect(await checkoutPage.$productName(data.product).isDisplayed())
			.withContext('Product name is wrong')
			.toBe(true);
	});
	it('Enter first name,last name,address and city using random', async () => {});
});
