

export default class ProfessionalLiabilityPage {

    // Check if the user is able to see the default active link of "General Liability" under the left Main menu.
    checkProfessionalliabilityPage() {
        cy.get('class="sc-hqyNC sc-jbKcbu cFItMM activeLink"').should('not.be.disabled');
    }
    // Check that the user is successfully redirected to the page of Professional Liability .
    verifyProfessionalliabilityPage() {
        cy.url().should('include', '/getquote/pl');
    }
    // For professional liability claims amount . 
    selectPlClaims(claims) {
        cy.fixture('QuoteFlowData',).then(data => {
            cy.get('button[data-cy="multi-button-'+claims+'"]').should(not.be.disabled);
        })
    }
    // For professional liability deductible amount .
    selectPlDeductible(plDeductible) {
        cy.fixture('QuoteFlowData',).then(data => {
            cy.get('button[data-cy="multi-button-'+plDeductible+'"]').should(not.be.disabled);
        })
        
    }
    // Policy coverage period .
    selectPlCoveragePeriod(plCoveragePeriod) {
        cy.fixture('QuoteFlowData',).then(data => {
            cy.get('button[data-cy="multi-button-'+plCoveragePeriod+'"]').should('be.visible');
        if (plCoveragePeriod == 0){
            cy.get('button[data-cy="multi-button-'+plCoveragePeriod+'"]').contains('None');
        }
        })
        // contains(plCoveragePeriod+' years');
    }
    // End date .
    selectEndDate(plEndDate) {
        cy.fixture('QuoteFlowData',).then(data => {
            cy.get('button[aria-label="Period after can file a claim: '+plEndDate+'"]').should('be.visible');
            if (plEndDate == 0) {
                cy.get('button[aria-label="Period after can file a claim: '+plEndDate+'"]').contains('90 days');
            }
        })
        // contains(plEndDate+' years');
    }
    // Professional Experience .
    selectProfessionalExperience(professionalExp) {
        cy.fixture('QuoteFlowData',).then(data => {
            cy.get('button[aria-label="Does your industry require professional certifications? '+professionalExp+'"]').contains(professionalExp);
            cy.get('button[aria-label="Do you maintain professional certifications? '+professionalExp+'"]').contains(professionalExp);
            cy.get('input[data-cy="years-of-professional-experience"]').type(expYears).should('have.value', 'expYears');
        })
        // , expYears
    }
    // Check Estimated price .
    checkEstimatedPrice() {
        cy.fixture('QuoteFlowData',).then(data => {
            // cy.get('div[data-cy="quote-box"]').children('h3[data-cy="premium"]').contains(price);
            cy.get('div[data-cy="quote-box"]').children('h3[data-cy="premium"]').should('be.visible');
        })
       
    }
    // test child
    testChildClass(){
        cy.get('div[class="sc-dymIpo iFhGBf"]').children('div[data-cy="multi-button-0"]').click();
    }
    // Preform flow .
    performProfessionalLiabilityFlow(claims, plDeductible, plCoveragePeriod, plEndDate, professionalExp) {
        this.checkProfessionalliabilityPage();
        this.verifyProfessionalliabilityPage();
        this.selectPlClaims(claims);
        // this.checkEstimatedPrice();
        this.selectPlDeductible(plDeductible);
        // this.checkEstimatedPrice();
        this.selectPlCoveragePeriod(plCoveragePeriod);
        // this.checkEstimatedPrice();
        this.selectEndDate(plEndDate);
        // this.checkEstimatedPrice();
        this.selectProfessionalExperience(professionalExp);
        this.checkEstimatedPrice();
    }





}