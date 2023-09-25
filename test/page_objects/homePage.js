const Common = require("./common.js");

class Homepage extends Common {
    constructor() {
        super();
        this.$menuOptions=(optionName)=>$(`//li[@class="site-nav__item site-nav__expanded-item site-nav--has-dropdown"]/a[contains(text(),"${optionName}")]`) //Menu bar options
        this.$menuDropDown=(dropDownNames)=>$(`//a[@class="site-nav__dropdown-link site-nav__dropdown-link--second-level "][contains(text(),"${dropDownNames}")]`) //dropdown option Name on menu bar
        
        
    }
    /**
     * Function for hover the collections and click on the product(headphone)
     * @param {String} menuOptionName 
     * @param {String} dropDownName 
     */

    async hoverOnCollections(menuOptionName,dropDownName){
        await this.$menuOptions(menuOptionName).moveTo()
        await this.$menuDropDown(dropDownName).scrollIntoView({block:"center"})
        await this.$menuDropDown(dropDownName).click()
        await this.$productPageHeader(dropDownName).waitForDisplayed()

    }
}

module.exports = { homePage: new Homepage() };
