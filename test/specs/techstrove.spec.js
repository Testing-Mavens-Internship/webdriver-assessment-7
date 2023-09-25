const homePage = require('../page_objects/homePage');
const env = require('../../test-data/url.json')
const testdata = require('../../test-data/testData.json');
const shoppingPage = require('../page_objects/shopping-page');
const productPage = require('../page_objects/product-page');
const checkOut = require('../page_objects/checkout-page.js');
const randomName = require('random-name')
const randomPlace = require('random-names-places')
let firstName = randomName.first();
let lastName =randomName.last();
let address1 = randomPlace.place();
let city = randomPlace.place();
let email = (randomName.first()+"@gmail.com")
const timeOut = 5000;
describe('techstrove.com  ', () => {
	it('should be able to launch url', async () => {
			await homePage.openUrl(env.baseUrl);
			await expect(browser).toHaveUrl('https://techstrove.com/');
			expect(await homePage.$homePageHeader().waitForDisplayed({timeOut : timeOut , timeOutMsg : "The header is displayed"}))
		});
	it('The user should be able to hover over category and select item', async () => {
			await homePage.hoverOverItem(testdata.item[0]);
			expect(await shoppingPage.$shopingPageHeader(testdata.item[0]).waitForDisplayed({timeOut : timeOut , timeOutMsg : "The selected item is being displayed "}));
			expect(await shoppingPage.$productCount().isDisplayed())
			.withContext("The total count of the products is being displayed")
			.toBe(true);
		});
	it('The user should be able to select the particular product',async()=>{
		await shoppingPage.selectProduct(testdata.product[1]);
		expect(await shoppingPage.$product(testdata.product[1]).waitForDisplayed({timeOut : timeOut , timeOutMsg : "The same product is being displayed"}));
	})

	it('The user should be able to select the color' ,async()=>{
		await productPage.chooseColor(testdata.color[1]);
		expect(productPage.$itemImage().isEnabled());
	})

	it('The user should be able to increase the quantity', async()=>{
		await productPage.quantityIncrease();
		expect(await productPage.$increase().waitForDisplayed({timeOut : timeOut, timeOutMsg:"The quantity of the product is being increased"}));
	})

	it('Click on the add to cart button',async()=>{
		await productPage.clickOnAddToCart();
		expect(productPage.$cartHeader().waitForDisplayed({timeOut: timeOut, timeOutMsg:"The cart header is being validated"}));
	})

	it('Decrease the quantity of the prdouct by', async()=>{
		await productPage.quantityDecrease(testdata.quantity[0]);
		expect(productPage.total(testdata.price[1])).toBeDisplayed()
	})
	it('Click on checkout' ,async() =>{
		await productPage.clickOnCheckOut();
		expect(checkOut.$checkOutHeader().waitForDisplayed({timeOut : timeOut , timeOutMsg : "The header is being displayed"}))
	})

	it('Give the details of the user', async()=>{
		await checkOut.inputs(email,firstName,lastName,address1,city);
		expect(checkOut.$checkOutHeader().waitForDisplayed({timeOut : timeOut , timeOutMsg : "The header is being displayed"}))
	})
	it('Click on the country and state', async()=>{
		await checkOut.countryAndState()
		expect(checkOut.$checkOutHeader().waitForDisplayed({timeOut : timeOut , timeOutMsg : "The header is being displayed"}))
	})
});