/// <reference types="Cypress" />

import GlobalTestObjectsPage from "../../cypress/Pages/QuoteFlow/GlobalTestObjectsPage";
import IndustryPage from "../../cypress/Pages/QuoteFlow/IndstryPage";
import BusinessInformationPage from "../../cypress/Pages/QuoteFlow/BusinessInformationPage";
import FinanceBasicsPage from "../../cypress/Pages/QuoteFlow/FinanceBasicPage";
import PoliciesPage from "../../cypress/Pages/QuoteFlow/PoliciesPage";
// import LocationsPage from "../../cypress/Pages/QuoteFlow/LocationsPage";
// import GeneralLiabilityPage from "../../cypress/Pages/QuoteFlow/GeneralLiabilityPage";
import ProfessionalLiabilityPage from "../../cypress/Pages/QuoteFlow/ProfessionalLiabilityPage";

describe('Professional Liability Test Suite', () => {

    const industry = new IndustryPage();
    const businessInfo = new BusinessInformationPage();
    const globalObjects = new GlobalTestObjectsPage();
    const policy = new PoliciesPage();
    const finance = new FinanceBasicsPage();
    const location = new LocationsPage();
    const generalLiability = new GeneralLiabilityPage();
    const ProfessionalLiability = new ProfessionalLiabilityPage();

    beforeEach(() => {

        globalObjects.navigateTo('Quote Flow');

        cy.fixture('QuoteFlowData').then(data => {
            industry.performIndustryFlow(data.industryData.businessType);
        })

        globalObjects.clickNextButton();

        businessInfo.performBusinessInformationFlow("Business Test", "0 - 3", "11-20", "15", "KY", "41008", "no", "", "");

        globalObjects.clickNextButton();

        cy.fixture('QuoteFlowData').then(data => {
            policy.selectPolicy("PL");
        })
        
        globalObjects.clickNextButton();

        cy.fixture('QuoteFlowData').then(data => {
            finance.performFinanceBasicsFlow(data.financeBasics.annuallySalesAmount, data.financeBasics.annuallyPayrollAmount);
        })

        globalObjects.clickNextButton();

        // cy.fixture('QuoteFlowData').then(data => {
        //     location.performLocationsFlow(data.locations[0].street, data.locations[0].city, data.locations[0].state, data.locations[0].zipCode, data.locations[0].buildingType.type2, data.locations[0].suppression[0], data.locations[0].deductible.by2500, data.locations[0].propertyAndEquipment, data.locations[0].buildingCoverege);

        // })

        // globalObjects.clickNextButton();

        // cy.fixture('QuoteFlowData').then(data => {
        //     generalLiability.performGeneralLiabilityFlow(300000, 1000);
        // })

        // globalObjects.clickNextButton();
    
    })

    it('Verify that the user is able to submit the professional liability policy form successfully by selecting the amount of professional liability claims $25.000', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.ProfessionalLiabilityData.claims[0], data.ProfessionalLiabilityData.plDeductible[0], data.ProfessionalLiabilityData.plCoveragePeriod[0], data.ProfessionalLiabilityData.plEndDate[0], data.ProfessionalLiabilityData.professionalExp[0], data.ProfessionalLiabilityData.expYears);

        }) 
    })
})