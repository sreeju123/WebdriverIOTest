const expectchai = require('chai').expect
const loginPage = require('../pageobjects/LoginPage')
const shopPage = require('../pageobjects/ShopPage')
const reviewPage = require('../pageobjects/ReviewPage')
// To read data from json file
const fs = require('fs')
let credentials = JSON.parse(fs.readFileSync('test/testData/LoginTest.json'))
let e2eCredentials = JSON.parse(fs.readFileSync('test/testData/e2eTest.json'))

describe("Application Page Object Test", () => {
    beforeEach(function () {
        browser.url("/loginpagePractise/#")
    });

    // To read JSON file
    credentials.forEach(({ username, password }) => {

        it("Login Fail POM", () => {

            // browser.url("/loginpagePractise/#")
            browser.maximizeWindow()
            console.log("*****************" + browser.getTitle() + "*****************")
            expect(browser).toHaveTitleContaining("Rahul Shetty Academy")

            // loginPage.Login("fail", "fail")
            loginPage.Login(username, password)
            console.log(loginPage.alert.getText() + "is text displayed in screen")

            // browser.waitUntil(condition, { timeout, timeoutMsg, interval })
            browser.waitUntil(() => loginPage.signIn.getAttribute("value") === "Sign In",
                { timeout: 4000, timeoutMsg: "Error message did not appear" })


            console.log(loginPage.alert.getText() + "is text displayed in screen")
            expect(loginPage.textInfo).toHaveTextContaining("(username is rahulshettyacademy and Password is learning)")

        });
    });


    e2eCredentials.forEach(({ products }) => {

        it('End to End Test', () => {

            // var products = ["Blackberry", "Nokia Edge"]
            // browser.url("/loginpagePractise/#")
            browser.maximizeWindow()
            loginPage.Login("rahulshettyacademy", "learning")
            shopPage.checkout.waitForExist()
            shopPage.addProductsToCart(products)
            shopPage.checkout.click()
            const sumOfProducts = reviewPage.sumOfProducts() //1st argument acc is 0 and 2nd argument price comes from productPrice
            console.log("\n***********" + sumOfProducts)
            const totalIntValue = reviewPage.totalFormattedPrice()
            console.log("\n" + totalIntValue)
            expectchai(sumOfProducts).to.equal(totalIntValue)

            $("button[class='btn btn-success']").click()
            $("#country").setValue("ind")
            // $("div[class='lds-ellipsis']").waitForExist(false)
            // both will work above or below code  to check wait till invisibilty
            $("div[class='lds-ellipsis']").waitForExist({ reverse: true })
            $("=India").click()
            $("input[type='submit']").click()
            expect($(".alert-success")).toHaveTextContaining("Success")
        })
    })
});
