const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AlertPage extends Page {
    /**
     * define selectors using getter methods
     */
    get alertBtn () { return $('button') }
    get message () { return $$('p')[1] }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    clickOnALert () {
        this.alertBtn.click(); 
        browser.acceptAlert()
        browser.pause()
    }

    /**
     * overwrite specifc options to adapt it to page object
    //  */
    open () {
        return super.open('javascript_alerts');
    }
}

module.exports = new AlertPage();
