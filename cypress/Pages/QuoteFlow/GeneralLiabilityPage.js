
export default class GeneralLiabilityPage {
    // // Check if the user is able to see the default active link of "General Liability" under the left Main menu . 
    // checkGeneralLiabilityLeftMenu() {
    //     cy.get('class="sc-hqyNC sc-jbKcbu cFItMM activeLink"').should("be.visible");
    // }
    // //Check that the user is successfully redirected to the fifth page (General Liability). 
    // verifyGeneralLiabilityPageTitle() {
    //     cy.contains("General Liability").should('be.visible');
    // }

    //check page



    //check if the user can choose coverage data to submit 
    selectCoverageData(coverage) {
        cy.get('button[data-cy="multi-button-'+coverage+'"]').click().should('not.be.disabled');
    }


    //check if the user can choose deductible data to submit 
    selectDeductibleData(deductible2) {
        cy.get('button[data-cy="multi-button-'+deductible2+'"]').click().should('not.be.disabled');
    }

    // //check if help box (?) appears
    // selectCheckbox() {
    //     cy.get('span[id="GL-tooltip-icon"]').click();
    //     cy.get('span[id="PD_DEDUCTIBLE-tooltip-icon"]').click();
    // }

    //check professional liability page
    // checkProfessionalliabilityPage() {
    //     cy.get('a[class="sc-hqyNC sc-jbKcbu cFItMM activeLink"]').contains("Professional Liability"). should('be.visible'); 
    // }


    performGeneralLiabilityFlow(coverage, deductible2) {
        this.selectCoverageData(coverage);
        this.selectDeductibleData(deductible2);
        // this.selectCheckbox();

    }

}