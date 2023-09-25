class Common{

    constructor(){
this.$header=()=>$('//a[@class="site-header__logo-link logo--has-inverted"]')
    }
/**
 * Method to load the website
 */
    async loadUrl(){
await browser.url('https://techstrove.com/')
    await browser.maximizeWindow();
    await this.$header().waitForDisplayed({timeout:5000})
  
    
    }
}

module.exports=Common;