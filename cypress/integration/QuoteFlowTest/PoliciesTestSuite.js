/// <reference types="Cypress" />

import BusinessInformationPage from "../../Pages/QuoteFlow/BusinessInformationPage";
import GlobalTestObjectsPage from "../../Pages/QuoteFlow/GlobalTestObjectsPage";
import IndustryPage from "../../Pages/QuoteFlow/IndstryPage";
import PoliciesPage from "../../Pages/QuoteFlow/PoliciesPage";

describe('Policies Test Suite', () => {

    const industry = new IndustryPage();
    const businessInformation = new BusinessInformationPage();
    const globalObjects = new GlobalTestObjectsPage();
    const policy = new PoliciesPage();

    beforeEach(() => {

        //Navigate to Quote Flow application
        globalObjects.navigateTo('Quote Flow');

        //perform industry flow
        cy.fixture('QuoteFlowData').then(data => {
            industry.performIndustryFlow(data.industryData.businessType);
        })

        //click on next button
        globalObjects.clickNextButton()

        //perform business information flow
        cy.fixture("QuoteFlowData").then(data => {
            businessInformation.performBusinessInformationFlow("Business Test", "0 - 3", "11-20", "15", "KY", "41008", "yes", "$10,000", "Total Loss");
        })

        //click on next button
        globalObjects.clickNextButton();
    })

    it('TC001 Verify that the user is able to apply successfully after selecting the \"Business Owner\'s Policy" insurance policy option', () => {
        cy.fixture('QuoteFlowData').then(data => {
            policy.performPoliciesFlow(data.policies.businessOwnersPolicy)
        })
    })

    it('TC002 Verify that the user is able to apply successfully after selecting the \"General Liability Policy\'s Policy" insurance policy option', () => {
        cy.fixture('QuoteFlowData').then(data => {
            policy.performPoliciesFlow(data.policies.generalLiability)
        })
    })

    it('TC003 Verify that the user is able to apply successfully after selecting the \"Professional Liability Policy\'s Policy" insurance policy option', () => {
        cy.fixture('QuoteFlowData').then(data => {
            policy.performPoliciesFlow(data.policies.professionalLiability)
        })
    })

    it('TC004 Verify that the user is able to apply successfully after selecting the all types of the insurance policy options', () => {
        cy.fixture('QuoteFlowData').then(data => {
            policy.performThreePoliciesFlow(data.policies.businessOwnersPolicy, data.policies.generalLiability, data.policies.professionalLiability)
        })
    })

   afterEach(() => {
        globalObjects.checkNextButtonIsEnabled();
        globalObjects.clickNextButton();
        globalObjects.verifyPageURL("getquote/financebasics");
    })
})