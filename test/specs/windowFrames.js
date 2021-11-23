describe('Window Handling', () => {

    it('Parent & Child Windows switch', () => {

        browser.url('/AutomationPractice/')
        $('#openwindow').click()
        const windows = browser.getWindowHandles()
        browser.switchToWindow(windows[1]);
        console.log("\n" + browser.getTitle())
        browser.closeWindow()
        browser.switchToWindow(windows[0]);
        console.log(browser.getTitle())

        browser.newWindow('/#/index')
        const title = browser.getTitle()
        browser.switchWindow('/AutomationPractice/')
        $('#name').setValue(title)
        browser.switchWindow(title)
        console.log(browser.getUrl())
    })

    xit('Frames switch', () => {
        browser.url('/AutomationPractice/')
        $('#mousehover').scrollIntoView()
        console.log($$('a').length)
        browser.switchToFrame($("iframe[id='courses-iframe']"))
        console.log($("=Courses").getTagName())
        console.log($$('a').length)
        browser.switchToFrame(null)
        console.log($$('a').length)
    })


})