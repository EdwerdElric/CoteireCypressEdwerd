/// <reference types="Cypress" />

import GlobalTestObjectsPage from "../../Pages/QuoteFlow/GlobalTestObjectsPage";
import BusinessInformationPage from "../../Pages/QuoteFlow/BusinessInformationPage";
import IndustryPage from "../../Pages/QuoteFlow/IndstryPage";
import PoliciesPage from "../../Pages/QuoteFlow/PoliciesPage";
import FinanceBasicPage from "../../Pages/QuoteFlow/FinanceBasicPage";
import LocationsPage from "../../Pages/QuoteFlow/LocationsPage";
import GeneralLiabilityPage from "../../Pages/QuoteFlow/GeneralLiabilityPage";
import AdditionalInsuredsPage from "../../Pages/QuoteFlow/AdditionalInsuredsPage";
import ContactInforamtionPage from "../../Pages/QuoteFlow/ContactInformationsPages";

describe('Contact Information Test Suite', () => {

    const industry = new IndustryPage();
    const businessInfo = new BusinessInformationPage();
    const globalObjects = new GlobalTestObjectsPage();
    const policy = new PoliciesPage();
    const finance = new FinanceBasicPage();
    const location = new LocationsPage();
    const gl = new GeneralLiabilityPage();
    const addInsu = new AdditionalInsuredsPage();
    const ContactInforamtion = new ContactInforamtionPage();

    beforeEach(() => {
        // Visit Website
        globalObjects.navigateTo('Quote Flow');
        // Industry Page
        cy.fixture('QuoteFlowData').then(data => {
            industry.performIndustryFlow(data.industryData.businessType);
        })
        globalObjects.clickNextButton();
        // Business Information Page
        businessInfo.performBusinessInformationFlow("Business Test", "0 - 3", "11-20", "15", "KY", "41008", "no", "", "");
        globalObjects.clickNextButton();
        // Policies Page
        cy.fixture('QuoteFlowData').then(data => {
            policy.selectPolicy('BOP');
        })
        globalObjects.clickNextButton();
        // Finance Basics Page
        cy.fixture('QuoteFlowData').then(data => {
            finance.performFinanceBasicsFlow(data.financeBasics.annuallySalesAmount, data.financeBasics.annuallyPayrollAmount);
        })
        globalObjects.clickNextButton();
        // General Liability Page
        cy.fixture('QuoteFlowData').then(data => {
            gl.performGeneralLiabilityFlow(data.generalLiabilityData.coverage[0], data.generalLiabilityData.deductible2[0]);
        })
        globalObjects.clickNextButton();
        // Additional Insurds Page
        addInsu.clickOnNoButton();
        globalObjects.clickNextButton();
    })
    afterEach(() => {
        globalObjects.clickNextButton();
        globalObjects.verifyPageURL("/getquote/addons");

    })

    it('TC001 Verify that the user is able to add contact information using existing address', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ContactInforamtion.performContactInformationExistMailFlow(data.contactInformationData.contactFirstName, data.contactInformationData.contactLastName, data.contactInformationData.contactEmail)
        })
    })



}) 