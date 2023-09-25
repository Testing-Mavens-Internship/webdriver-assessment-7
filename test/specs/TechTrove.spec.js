const {homePage} = require ('../page_objects/home-page.js');
const {collectionsPage} = require ('../page_objects/collections-page.js');
const {checkoutPage} = require ('../page_objects/checkout-page.js');
//const data = require ('../test-data/testData.json')
let color = "Blue";
let quantity = "2";
import randomNumber from "random-num";
let number = randomNumber(9000000000,9999999999);
import randomName from "random-name";
let firstName = randomName.first();
let lastName = randomName.last();
let address = randomName.address();
let city = randomName.city();
let zip = "85015";

describe('My Login application', () => {
    it('should launch the url', async () => {
        await homePage.openUrl()
        expect(await homePage.$header().isDisplayed()).withContext('expect header is displayed ').toBe(true);
    })

    it('click collections header and select headphone option and validate the header', async () => {
        await homePage.clickOnHeadphone()
        expect(await homePage.$headphoneHeader().isDisplayed()).withContext('expect header is displayed ').toBe(true);
    })

it('select item and validate', async () => {
        await homePage.selectItem()
        expect(await homePage.$validateItemName().isDisplayed()).withContext('expect item name is displayed ').toBe(true);
    })

    it('select color and quantity and click on add to cart button', async () => {
        await homePage.selectOptions(color,quantity)
        expect(await homePage.$cartHeader().waitForDisplayed()).withContext('expect header is displayed ').toBe(true);
    })

    it('validate cart page and decrease the quantity of itme', async () => {
        await collectionsPage.reduceQuantity()
        expect(await collectionsPage.$validateName().waitForDisplayed()).withContext('expect selected item name is displayed ').toBe(true);
        expect(await collectionsPage.$validateQuantity().waitForDisplayed()).withContext('expect selected quantity is displayed ').toBe(true);
        expect(await collectionsPage.$validateColor().waitForDisplayed()).withContext('expect selected color is displayed ').toBe(true);
        expect(await checkoutPage.$techTroveHeader().waitForDisplayed()).withContext('expect header is displayed ').toBe(true);
    })

    it('enter the details and validate', async () => {
        await checkoutPage.fillDetails(firstName,lastName,address,city,zip)
        expect(await checkoutPage.$techTroveHeader().waitForDisplayed()).withContext('expect header is displayed ').toBe(true);
        expect(await checkoutPage.$validateName().waitForDisplayed()).withContext('expect selected item name is displayed ').toBe(true);
        expect(await checkoutPage.$validateColor().waitForDisplayed()).withContext('expect selected color is displayed ').toBe(true);
        expect(await checkoutPage.$validatePrice().waitForDisplayed()).withContext('expect selected price is displayed ').toBe(true);

    })
})