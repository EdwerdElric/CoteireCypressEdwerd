

export default class ProfessionalLiabilityPage {

    // Check if the user is able to see the default active link of "General Liability" under the left Main menu.
    checkProfessionalliabilityPage() {
        cy.get('.sc-frDJqD .activeLink').should('have.text', 'professional liability');
    }
    // Check that the user is successfully redirected to the page of Professional Liability .
    verifyProfessionalliabilityPage() {
        cy.url().should('include', '/getquote/pl');
    }
    // For professional liability claims amount . 
    selectPlClaims(claims) {
        cy.fixture('QuoteFlowData',).then(data => {
            cy.get('button[data-cy="multi-button-'+claims+'"]').click().should('not.be.disabled');
        })
    }
    // For professional liability deductible amount .
    selectPlDeductible(plDeductible) {
        cy.fixture('QuoteFlowData',).then(data => {
            cy.get('button[data-cy="multi-button-'+plDeductible+'"]').click().should('not.be.disabled');
        })
        
    }
    // Policy coverage period .
    selectPlCoveragePeriod(plCoveragePeriod) {
        cy.fixture('QuoteFlowData',).then(data => {
            cy.get('button[data-cy="multi-button-'+plCoveragePeriod+'"]').click().should('be.visible');
        if (plCoveragePeriod == 0){
            cy.get('button[data-cy="multi-button-'+plCoveragePeriod+'"]').contains('None').click();
        }
        })
        // contains(plCoveragePeriod+' years');
    }
    // End date .
    selectEndDate(plEndDate) {
        cy.fixture('QuoteFlowData',).then(data => {
            cy.get('button[aria-label="Period after can file a claim: '+plEndDate+'"]').click().should('be.visible');
            if (plEndDate == 0) {
                cy.get('button[aria-label="Period after can file a claim: '+plEndDate+'"]').contains('90 days').click();
            }
        })
        // contains(plEndDate+' years');
    }
    // Professional Experience .
    selectProfessionalExperience(requirmentEXP, maintainedEXP, professionalExp) {
        cy.fixture('QuoteFlowData',).then(data => {
            cy.get('div[class="sc-hGoxap bncZFl"]').should('be.visible');
            if(requirmentEXP == "Yes") {
                cy.get('button[data-cy="yes-certificationsRequired"]').click().should('be.visible');
            }
            else if (requirmentEXP == "No") {
                cy.get('button[data-cy="no-certificationsRequired"]').click().should('be.visible');
            }
            cy.get('div[class="sc-CtfFt laLsLM"]').should('be.visible');
            if(maintainedEXP == "Yes") {
                cy.get('button[data-cy="yes-certificationsMaintained"]').click().should('be.visible');
            }
            else if (maintainedEXP == "No") {
                cy.get('button[data-cy="no-certificationsMaintained"]').click().should('be.visible');
            }
            cy.get('input[data-cy="years-of-professional-experience"]').type(professionalExp).should('be.visible');
        })
        
    }
    // Check Estimated price .
    checkEstimatedPrice() {
        cy.fixture('QuoteFlowData',).then(data => {
            cy.get('div[class="sc-iyvyFf gljgVk"]').children('h3[class="sc-gzOgki dOfNZq"]').then( () => {
                expect('h3[class="sc-gzOgki dOfNZq"]').not.to.equal('$--');
            })
        })
       
    }
    // test child
    testChildClass(){
        cy.get('div[class="sc-dymIpo iFhGBf"]').children('button[data-cy="multi-button-0"]').should('be.visible');
    }
    // Preform flow .
    performProfessionalLiabilityFlow(claims, plDeductible, plCoveragePeriod, plEndDate, requirmentEXP, maintainedEXP, professionalExp, price1) {
        this.testChildClass();
        this.checkProfessionalliabilityPage();
        this.verifyProfessionalliabilityPage();
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