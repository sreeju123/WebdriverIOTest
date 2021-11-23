describe("Application", function() {
    this.retries(1)
    xit("First Test - Smoke", () => {

        browser.url("/loginpagePractise/#")
        browser.maximizeWindow()
        console.log("*****************" + browser.getTitle() + "*****************")
        expect(browser).toHaveTitleContaining("Rahul Shetty Academy")

        $("input[name='username']").setValue("Sreejith")
        // browser.pause(3000)
        $("#username").setValue("Rahul")

        const password = $("input[name='password']")
        password.setValue("Learning")

        $("#signInBtn").click()

        console.log($(".alert-danger").getText() + "is text displayed in screen")

        // browser.waitUntil(condition, { timeout, timeoutMsg, interval })
        browser.waitUntil(() => $("#signInBtn").getAttribute("value") === "Sign In",
            { timeout: 4000, timeoutMsg: "Error message did not appear" })


        console.log($(".alert-danger").getText() + "is text displayed in screen")

        expect($("p")).toHaveTextContaining("(username is rahulshettyacademy and Password is learning)")


    });

    it('Login Fail Test', function () {
        // this.retries(2)
        browser.url("/loginpagePractise/#")
        browser.maximizeWindow()
        expect(browser).toHaveTitle("Rahul Shetty Academy1")
    })

    it('Login Success Page', () => {
        browser.url("/loginpagePractise/#")
        browser.maximizeWindow()
        $("input[name='username']").setValue("rahulshettyacademy")
        const password = $("input[name='password']")
        password.setValue("learning")
        $("#signInBtn").click()
        const link = $('*=Checkout')
        link.waitForExist()
        expect(browser).toHaveTitle('ProtoCommerce')
        expect($(".nav-link btn btn-primary").isDisplayed())
    })
});
