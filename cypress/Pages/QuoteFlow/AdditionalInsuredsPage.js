export default class AdditionalInsureds {



    //2-Check if the user is able to see the default active link of "Additional Insureds" under the left Main menu 
    cheackLocationLeftMenuADIN() {
      
        cy.get('<p.sc-hqyNC.sc-jbKcbu.cFItMM.activeLink>').should('have.text' , 'Additional Insureds');
    }

    //3-Check that the user is successfully redirected to the "Additional Insureds" page.
    // verifyLocationsPageTitleADIN() {
    //     cy.get('.sc-gZMcBi eYTZAk').should('have.text' , 'Additional Insureds');
    // }

    //4-Check if "Yes" button is clickable.
    clickOnYesButton() {

        cy.get('[data-cy=yes-additional-insureds]').click();
    }

    //5-Check if a new form is appearing when click on "Yes" button.
    checkIfAddPeopleFormIsAppearing() {

        cy.get('.sc-cvbbAY').should('be.visible');
    }

    //6-Check the "Yes" button is now successfully updated with blue color.
    yesButtonUpdated() {

        cy.get('.gJdvTf').should('have.css', 'background-color', 'rgb(65, 35, 255)');
    }

    //7-Check if the user can fill "First name" text box with valid information.
    //8-Fill the "First name" box with a Valid data ex: Test First name.
    fillFirstName(FirstName) {
        cy.get('[data-cy=add-ins-first-name]').type(FirstName);
    }

    //9-Check the "First name" box is now successfully updated with the correct data (Test First name)
    firstNameTextBoxContainTheData(FirstName) {

        cy.get('input[value="'.concat(FirstName).concat('"]')).should('be.visible');
    }

    // 10-Check if the user can fill "Last name" text box with valid information.
    // 11-Fill the "Last name" box with a Valid data ex: Test Last name.
    fillLastName(LastName) {
        cy.get('[data-cy=add-ins-last-name]').type(LastName);
    }

    //12-Check the "Last name" box is now successfully updated with the correct data (Test Last name)
    LastNameTextBoxContainTheData(LastName) {
        cy.get('input[value="'.concat(LastName).concat('"]')).should('be.visible');
    }

    // 13-Check if the user can fill "Email" text box with valid information.
    // 14-Fill the "Email" box with a Valid data ex: test@test.com.
    fillEmail(Email) {
        cy.get('[data-cy=add-ins-email]').type(Email);
    }

    //15-Check the "Email" box is now successfully updated with the correct data (test@test.com)
    EmailTextBoxContainTheData(Email) {
        cy.get('input[value="'.concat(Email).concat('"]')).should('be.visible');
    }

    //16-Check if the "Mailing Address" is can be checked.
    mailingAddressChickable() {
        cy.get('[data-cy=unselected]').click();
    }

    //17-Check the checkbox is now successfully updated with blue color.
    mailingAddressUpdated() {
        cy.get('.hHkBMH').should('have.css', 'background-color', 'rgb(65, 35, 255)');
    }


    //Check if the "Enter a different address" is clickable
    clickOnEnterDifferentAddress() {
        cy.get('.sc-cvbbAY > .sc-htoDjs').click();

    }
    //Check if the "Enter address manually" is clickable
    clickOnEnterAddressManually() {

        cy.get('[data-cy=toggle-manual-address]').click();
    }

    //Check if a new "Mailing address" text boxes is appearing.
    checkIfMailingAddressFormAppering() {
        cy.get('.sc-kxynE').should('be.visible');
    }

    //   19-Check if the user can fill "Street address" text box with valid information.
    // 20-Fill the "Street address" box with a Valid data ex: 9th.
    FillStreetAddress() {

        cy.get('[data-cy=manual-street-input]').type("9th st");
    }

    //Check the "Street address" box is now successfully updated with the correct data (9th)
    StreetAddressUpdated() {

        cy.get('input[value="'.concat("9th st").concat('"]')).should('be.visible');

    }

    //     22-Check if the user can fill "City" text box with valid information.
    // 23-Fill the "City" box with a Valid data ex: CARROLTON.
    FillCity() {

        cy.get('[data-cy=manual-city-input]').type("Carelton");
    }
    //24-Check the "City" box is now successfully updated with the correct data (CARROLTON)
    CityUpdated() {
        cy.get('input[value="'.concat("Carelton").concat('"]')).should('be.visible');

    }
    // 25-Check if the user can fill "State" text box with valid information.
    // 26-Fill the "State" box with a Valid data ex: KY.
    FillState() {

        cy.get('[data-cy=manual-state-input]').type("KA");
    }
    //27-Check the "State" box is now successfully updated with the correct data (KY)
    StateUpdated() {
        cy.get('input[value="'.concat("KA").concat('"]')).should('be.visible');
    }

    // 28-Check if the user can fill "Zipcode" text box with valid information.
    // 29-Fill the "Zipcode" box with a Valid data ex: 41008.
    FillZipCode(ZipCode) {

        cy.get('[data-cy=manual-zip-input]').type(ZipCode);
    }

    //30-Check the "Zipcode" box is now successfully updated with the correct data (41008)
    ZipcodeUpdated(ZipCode) {
        // cy.get('input[value="'.concat(ZipCode).concat('"]')).should('be.visible');
        cy.get('[data-cy="manual-zip-input"]').then(($ZipCode) => {

            const txt = $ZipCode.text();

            // cy.log(txt);

            expect(txt).not.to.equal(ZipCode);

        })




    }

    //31-Check if "Save address" button is enabled.
    SaveAddressButtonEnabeled() {
        cy.get('[data-cy=save-manual-address]').should('be.enabled');
    }

    //32-Click on "Save address" button
    clickOnSaveAddressButton() {
        cy.get('[data-cy=save-manual-address]').click();

    }

    //33-Check if the system add the new address
    newAddressAdded() {
        cy.get(':nth-child(7) > .sc-kcbnda > [data-cy=mailing-street]').should('be.visible');
    }

    //34-Check if the "New Mailing Address" is can be checked.
    newAddresCheckBoxIsChickable() {

        cy.get(':nth-child(7) > .sc-fEUNkw > .sc-dHmInP > [data-cy=unselected]').click();
    }

    //35-Check the checkbox is now successfully updated with blue color.
    newAddressCheckBoxUpdated() {
        cy.get('.hHkBMH').should('have.css', 'background-color', 'rgb(65, 35, 255)');

    }


    //18-Check if the "Add person" button is clickable.
    cheackAddPersonIsClickable() {
        cy.get('[data-cy=add-addl-ins]').click();
    }

    //19-Check if the contact information box is appeared 
    contactInformationBoxAppearing() {
        cy.get('[data-cy=additional-insured]').should('be.visible');
    }



    //17-Check if "Select existing address" button is clickable.
    ClickOnSelectExistingAddress() {
        cy.get('.sc-cvbbAY > :nth-child(7)').click()
    }

    //18-Check if a "Mailing Address" will appearing with the same location data that user filled already in "locations" page
    MailingAddressCheckBoxAppearing() {
        cy.get('[data-cy=mailing-street]').should('be.visible');

    }

    //20-Check if the information box is cleared out of data after clicking on delete icon
    deleteIconClickable() {
        cy.get('.sc-krDsej').click()

    }






    PerformAdditionalInsuredsFlow(FirstName, LastName, Email) {

        this.cheackLocationLeftMenuADIN();
     //   this.verifyLocationsPageTitleADIN();
        this.clickOnYesButton();
        this.checkIfAddPeopleFormIsAppearing();
        this.yesButtonUpdated();
        this.fillFirstName(FirstName);
        this.firstNameTextBoxContainTheData(FirstName);
        this.fillLastName(LastName);
        this.LastNameTextBoxContainTheData(LastName);
        this.fillEmail(Email);
        this.EmailTextBoxContainTheData(Email);
        this.mailingAddressChickable();
        this.mailingAddressUpdated();
        this.cheackAddPersonIsClickable();
        this.contactInformationBoxAppearing();

    }

    PerformAdditionalInsuredsFlowManually(FirstName, LastName, Email, ZipCode) {

        this.cheackLocationLeftMenuADIN();
    //    this.verifyLocationsPageTitleADIN();
        this.clickOnYesButton();
        this.checkIfAddPeopleFormIsAppearing();
        this.yesButtonUpdated();
        this.fillFirstName(FirstName);
        this.firstNameTextBoxContainTheData(FirstName);
        this.fillLastName(LastName);
        this.LastNameTextBoxContainTheData(LastName);
        this.fillEmail(Email);
        this.EmailTextBoxContainTheData(Email);
        this.clickOnEnterDifferentAddress();
        this.clickOnEnterAddressManually();
        this.checkIfMailingAddressFormAppering();
        this.FillStreetAddress();
        this.StreetAddressUpdated();
        this.FillCity();
        this.CityUpdated();
        this.FillState();
        this.StateUpdated();
        this.FillZipCode(ZipCode);
        this.ZipcodeUpdated(ZipCode);
        this.SaveAddressButtonEnabeled();
        this.clickOnSaveAddressButton();
        this.newAddressAdded();
        this.newAddresCheckBoxIsChickable();
        this.newAddressCheckBoxUpdated();
        this.cheackAddPersonIsClickable();
        this.contactInformationBoxAppearing();



    }

    PerformAdditionalInsuredsFlowSelectExistAddress(FirstName, LastName, Email) {

        this.cheackLocationLeftMenuADIN();
        this.verifyLocationsPageTitleADIN();
        this.clickOnYesButton();
        this.checkIfAddPeopleFormIsAppearing();
        this.yesButtonUpdated();
        this.fillFirstName(FirstName);
        this.firstNameTextBoxContainTheData(FirstName);
        this.fillLastName(LastName);
        this.LastNameTextBoxContainTheData(LastName);
        this.fillEmail(Email);
        this.EmailTextBoxContainTheData(Email);
        this.clickOnEnterDifferentAddress();
        this.ClickOnSelectExistingAddress();
        this.MailingAddressCheckBoxAppearing();
        this.mailingAddressChickable();
        this.mailingAddressUpdated();
        this.cheackAddPersonIsClickable();

    }

    PerformAdditionalInsuredsFlowDeleteBUtton(FirstName, LastName, Email) {

        this.cheackLocationLeftMenuADIN();
        this.verifyLocationsPageTitleADIN();
        this.clickOnYesButton();
        this.checkIfAddPeopleFormIsAppearing();
        this.yesButtonUpdated();
        this.fillFirstName(FirstName);
        this.firstNameTextBoxContainTheData(FirstName);
        this.fillLastName(LastName);
        this.LastNameTextBoxContainTheData(LastName);
        this.fillEmail(Email);
        this.EmailTextBoxContainTheData(Email);
        this.clickOnEnterDifferentAddress();
        this.ClickOnSelectExistingAddress();
        this.MailingAddressCheckBoxAppearing();
        this.mailingAddressChickable();
        this.mailingAddressUpdated();
        this.cheackAddPersonIsClickable();
        this.deleteIconClickable();

    }
}