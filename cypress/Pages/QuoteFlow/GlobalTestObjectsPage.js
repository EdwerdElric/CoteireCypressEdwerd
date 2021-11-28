/// <reference types="Cypress" />

export default class GlobalTestObjectsPage {


    clickNextButton() {
        cy.get('[data-cy="submit"]').click();
    }

    checkNextButtonIsEnabled() {
        cy.get('[data-cy="submit"]').should('be.enabled')
    }

    checkNextButtonIsDisabled() {
        cy.get('[data-cy="submit"]').should('be.disabled')
    }

    clickBackButton() {
        cy.get('[data-cy="previous-button"]').click();
    }

    clickPrivacyPolicyLink() {
        cy.get('a[class="sc-cJSrbW bDPhXQ"]').click();
    }

    clickTermsAndConditionsLink() {
        cy.get('a[class="sc-cJSrbW bDPhXQ"]').click();
    }

    navigateTo(url) {
        cy.clearLocalStorage();

        //Full size screen
        cy.viewport("macbook-16");

        //Navigate to URL
        switch (url) {
            case 'Quote Flow':
                cy.visit("https://quote-test.coterieinsurance.com/");
                break;
            case 'Kit':
                cy.visit("https://kit-test.coterieinsurance.com/");
                break;
        }
    }

    verifyTestElementVisibility(tag, locator, selector) {
        cy.get(''.concat(tag, '[').concat(locator, '="').concat(selector, '"]')).should('be.visible');
    }

    verifyPageURL(pageURL) {
        cy.url().should('include', pageURL);
    }

}