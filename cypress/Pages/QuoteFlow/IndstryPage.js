/// <reference types="Cypress" />

export default class IndustryPage {

    cheackIndustryLeftMenu() {
        cy.log('Check if the user is able to see the default active link of "industry" under the left Main menu');
        cy.get('.sc-frDJqD > :nth-child(1)').should("be.visible");
    }

    verifyIndustryPageTitle() {
        cy.log('Check that the user is successfully redirected to the first page of industry');
        cy.contains("Industry").should('be.visible');
    }

    enterBusinessType(businessType) {
        cy.log('Fill the "business type" box with a Valid data ex: Accountant and select the correct option using Auto search complete function');
        cy.get('[data-cy="industry-input"]').clear();
        cy.get('[data-cy="industry-input"]').type(businessType);
    }

    selectIndustryAutoComplete() {
        cy.log('Check the first option result in list and make sure it is matching the entered data, "Accountant" and select it');
        cy.get('[data-cy="industry-option"]').eq(0).should('be.visible')
        cy.get('ul').find('[data-cy="industry-option"]').eq(0).click();
    }

    checkBusinessTypeUpdate(BusinessUpddat) {
        cy.log('Check the "business type" box is now successfully updated with the correct selected option (Accountant)');
        cy.get('input[class="sc-AxjAm StDqM"]').then(($BusinessUpdate) => {
            const txt = $BusinessUpdate.text();
            cy.log(txt);
            cy.log(BusinessUpddat);
            expect(txt).not.to.equal(BusinessUpddat);
        })
    }

    enterUnsupportedIndustriesOptionsFlow(UnsupportedIndustriesOptions) {
        cy.log('Fill the "business type" box with a Valid data , ex:• roofing contractors');
        cy.get('[data-cy="industry-input"]').clear();
        cy.get('[data-cy="industry-input"]').type(UnsupportedIndustriesOptions);
    }

    checkErrorMessage() {
        cy.log('Check the Error message');
        cy.contains("It looks like we don't currently support your industry.").should('be.visible');
    }

    checkPhoneNumber() {
        cy.log('Check the Phone number appears for support');
        cy.contains("(855) 566–1011").should('be.visible');
    }

    clickRestApplicationButton() {
        cy.log('Click on rest application button');
        cy.get('.sc-eqIVtm > .sc-bdVaJa').click();
    }

    checkBusinessTypeCleared() {
        cy.log('Check the "type of business" box is cleared of old data');
        cy.get('[data-cy="industry-input"]').then(($BusinessCleared) => {
            const txt = $BusinessCleared.text();
            cy.log(txt);
            expect(txt).not.to.equal("$0");
        })
    }


    performIndustryFlow(businessType, BusinessUpddat) {
        this.cheackIndustryLeftMenu();
        this.verifyIndustryPageTitle();
        this.enterBusinessType(businessType);
        this.selectIndustryAutoComplete();
        this.checkBusinessTypeUpdate(BusinessUpddat);
    }

    performLogoFlow() {
        this.checkLog
    }

    performUnsupportedIndustriesOptionsFlow(UnsupportedIndustriesOptions) {
        this.cheackIndustryLeftMenu();
        this.verifyIndustryPageTitle();
        this.enterUnsupportedIndustriesOptionsFlow(UnsupportedIndustriesOptions)
        this.selectIndustryAutoComplete();
        this.checkBusinessTypeUpdate();
    }
    performErrorPageFlow() {
        this.checkErrorMessage();
        this.checkPhoneNumber();
        this.clickRestApplicationButton();
        this.verifyIndustryPageTitle();
        this.checkBusinessTypeCleared();
    }


}