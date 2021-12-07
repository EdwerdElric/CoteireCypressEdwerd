export default class ContactInformationPage {

    // Check if the user is able to see the default active link of "Contact Information" under the left Main menu.
    checkContactInformationPageIsActive() {
        cy.get('.sc-jnlKLf .activeLink').should('have.text', 'contact information');
    }
    // Check that the user is successfully redirected to the page of Contact Information .
    verifyContactInformationURL() {
        cy.url().should('include', '/getquote/contact');
    }
    // First Name .
    enterContactInfoFirstName(contactFirstName) {
        cy.get('[data-cy="contact-first-name"]').type(contactFirstName).should('be.visible');
    }
    // Last Name .
    enterContactInfoLastName(contactLastName) {
        cy.get('[data-cy="contact-last-name"]').type(contactLastName).should('be.visible');
    }
    // Email . 
    enterContactInfoEmail(contactEmail) {
        cy.get('[data-cy="contact-email"]').type(contactEmail).should('be.visible');
    }
    // Phone Number .
    enterContactInfoPhoneNumber(contactPhoneNumber) {
        cy.get('[data-cy="contact-phone"]').type(contactPhoneNumber).should('be.visible');
    }
    // Exist Mail Address
    selectExistMailAddress() {
        cy.get('.sc-dHmInP jKnVkn>[data-cy="unselected"]').click().check('selcted');
    }
    // Mailing Address (AutoComplete) .
    enterAutoMailAddress(autoMailAddress) {
        cy.get('[data-cy="location-input"]').type(autoMailAddress).contains("332 Stoney Ln, Cadiz KY").click();
    }
    // Mailing Address (Manually)
    enterAddressManually(contactInfoStreetAddress, contactInfoCity, state, zipCode) {
        cy.get('[data-cy="toggle-manual-address"]').should('have.text', 'Enter address manually').click();
        cy.get('[data-cy="manual-street-input"]').type(contactInfoStreetAddress).should('be.visible');
        cy.get('[data-cy="manual-city-input"]').type(contactInfoCity).should('be.visible');
        cy.get('[data-cy="manual-state-input"]').type(state).should('be.visible');
        cy.get('[data-cy="manual-zip-input"]').type(zipCode).should('be.visible');
        cy.get('[data-cy="save-manual-address"]').should('have.text', 'Save address').click();
    }
    // Different Address .
    enterDiffrenetAddress() {
        cy.get('.sc-dREXXX gRgORF>.sc-htoDjs liIYGT').should('have.text', 'Enter a different address').click();
    }

    performContactInformationExistMailFlow(contactFirstName, contactLastName, contactEmail, contactPhoneNumber, autoMailAddress) {
        this.checkContactInformationPageIsActive();
        this.verifyContactInformationURL();
        this.enterContactInfoFirstName(contactFirstName);
        this.enterContactInfoLastName(contactLastName);
        this.enterContactInfoEmail(contactEmail);
        this.enterContactInfoPhoneNumber(contactPhoneNumber);
        this.selectExistMailAddress();

    }


}