/// <reference types="Cypress" />

export default class PoliciesPage {

    verifyPoliciesPageTitle() {
        cy.log('Check that the user is successfully redirected to the second page of Policies');
        cy.contains("Policies").should('be.visible')
    }

}