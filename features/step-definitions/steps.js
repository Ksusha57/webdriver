const { Given, When, Then } = require('@cucumber/cucumber');
const AlertPage = require('../pageobjects/alert.page');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage,
    alert: AlertPage
}

Given(/^I am on the (\w+) page$/, (page) => {
    pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, (username, password) => {
    LoginPage.login(username, password)
});

When(/^I click on alert button$/, () => {
    AlertPage.clickOnALert()
});

Then(/^I should see a flash message saying (.*)$/, (message) => {
    expect(SecurePage.flashAlert).toBeExisting();
    expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Then(/^I should see an alert modal$/, () => {
    expect(AlertPage.message).toHaveTextContaining('You successfully clicked an alert');
});

