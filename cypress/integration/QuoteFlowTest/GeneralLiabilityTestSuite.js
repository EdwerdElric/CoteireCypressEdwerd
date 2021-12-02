/// <reference types="Cypress" />

import GlobalTestObjectsPage from "../../Pages/QuoteFlow/GlobalTestObjectsPage";
import BusinessInformationPage from "../../Pages/QuoteFlow/BusinessInformationPage";
import IndustryPage from "../../Pages/QuoteFlow/IndstryPage";
import PoliciesPage from "../../Pages/QuoteFlow/PoliciesPage";
import FinanceBasicPage from "../../Pages/QuoteFlow/FinanceBasicPage";
import LocationsPage from "../../Pages/QuoteFlow/LocationsPage";
import GeneralLiabilityPage from "../../Pages/QuoteFlow/GeneralLiabilityPage";




describe('General Liability Test Suite', () => {

    const industry = new IndustryPage()
    const businessInfo = new BusinessInformationPage()
    const globalObjects = new GlobalTestObjectsPage()
    const policy = new PoliciesPage()
    const finance = new FinanceBasicPage();
    const location = new LocationsPage();
    const generalLiability = new GeneralLiabilityPage();

    beforeEach(() => {


        globalObjects.navigateTo('Quote Flow');

        cy.fixture('QuoteFlowData').then(data => {
            industry.performIndustryFlow(data.industryData.businessType);
        })

        globalObjects.clickNextButton()

        businessInfo.performBusinessInformationFlow("Business Test", "0 - 3", "11-20", "15", "KY", "41008", "no", "", "");

        globalObjects.clickNextButton();

        cy.fixture('QuoteFlowData').then(data => {
            policy.selectPolicy("BOP");
        })
        
        globalObjects.clickNextButton();

        cy.fixture('QuoteFlowData').then(data => {
            finance.performFinanceBasicsFlow(data.financeBasics.annuallySalesAmount, data.financeBasics.annuallyPayrollAmount);
        })

        globalObjects.clickNextButton();

        cy.fixture('QuoteFlowData').then(data => {
            location.performLocationsFlow(data.locations[0].street, data.locations[0].city, data.locations[0].state, data.locations[0].zipCode, data.locations[0].buildingType.type2, data.locations[0].suppression[0], data.locations[0].deductible.by2500, data.locations[0].propertyAndEquipment, data.locations[0].buildingCoverege);

        })

        globalObjects.clickNextButton();

    })
    afterEach(() => {
        globalObjects.clickNextButton();
        globalObjects.verifyPageURL("/getquote/additional-insureds");

    })
    

    it('TC001 Verify that the user is able to complete submitting a general liability Policy after choosing the lowest value of business coverage and the deductible amount', () => {
        cy.fixture('QuoteFlowData').then(data => {
            generalLiability.performGeneralLiabilityFlow(data.generalLiabilityData.coverage[0], data.generalLiabilityData.deductible2[0]);
        })
    })
    it('TC002 Verify that the user is able to complete submitting a general liability Policy after choosing the following values of business coverage ($500.000) and the deductible amount of ($500)', () => {
        cy.fixture('QuoteFlowData').then(data => {
            generalLiability.performGeneralLiabilityFlow(data.generalLiabilityData.coverage[1], data.generalLiabilityData.deductible2[1]);
        })
    })
    it('TC003 Verify that the user is able to complete submitting a general liability Policy after choosing the highest amount of business coverage ($1,000.000) and the deductible amount of ($2,500)', () => {
        cy.fixture('QuoteFlowData').then(data => {
            generalLiability.performGeneralLiabilityFlow(data.generalLiabilityData.coverage[2], data.generalLiabilityData.deductible2[3]);
        })
    })
    it('TC004 Verify that the user is able to complete submitting a general liability Policy after choosing the following values of business coverage ($300,000) and the deductible amount of ($2,500)', () => {
        cy.fixture('QuoteFlowData').then(data => {
            generalLiability.performGeneralLiabilityFlow(data.generalLiabilityData.coverage[0], data.generalLiabilityData.deductible2[3]);
        })
    })
    it('TC005 Verify that the user is able to complete submitting a general liability Policy after choosing the following values of business coverage ($300,000) and the deductible amount of ($1,000)', () => {
        cy.fixture('QuoteFlowData').then(data => {
            generalLiability.performGeneralLiabilityFlow(data.generalLiabilityData.coverage[0], data.generalLiabilityData.deductible2[2]);
        })
    })
    it('TC006 Verify that the user is able to complete submitting a general liability Policy after choosing the following values of business coverage ($300,000) and the deductible amount of ($500)', () => {
        cy.fixture('QuoteFlowData').then(data => {
            generalLiability.performGeneralLiabilityFlow(data.generalLiabilityData.coverage[0], data.generalLiabilityData.deductible2[1]);
        })
    })
    it('TC007 Verify that the user is able to complete submitting a general liability Policy after choosing the following values of business coverage ($500,000) and the deductible amount of ($250)', () => {
        cy.fixture('QuoteFlowData').then(data => {
            generalLiability.performGeneralLiabilityFlow(data.generalLiabilityData.coverage[1], data.generalLiabilityData.deductible2[0]);
        })
    })
    it('TC008 Verify that the user is able to complete submitting a general liability Policy after choosing the following values of business coverage ($500,000) and the deductible amount of ($1,000)', () => {
        cy.fixture('QuoteFlowData').then(data => {
            generalLiability.performGeneralLiabilityFlow(data.generalLiabilityData.coverage[1], data.generalLiabilityData.deductible2[2]);
        })
    })
    it('TC009 Verify that the user is able to complete submitting a general liability Policy after choosing the following values of business coverage ($500,000) and the deductible amount of ($2,500)', () => {
        cy.fixture('QuoteFlowData').then(data => {
            generalLiability.performGeneralLiabilityFlow(data.generalLiabilityData.coverage[1], data.generalLiabilityData.deductible2[3]);
        })
    })
    it('TC010 Verify that the user is able to complete submitting a general liability Policy after choosing the following values of business coverage ($1,000.000) and the deductible amount of ($500)', () => {
        cy.fixture('QuoteFlowData').then(data => {
            generalLiability.performGeneralLiabilityFlow(data.generalLiabilityData.coverage[2], data.generalLiabilityData.deductible2[1]);
        })
    })
    it('TC011 Verify that the user is able to complete submitting a general liability Policy after choosing the following values of business coverage ($1,000.000) and the deductible amount of ($250)', () => {
        cy.fixture('QuoteFlowData').then(data => {
            generalLiability.performGeneralLiabilityFlow(data.generalLiabilityData.coverage[2], data.generalLiabilityData.deductible2[0]);
        })
    })
    it('TC012 Verify that the user is able to complete submitting a general liability Policy after choosing the following values of business coverage ($1,000.000) and the deductible amount of ($1,000)', () => {
        cy.fixture('QuoteFlowData').then(data => {
            generalLiability.performGeneralLiabilityFlow(data.generalLiabilityData.coverage[2], data.generalLiabilityData.deductible2[2]);
        })
    })

    
















    // it('TC002 verify that the hint tool shows the help box', () => {
    //     generalLiability.SelectCheckbox();
    // })

    // afterEach(() => {
    //     globalObjects.checkNextButtonIsEnabled();
    //     globalObjects.clickNextButton();
    //     globalObjects.verifyPageURL('/gl');
    // })

})
