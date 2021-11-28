/// <reference types="Cypress" />

export default class PoliciesPage {

    verifyPoliciesPageTitle() {
        cy.log('Check that the user is successfully redirected to the second page of Policies');
        cy.contains("Policies").should('be.visible')
    }

    cheackPoliciesLeftMenu() {
        cy.log('Check if the user is able to see the default active link of "Policies" under the left Main menu');
        cy.get('.sc-frDJqD > :nth-child(3)').should("be.visible");
    }

    verifyPoliciesPageTitle() {
        cy.log('Check that the user is successfully redirected to the second page of Policies');
        cy.contains("Policies").should('be.visible')
    }

    checkPolicyTitle(policyType) {
        cy.log('Check if the user can see "Business Owner\'s Policy" text box title');
        cy.get('[data-cy='.concat(policyType).concat('] > .sc-daURTG > .sc-exAgwC')).should('be.visible')
    }


    selectPolicy(policyType) {
        cy.log('Check if checkbox is choosable');
        cy.get('[data-cy="'.concat(policyType).concat('"]')).click()
    }

    selectThreePolicies() {
        cy.log('check 3 policies');
        for (let i = 1; i <= 3; i++) {
            cy.get(':nth-child('.concat(i).concat(') > .sc-cMhqgX')).click();
        }
    }

    checkCheckBoxUpdated() {
        cy.log('Check if the check box is filled with Blue colored checkmark after choosing it');
        cy.get('.hHkBMH').should('have.css', 'background-color', 'rgb(65, 35, 255)');
    }

    clickOnLearnMore() {
        cy.log('Check if the  "Learn more" button  is clickable');
        cy.get('.jojiTP > .sc-bXGyLb > .sc-htoDjs').click();
    }

    clickOnThreeLearnMore(policyType) {
        cy.log('Check if the  3 "Learn more" buttons  are clickable');
        for (let i = 1; i <= 3; i++) {
            if (i == 1) {
                cy.get('[data-cy=BOP] > .sc-daURTG > .sc-exAgwC').should('be.visible')
            }
            else if (i == 2) {
                cy.get('[data-cy='.concat('GL').concat('] > .sc-daURTG > .sc-exAgwC')).should('be.visible')
            }
            else {
                cy.get('[data-cy='.concat('PL').concat('] > .sc-daURTG > .sc-exAgwC')).should('be.visible')
            }

            cy.get(':nth-child('.concat(i).concat(') > .sc-bXGyLb > .sc-htoDjs')).click();
            cy.get('div[style="height: auto; overflow: hidden; transition: height 0.25s ease 0s;"]').should('be.visible')
            cy.get(':nth-child('.concat(i).concat(') > .sc-bXGyLb > .sc-htoDjs')).click()
            cy.get('div[style="height: auto; overflow: hidden; transition: height 0.25s ease 0s;"]').should('not.exist');

        }
    }

    informationPolicyShow() {
        cy.log('Check if the list of information is shown after click on "Learn more" button');
        cy.get('div[style="height: auto; overflow: hidden; transition: height 0.25s ease 0s;"]').should('be.visible')
    }

    clickOnClose() {
        cy.log('Check if "close" Button is clickable');
        cy.get('.jojiTP > .sc-bXGyLb > .sc-htoDjs').click();
    }

    informationPolicyDisabled() {
        cy.log('Check if the list of information will be disappeared after clicking on the "close" button');
        cy.get('div[style="height: auto; overflow: hidden; transition: height 0.25s ease 0s;"]').should('not.exist');
    }


    performPoliciesFlow(policyType) {
        this.cheackPoliciesLeftMenu();
        this.verifyPoliciesPageTitle();
        this.checkPolicyTitle(policyType);
        this.selectPolicy(policyType);
        this.checkCheckBoxUpdated();
        this.clickOnLearnMore();
        this.informationPolicyShow();
        this.clickOnClose();
        this.informationPolicyDisabled()
    }

    performThreePoliciesFlow(policyType) {
        this.cheackPoliciesLeftMenu();
        this.verifyPoliciesPageTitle();
        this.selectThreePolicies(policyType);
        this.checkCheckBoxUpdated();
        this.clickOnThreeLearnMore();
    }

}