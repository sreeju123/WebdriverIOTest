const expectchai=require('chai').expect

describe('Ecommerce App', () => {

    it('UI Controls - Smoke', () => {

        browser.url("/loginpagePractise/#")
        browser.maximizeWindow()
        $("input[name='username']").setValue("rahulshettyacademy")
        const password = $("input[name='password']")
        password.setValue("learning")
        const radioButtons = $$('.customradio'); // array of elements
        radioButtons[1].$('.radiotextsty').click();

        const modal = $('.modal-body');
        modal.waitForDisplayed();
        $('#cancelBtn').click()

       
        console.log(radioButtons[1].$('.radiotextsty').isSelected())

        radioButtons[1].$('.radiotextsty').click();
        modal.waitForDisplayed();
        $('#okayBtn').click()
        radioButtons[0].$('.radiotextsty').click();
        // $("#signInBtn").click()
        expect(modal).not.toBeDisplayed();


        const dropdown=$('select.form-control')
        dropdown.selectByAttribute('value','consult')
        dropdown.selectByVisibleText('Teacher')
        dropdown.selectByIndex(0)
        expectchai(dropdown.getValue()).to.be.equal('stud')
    })

    it('Dynamic dropdown controls - Sanity',()=>{

        browser.url('/AutomationPractice/')

        $('#autocomplete').setValue('ind')
        browser.pause(2000)
        let items=$$("[class='ui-menu-item'] div")
        
        // for(let i=0;i<items.length;i++){
        //     console.log(items[i].getText());
        // }

        const country=items.filter(item=>item.getText()==="India")
        country[0].click()
        browser.pause(2000)
    })


    it('checkboxes Identification',()=>{
        browser.url('/AutomationPractice/')
        const element=$$("input[type='checkbox']")
        element[1].click()
        expect(element[1]).toBeSelected()
        console.log(element[1].isSelected())
        console.log(element[2].isSelected())
    })

})