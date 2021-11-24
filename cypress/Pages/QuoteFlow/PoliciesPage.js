/// <reference types="Cypress" />

export default class PoliciesPage {

    verifyPoliciesPageTitle() {
        cy.contains("Policies").should('be.visible')
    }

}