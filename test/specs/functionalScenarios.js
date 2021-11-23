const expectchai = require('chai').expect
var assert = require('chai').assert

describe('Functional testing on Application - Smoke', () => {

    it('Scrolling and Mousehover', () => {
        browser.url('/AutomationPractice/')
        $('#mousehover').scrollIntoView();
        $('#mousehover').moveTo();
        $('=Top').click();

    })

    xit('Alerts', () => {
        browser.url('http://only-testing-blog.blogspot.com/')
        $("button[ondblclick='myFunction()']").doubleClick()
        browser.isAlertOpen()   // true if it opens
        expectchai(browser.isAlertOpen()).to.be.true
        console.log(browser.getAlertText())  // getText from alert
        expectchai(browser.getAlertText()).to.be.equal("Press 'OK' or 'Cancel' button!")
        browser.acceptAlert()
    })


    xit('WebTable sorting validation', () => {
        browser.url('/seleniumPractise/#/offers')
        $('tr th:nth-child(1)').click()

        // retrive list of veggie name in to array A
        // sort array A and => create array B from A
        // compare array A & B

        const veggieLocator = $$("tbody tr td:nth-child(1)")
        const originalVeggieList = veggieLocator.map(veggie => veggie.getText())
        console.log("Normal=" + originalVeggieList)

        // Copy originalVeggieList to another list to make original one as it is
        modifiedVeggieList = originalVeggieList.slice()

        // Arrays are passed by reference
        const sortedVeggies = modifiedVeggieList.sort()
        console.log("Sorted=" + sortedVeggies)
        expectchai(originalVeggieList).to.eql(sortedVeggies)

    })

    xit('WebTable Filter', () => {
        browser.url('/seleniumPractise/#/offers')
        $("input[id='search-field']").setValue("Tomato")
        const rowArray = $$("tbody tr td:nth-child(1)")
        expect(rowArray).toBeElementsArrayOfSize({ eq: 1 })
        expect(rowArray[0]).toHaveText("Tomato")
    })

})