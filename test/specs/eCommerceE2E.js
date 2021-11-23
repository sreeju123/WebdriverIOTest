const expectchai = require('chai').expect

describe('Ecommerce Application E2E - Smoke', () => {

    it('End to ENd Test', () => {

        var products = ["Blackberry", "Nokia Edge"]
        browser.url("/loginpagePractise/#")
        browser.maximizeWindow()
        $("input[name='username']").setValue("rahulshettyacademy")
        const password = $("input[name='password']")
        password.setValue("learning")
        $("#signInBtn").click()
        const link = $('*=Checkout')
        link.waitForExist()
        cards = $$("div[class='card h-100']")
        cards.filter(card => products.includes(card.$("div[class='card-body'] h4 a").getText()))  // It returns an array of 2 elements
            .map(productCard => productCard.$("div[class='card-footer'] button").click())
        link.click()

        productPrices = $$("table[class='table table-hover'] tbody tr td:nth-child(4) strong")
        // getText()
        // format it and convert in to Integer and apply sum of all values
        const sumOfProducts = productPrices.map(productPrice => parseInt(productPrice.getText().split(".")[1].trim()))
            .reduce((acc, price) => acc + price, 0) //1st argument acc is 0 and 2nd argument price comes from productPrice
        // 0+65000 = 65000
        // 65000+55000 = 155000

        console.log("\n"+sumOfProducts)
        const totalValue= $("table[class='table table-hover'] tbody tr td:nth-child(5) strong").getText().split(".")[1].trim()
        const totalIntValue=parseInt(totalValue)
        console.log("\n"+totalIntValue)
        expectchai(sumOfProducts).to.equal(totalIntValue)

        $("button[class='btn btn-success']").click()
        $("#country").setValue("ind")
        // $("div[class='lds-ellipsis']").waitForExist(false)
        // both will work above or below code  to check wait till invisibilty
        $("div[class='lds-ellipsis']").waitForExist({reverse:true})
        $("=India").click()
        $("input[type='submit']").click()
        expect($(".alert-success")).toHaveTextContaining("Success")
        
        

    })


})