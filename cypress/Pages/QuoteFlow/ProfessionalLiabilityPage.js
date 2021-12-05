

export default class ProfessionalLiabilityPage {

    // Check if the user is able to see the default active link of "Professional Liability" under the left Main menu.
    checkProfessionalLiabilityPageIsActive() {
        cy.get('.sc-frDJqD .activeLink').should('have.text', 'professional liability');
    }
    // Check that the user is successfully redirected to the page of Professional Liability .
    verifyProfessionalliabilityURL() {
        cy.url().should('include', '/getquote/pl');
    }
    // For professional liability claims amount . 
    selectPlClaims(claims) {
        cy.get('button[aria-label="Professional liability claims coverage amount: ' + claims + '"]').click().should('not.be.disabled');
    }
    // For professional liability deductible amount .
    selectPlDeductible(plDeductible) {
        cy.get('button[aria-label="Professional liability claims deductible amount: ' + plDeductible + '"]').click().should('not.be.disabled');
    }
    // Policy coverage period .
    selectPlCoveragePeriod(plCoveragePeriod) {
        cy.get('button[aria-label="Years of prior acts coverage: ' + plCoveragePeriod + '"]').click().should('be.visible');
        if (plCoveragePeriod == 0) {
            cy.get('button[aria-label="Years of prior acts coverage: ' + plCoveragePeriod + '"]').contains('None').click().should('be.visible');
        }
    }
    // End date .
    selectEndDate(plEndDate) {
        cy.get('button[aria-label="Period after can file a claim: ' + plEndDate + '"]').click().should('be.visible');
        if (plEndDate == 0) {
            cy.get('button[aria-label="Period after can file a claim: ' + plEndDate + '"]').contains('90 days').click().should('be.visible');
        }
    }
    // Professional Experience .
    selectProfessionalExperience(requirmentEXP, maintainedEXP, professionalExp) {
        cy.get('div[class="sc-hGoxap bncZFl"]').should('be.visible');
        cy.get('button[data-cy="' + requirmentEXP + '-certificationsRequired"]').click().should('be.visible');
        cy.get('div[class="sc-CtfFt laLsLM"]').should('be.visible');
        cy.get('button[data-cy="' + maintainedEXP + '-certificationsMaintained"]').click().should('be.visible');
        cy.get('input[data-cy="years-of-professional-experience"]').type(professionalExp).should('be.visible');
    }
    // Check Estimated price .
    checkEstimatedPrice() {
        cy.get('[data-cy="premium"]').then(() => {
            expect('h3[class="sc-gzOgki dOfNZq"]').to.not.equal('$--')
        })

        // cy.get('[data-cy="premium"]').should('not.have.text', '$--');
    }
    // Preform flow .
    performProfessionalLiabilityFlow(claims, plDeductible, plCoveragePeriod, plEndDate, requirmentEXP, maintainedEXP, professionalExp) {
        this.checkProfessionalLiabilityPageIsActive();
        this.verifyProfessionalliabilityURL();
        this.selectPlClaims(claims);
        this.checkEstimatedPrice();
        this.selectPlDeductible(plDeductible);
        this.checkEstimatedPrice();
        this.selectPlCoveragePeriod(plCoveragePeriod);
        this.checkEstimatedPrice();
        this.selectEndDate(plEndDate);
        this.checkEstimatedPrice();
        this.selectProfessionalExperience(requirmentEXP, maintainedEXP, professionalExp);
        this.checkEstimatedPrice();
    }





}