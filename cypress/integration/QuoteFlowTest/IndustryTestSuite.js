/// <reference types="Cypress" />

import GlobalTestObjectsPage from "../../Pages/QuoteFlow/GlobalTestObjectsPage";
import IndustryPage from "../../Pages/QuoteFlow/IndstryPage";
import BusinessInformationPage from "../../Pages/QuoteFlow/BusinessInformationPage";


describe('Industry Test Suite', () => {
    const industry = new IndustryPage()
    const globalObjects = new GlobalTestObjectsPage()
    const businessInformation = new BusinessInformationPage();

    context('Positive Scenarios', ()=> {
        beforeEach(() => {
            globalObjects.navigateTo('Quote Flow');
        })
    
        it('TC001 Verify that the user is able to select the preferred "business type" and move into the "Business Information" page successfully.', () => {
    
            cy.fixture('QuoteFlowData').then((data) => {
                industry.performIndustryFlow(data.industryData.businessType, data.industryData.businessUpdate);
            })
        })
    
        afterEach(() => {
            globalObjects.checkNextButtonIsEnabled();
            globalObjects.clickNextButton();
            businessInformation.verifyBusinessInfoURL();
        })
    
    })

    context('Negative Scenarios', ()=> {
        beforeEach(() => {

            globalObjects.navigateTo('Quote Flow');
        })
    
        it('TC002 Verify that system will not accept any unsupported industries options.', () => {
            cy.fixture('QuoteFlowData').then((data) => {
                    industry.performUnsupportedIndustriesOptionsFlow(data.industryData.unsupportedIndustries[1]);
                    globalObjects.checkNextButtonIsEnabled();
                    globalObjects.clickNextButton();
                    industry.checkErrorMessage();
                    industry.checkPhoneNumber();
                
            })
        })
    
        it('TC003 Verify the functionality of resetting application after using unsupported industry option', () => {
            cy.fixture('QuoteFlowData').then((data) => {
                industry.performUnsupportedIndustriesOptionsFlow(data.industryData.unsupportedIndustries[1])
                globalObjects.checkNextButtonIsEnabled();
                globalObjects.clickNextButton();
                industry.performErrorPageFlow();
            })
        })
    })

    
})

