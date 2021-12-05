/// <reference types="Cypress" />

import GlobalTestObjectsPage from "../../Pages/QuoteFlow/GlobalTestObjectsPage";
import BusinessInformationPage from "../../Pages/QuoteFlow/BusinessInformationPage";
import IndustryPage from "../../Pages/QuoteFlow/IndstryPage";
import PoliciesPage from "../../Pages/QuoteFlow/PoliciesPage";
import FinanceBasicPage from "../../Pages/QuoteFlow/FinanceBasicPage";
import LocationsPage from "../../Pages/QuoteFlow/LocationsPage";
import GeneralLiabilityPage from "../../Pages/QuoteFlow/GeneralLiabilityPage";
import ProfessionalLiabilityPage from "../../Pages/QuoteFlow/ProfessionalLiabilityPage";

describe('Professional Liability Test Suite', () => {

    const industry = new IndustryPage();
    const businessInfo = new BusinessInformationPage();
    const globalObjects = new GlobalTestObjectsPage();
    const policy = new PoliciesPage();
    const finance = new FinanceBasicPage();
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

    it('TC001 Verify that the user is able to submit the professional liability policy form successfully by selecting the amount of professional liability claims $25.000', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[0], data.profissionalLiabilityData.plDeductible[0], data.profissionalLiabilityData.plCoveragePeriod[0], data.profissionalLiabilityData.plEndDate[0], data.profissionalLiabilityData.maintainedEXP[0], data.profissionalLiabilityData.requirmentEXP[0], "4");

        }) 
    })
    it('TC002 Verify that the user is able to submit the professional liability policy form successfully by selecting the amount of professional liability claims $50.000', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[1], data.profissionalLiabilityData.plDeductible[1], data.profissionalLiabilityData.plCoveragePeriod[1], data.profissionalLiabilityData.plEndDate[1], data.profissionalLiabilityData.maintainedEXP[1], data.profissionalLiabilityData.requirmentEXP[1], "4");

        }) 
    })
    it('TC003 Verify that the user is able to submit the professional liability policy form successfully by selecting the amount of deductible $750', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[2], data.profissionalLiabilityData.plDeductible[2], data.profissionalLiabilityData.plCoveragePeriod[2], data.profissionalLiabilityData.plEndDate[2], data.profissionalLiabilityData.requirmentEXP[0], data.profissionalLiabilityData.maintainedEXP[1], "4");

        }) 
    })
    it('TC004 Verify that the user is able to submit the professional liability policy form successfully by selecting the amount of deductible is None', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[2], data.profissionalLiabilityData.plDeductible[4], data.profissionalLiabilityData.plCoveragePeriod[0], data.profissionalLiabilityData.plEndDate[1], data.profissionalLiabilityData.requirmentEXP[1], data.profissionalLiabilityData.maintainedEXP[0], "4");

        }) 
    })
    it('TC005 Verify that the user is able to submit the professional liability policy form successfully by selecting the amount of deductible $5,000', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[2], data.profissionalLiabilityData.plDeductible[5], data.profissionalLiabilityData.plCoveragePeriod[3], data.profissionalLiabilityData.plEndDate[0], data.profissionalLiabilityData.requirmentEXP[0], data.profissionalLiabilityData.maintainedEXP[0], "4");

        }) 
    })
})