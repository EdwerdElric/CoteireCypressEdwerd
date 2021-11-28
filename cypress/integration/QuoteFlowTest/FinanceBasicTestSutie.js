
/// <reference types="Cypress" />

import GlobalTestObjectsPage from "../../Pages/QuoteFlow/GlobalTestObjectsPage";
import BusinessInformationPage from "../../Pages/QuoteFlow/BusinessInformationPage";
import IndustryPage from "../../Pages/QuoteFlow/IndstryPage";
import PoliciesPage from "../../Pages/QuoteFlow/PoliciesPage";
import FinanceBasicPage from "../../Pages/QuoteFlow/FinanceBasicPage";

describe('Finance Basics Test Suite', () => {

    const industry = new IndustryPage()
    const businessInfo = new BusinessInformationPage()
    const globalObjects = new GlobalTestObjectsPage()
    const policy = new PoliciesPage()
    const finance = new FinanceBasicPage();

    beforeEach(() => {

        globalObjects.navigateTo('Quote Flow');

        cy.fixture('QuoteFlowData').then(data => {
            industry.performIndustryFlow(data.industryData.businessType);
        })

        globalObjects.clickNextButton()

        businessInfo.performBusinessInformationFlow("Business Test", "0 - 3", "11-20", "15", "KY", "41008", "yes", "$10,000", "Total Loss");

        globalObjects.clickNextButton();

        policy.selectPolicy("BOP");

        globalObjects.clickNextButton();

    })

    it('TC001 Verify the functionality of completing the "Finance Basics" form page after applying the business earns and total personal/employee amounts.', () => {
        cy.fixture('QuoteFlowData').then((data) => {
            finance.performFinanceBasicsFlow(data.financeBasics.annuallySalesAmount, data.financeBasics.annuallyPayrollAmount);
        })

    })

    afterEach(() => {
        globalObjects.checkNextButtonIsEnabled();
        globalObjects.clickNextButton();
        globalObjects.verifyPageURL('getquote/locations');
    })

})