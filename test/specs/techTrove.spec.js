const {homePage} = require('../page_objects/homePage.js');
const{productsPage}=require('../page_objects/productsPage.js')
//const {checkoutPagee}=require('../page_objects/checkoutPage.js')
//const env = require('../../test-data/url.json')
const data = require('../../test-data/testData.json');

// let fname = faker.person.firstName(); 
// let lname = faker.person.lastName();
// let emailid=fname+"@gmail.com";
// let ph = Math.floor(Math.random() * 9000000000) + 1000000000;


describe("Tech Trove Application",()=>{
    it("Launch the Application", async()=>{
        await homePage.launchUrl();
        expect(await homePage.$mainHeader().isDisplayed()).withContext("Expect the application Logo").toBe(true)
    })
    it("Hover on Collections and click on Headphones",async()=>{
        await homePage.hoverOnCollections(data.menuOptionName,data.dropDownName)
        expect(await productsPage.$productPageHeader(data.dropDownName).isDisplayed()).withContext(`Expect the ${data.dropDownName} header`).toBe(true)
    })
    it(`Click on the ${data.productName}`,async()=>{
        await productsPage.clickOnProduct(data.productName)
        expect(await productsPage.$productPageHeader(data.productName).isDisplayed()).withContext("Expect the Product header same as the product that you choosen").toBe(true)
    })
    // it(`Selecting the required the quantity`,async()=>{
    //     await productsPage.selectingQuantity(data.quantitySelectPlus,data.limit1)
    // })
    it(`Selecting the required the quantity and Selecting the ${data.selectColor}color`,async()=>{
        await productsPage.selectingQuantity(data.quantitySelectPlus,data.limit1)
        await productsPage.selectingColor(data.selectColor,data.buttonName,data.quantitySelectMinus,data.limit2)
        expect(await productsPage.$cartHeader().isDisplayed()).withContext("Expect the cart header").toBe(true)
        expect(await productsPage.$productValidationCart(data.productName).isDisplayed()).withContext("Expect the product name same as choose").toBe(true)

      //  await productsPage.priceValidation()
    })
    // it("Filling the delivery information",async()=>{
    //     await checkoutPagee.fillingDetails(data.email,data.firstName,data.lastName,data.Address,data.city,emailid,fname,lname)
    // })


	});

