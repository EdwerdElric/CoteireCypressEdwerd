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
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[0], data.profissionalLiabilityData.plDeductible[0], data.profissionalLiabilityData.plCoveragePeriod[0], data.profissionalLiabilityData.plEndDate[0], data.profissionalLiabilityData.maintainedEXP[0], data.profissionalLiabilityData.requirmentEXP[0], data.profissionalLiabilityData.professionalExp[0]);
        }) 
    })
    it('TC002 Verify that the user is able to submit the professional liability policy form successfully by selecting the amount of professional liability claims $50.000', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[1], data.profissionalLiabilityData.plDeductible[1], data.profissionalLiabilityData.plCoveragePeriod[1], data.profissionalLiabilityData.plEndDate[1], data.profissionalLiabilityData.maintainedEXP[1], data.profissionalLiabilityData.requirmentEXP[1], data.profissionalLiabilityData.professionalExp[0]);
        }) 
    })
    it('TC003 Verify that the user is able to submit the professional liability policy form successfully by selecting the amount of deductible $750', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[2], data.profissionalLiabilityData.plDeductible[2], data.profissionalLiabilityData.plCoveragePeriod[2], data.profissionalLiabilityData.plEndDate[2], data.profissionalLiabilityData.requirmentEXP[0], data.profissionalLiabilityData.maintainedEXP[1], data.profissionalLiabilityData.professionalExp[0]);
        }) 
    })
    it('TC004 Verify that the user is able to submit the professional liability policy form successfully by selecting the amount of deductible is None', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[2], data.profissionalLiabilityData.plDeductible[4], data.profissionalLiabilityData.plCoveragePeriod[0], data.profissionalLiabilityData.plEndDate[1], data.profissionalLiabilityData.requirmentEXP[1], data.profissionalLiabilityData.maintainedEXP[0], data.profissionalLiabilityData.professionalExp[0]);
        }) 
    })
    it('TC005 Verify that the user is able to submit the professional liability policy form successfully by selecting the amount of deductible $5,000', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[2], data.profissionalLiabilityData.plDeductible[5], data.profissionalLiabilityData.plCoveragePeriod[3], data.profissionalLiabilityData.plEndDate[0], data.profissionalLiabilityData.requirmentEXP[0], data.profissionalLiabilityData.maintainedEXP[0], data.profissionalLiabilityData.professionalExp[0]);
        }) 
    })
    it('TC006 Verify that the user is able to submit the professional liability policy form successfully by selecting the amount of deductible $50,000', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[2], data.profissionalLiabilityData.plDeductible[8], data.profissionalLiabilityData.plCoveragePeriod[6], data.profissionalLiabilityData.plEndDate[5], data.profissionalLiabilityData.requirmentEXP[1], data.profissionalLiabilityData.maintainedEXP[1], data.profissionalLiabilityData.professionalExp[0]);
        }) 
    })
    it('TC007 Verify that the user is able to submit the professional liability policy form successfully by selecting the amount of deductible $1,500', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[3], data.profissionalLiabilityData.plDeductible[3], data.profissionalLiabilityData.plCoveragePeriod[3], data.profissionalLiabilityData.plEndDate[3], data.profissionalLiabilityData.requirmentEXP[1], data.profissionalLiabilityData.maintainedEXP[0], data.profissionalLiabilityData.professionalExp[0]);
        }) 
    })
    it('TC008 Verify that the user is able to submit the professional liability policy form successfully by selecting the amount of professional liability claims $250', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[0], data.profissionalLiabilityData.plDeductible[3], data.profissionalLiabilityData.plCoveragePeriod[1], data.profissionalLiabilityData.plEndDate[2], data.profissionalLiabilityData.requirmentEXP[0], data.profissionalLiabilityData.maintainedEXP[1], data.profissionalLiabilityData.professionalExp[0]);
        }) 
    })
    it('TC009 Verify that the user is able to submit the professional liability policy form successfully by selecting the amount of professional liability claims $500.000 experience', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[3], data.profissionalLiabilityData.plDeductible[3], data.profissionalLiabilityData.plCoveragePeriod[5], data.profissionalLiabilityData.plEndDate[5], data.profissionalLiabilityData.requirmentEXP[0], data.profissionalLiabilityData.maintainedEXP[0], data.profissionalLiabilityData.professionalExp[0]);
        }) 
    })
    it('TC010 Verify that the user is able to submit the professional liability policy form successfully by selecting the amount of deductible $20,000', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[1], data.profissionalLiabilityData.plDeductible[7], data.profissionalLiabilityData.plCoveragePeriod[6], data.profissionalLiabilityData.plEndDate[6], data.profissionalLiabilityData.requirmentEXP[1], data.profissionalLiabilityData.maintainedEXP[1], data.profissionalLiabilityData.professionalExp[0]);
        }) 
    })
    it('TC011 Verify that the user is able to submit the professional liability policy form successfully by selecting the amount of professional liability claims $1,000.000', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[4], data.profissionalLiabilityData.plDeductible[4], data.profissionalLiabilityData.plCoveragePeriod[4], data.profissionalLiabilityData.plEndDate[4], data.profissionalLiabilityData.requirmentEXP[1], data.profissionalLiabilityData.maintainedEXP[0], data.profissionalLiabilityData.professionalExp[0]);
        }) 
    })
    it('TC012 Verify that the user is able to submit the professional liability policy form successfully by selecting the 5 years of Coverage long in the past', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[4], data.profissionalLiabilityData.plDeductible[5], data.profissionalLiabilityData.plCoveragePeriod[5], data.profissionalLiabilityData.plEndDate[5], data.profissionalLiabilityData.requirmentEXP[1], data.profissionalLiabilityData.maintainedEXP[1], data.profissionalLiabilityData.professionalExp[0]);
        }) 
    })
    it('TC013 Verify that the user is able to submit the professional liability policy form successfully by selecting the amount of deductible $7,500', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[4], data.profissionalLiabilityData.plDeductible[6], data.profissionalLiabilityData.plCoveragePeriod[6], data.profissionalLiabilityData.plEndDate[6], data.profissionalLiabilityData.requirmentEXP[0], data.profissionalLiabilityData.maintainedEXP[0], data.profissionalLiabilityData.professionalExp[0]);
        }) 
    })
    it('TC014 Verify that the user is able to submit the professional liability policy form successfully by selecting the 2 years of Coverage long in the past', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[4], data.profissionalLiabilityData.plDeductible[7], data.profissionalLiabilityData.plCoveragePeriod[2], data.profissionalLiabilityData.plEndDate[2], data.profissionalLiabilityData.requirmentEXP[0], data.profissionalLiabilityData.maintainedEXP[1], data.profissionalLiabilityData.professionalExp[0]);
        }) 
    })
    it('TC015 Verify that the user is able to submit the professional liability policy form successfully by selecting the "None" of Coverage long in the past', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[4], data.profissionalLiabilityData.plDeductible[1], data.profissionalLiabilityData.plCoveragePeriod[0], data.profissionalLiabilityData.plEndDate[4], data.profissionalLiabilityData.requirmentEXP[1], data.profissionalLiabilityData.maintainedEXP[0], data.profissionalLiabilityData.professionalExp[0]);
        }) 
    })
    it('TC016 Verify that the user is able to submit the professional liability policy form successfully by selecting the 1 years of Long of claims', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[0], data.profissionalLiabilityData.plDeductible[0], data.profissionalLiabilityData.plCoveragePeriod[0], data.profissionalLiabilityData.plEndDate[1], data.profissionalLiabilityData.requirmentEXP[0], data.profissionalLiabilityData.maintainedEXP[1], data.profissionalLiabilityData.professionalExp[0]);
        }) 
    })
    it('TC017 Verify that the user is able to submit the professional liability policy form successfully by selecting the "1 year" of Coverage long in the past', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[0], data.profissionalLiabilityData.plDeductible[4], data.profissionalLiabilityData.plCoveragePeriod[1], data.profissionalLiabilityData.plEndDate[3], data.profissionalLiabilityData.requirmentEXP[0], data.profissionalLiabilityData.maintainedEXP[1], data.profissionalLiabilityData.professionalExp[0]);
        }) 
    })
    it('TC018 Verify that the user is able to submit the professional liability policy form successfully by selecting the "90 days" of Long of claims', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[0], data.profissionalLiabilityData.plDeductible[5], data.profissionalLiabilityData.plCoveragePeriod[3], data.profissionalLiabilityData.plEndDate[0], data.profissionalLiabilityData.requirmentEXP[0], data.profissionalLiabilityData.maintainedEXP[0], data.profissionalLiabilityData.professionalExp[0]);
        }) 
    })
    it('TC019 Verify that the user is able to submit the professional liability policy form successfully by selecting the "6 years" of Coverage long in the past', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[0], data.profissionalLiabilityData.plDeductible[8], data.profissionalLiabilityData.plCoveragePeriod[6], data.profissionalLiabilityData.plEndDate[5], data.profissionalLiabilityData.requirmentEXP[1], data.profissionalLiabilityData.maintainedEXP[1], data.profissionalLiabilityData.professionalExp[0]);
        }) 
    })
    it('TC020 Verify that the user is able to submit the professional liability policy form successfully by selecting the amount of professional liability claims $50.000', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[1], data.profissionalLiabilityData.plDeductible[8], data.profissionalLiabilityData.plCoveragePeriod[3], data.profissionalLiabilityData.plEndDate[3], data.profissionalLiabilityData.requirmentEXP[1], data.profissionalLiabilityData.maintainedEXP[0], data.profissionalLiabilityData.professionalExp[0]);
        }) 
    })
    it('TC021 Verify that the user is able to submit the professional liability policy form successfully by selecting the "2 years" of Long of claims', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[1], data.profissionalLiabilityData.plDeductible[1], data.profissionalLiabilityData.plCoveragePeriod[1], data.profissionalLiabilityData.plEndDate[2], data.profissionalLiabilityData.requirmentEXP[0], data.profissionalLiabilityData.maintainedEXP[1], data.profissionalLiabilityData.professionalExp[0]);
        }) 
    })
    it('TC022 Verify that the user is able to submit the professional liability policy form successfully by selecting the "5 years" of Long of claims', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[1], data.profissionalLiabilityData.plDeductible[2], data.profissionalLiabilityData.plCoveragePeriod[5], data.profissionalLiabilityData.plEndDate[5], data.profissionalLiabilityData.requirmentEXP[0], data.profissionalLiabilityData.maintainedEXP[0], data.profissionalLiabilityData.professionalExp[0]);
        }) 
    })
    it('TC023 Verify that the user is able to submit the professional liability policy form successfully by selecting the "6 years" of Long of claims', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[1], data.profissionalLiabilityData.plDeductible[7], data.profissionalLiabilityData.plCoveragePeriod[6], data.profissionalLiabilityData.plEndDate[6], data.profissionalLiabilityData.requirmentEXP[1], data.profissionalLiabilityData.maintainedEXP[1], data.profissionalLiabilityData.professionalExp[0]);
        }) 
    })
    it('TC024 Verify that the user is able to submit  the professional liability form after adding invalid number (Negative) in the "years of professional experience" textbox', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[0], data.profissionalLiabilityData.plDeductible[0], data.profissionalLiabilityData.plCoveragePeriod[0], data.profissionalLiabilityData.plEndDate[0], data.profissionalLiabilityData.requirmentEXP[0], data.profissionalLiabilityData.maintainedEXP[0], data.profissionalLiabilityData.professionalExp[1]);
        }) 
    })
    it.only('TC025 Verify that the user can not submit the professional liability form without selecting any option from coverage period section ', () => {
        cy.fixture('QuoteFlowData').then(data => {
            ProfessionalLiability.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[0], data.profissionalLiabilityData.plDeductible[0], data.profissionalLiabilityData.plCoveragePeriod[0], data.profissionalLiabilityData.plEndDate[0], data.profissionalLiabilityData.requirmentEXP[0], data.profissionalLiabilityData.maintainedEXP[0], data.profissionalLiabilityData.professionalExp[0]);
        }) 
    })
})