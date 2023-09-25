const homePage = require('../page_objects/homePage');
const env = require('../../test-data/url.json');
const testData = require('../../test-data/testData.json') ;
const headphonePage = require('../page_objects/headphone-page');
const billingPage = require('../page_objects/billing-page');
const { faker, Faker } = require('@faker-js/faker');
const productDetailsPage = require('../page_objects/product-details-page');



describe('Automation of buying a product in techtrove application', () => {
		it('should be able to launch url', async () => {
			await homePage.openUrl();
			expect(await homePage.$homePageHeader().isDisplayed()).toBe(true);	
		});

		it('user should be able to hover on collection and select headphones', async () => {
			await homePage.selectFromTopNavigation(testData.header,testData.headPhone);
			expect (await  headphonePage.$header(testData.headPhone).isDisplayed()).toBe(true);
		});


		it("user should be able to quickview a product", async() =>{
			await headphonePage.quickView(testData.product);
			expect (await  headphonePage.$quickView(testData.product).isDisplayed()).toBe(true);
			let productName = headphonePage.$productName(testData.product).getText();
			let euro = headphonePage.$productPrice(product).getText();
			let productPrice = euro.replace('£','');
			expect (await productName.toEqual(testData.product));

		});
		it("user should be able to add the product to cart from quick view", async()=>{
			await headphonePage.addToCart();
			expect(await  headphonePage.$cartHeader().isDisplayed()).toBe(true);
		});

		it("user should be able to increase the quantity of product and checkout",async()=>{
			await headphonePage.addCountOfProduct(testData.subHeader);
			expect(await  billingPage.$subHeaders(testData.subHeader).isDisplayed()).toBe(true);
			expect(await headphonePage.$cartProductName(testData.product).toEqual(testData.product).toBe(true))
		});

		xit("user is able to fill in the details",async()=>{
			await billingPage.fillDetails(testData.firstName,testData.lastName,testData.phone,testData.address);
			
		})

	});

