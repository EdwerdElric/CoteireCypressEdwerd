/// <reference types="Cypress" />

import GlobalTestObjectsPage from "../../Pages/QuoteFlow/GlobalTestObjectsPage";
import BusinessInformationPage from "../../Pages/QuoteFlow/BusinessInformationPage";
import IndustryPage from "../../Pages/QuoteFlow/IndstryPage";
import PoliciesPage from "../../Pages/QuoteFlow/PoliciesPage";
import FinanceBasicPage from "../../Pages/QuoteFlow/FinanceBasicPage";
import LocationsPage from "../../Pages/QuoteFlow/LocationsPage";


describe.only('Location Test Suite', () => {

    const industry = new IndustryPage()
    const businessInfo = new BusinessInformationPage()
    const globalObjects = new GlobalTestObjectsPage()
    const policy = new PoliciesPage()
    const finance = new FinanceBasicPage();
    const location = new LocationsPage();



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

        cy.fixture('QuoteFlowData').then(data => {
            finance.performFinanceBasicsFlow(data.financeBasics.annuallySalesAmount, data.financeBasics.annuallyPayrollAmount);
        })

        globalObjects.clickNextButton();
    })

    it('TC001 Verify the functionality of deduction amount process after selecting deductible amount of "$2,500"', () => {
        cy.fixture('QuoteFlowData').then((data) => {
            location.performLocationsFlow(data.locations[0].street, data.locations[0].city, data.locations[0].state, data.locations[0].zipCode, data.locations[0].buildingType.type2, data.locations[0].suppression[1], data.locations[0].deductible.by2500, data.locations[0].propertyAndEquipment);
        })
    })

    it('TC002 Verify the functionality of deduction amount process after selecting deductible amount of "$7500" and selecting the suppression system option (No)', () => {
        cy.fixture('QuoteFlowData').then((data) => {
            location.performLocationsFlow(data.locations[0].street, data.locations[0].city, data.locations[0].state, data.locations[0].zipCode, data.locations[0].buildingType.type3, data.locations[0].suppression[1], data.locations[0].deductible.by7500, data.locations[0].propertyAndEquipment, data.locations[0].buildingCoverege);
        })
    })

    it('TC003 Verify the functionality of deduction amount process after selecting deductible amount of "$5000" and the suppression system option is (Yes)', () => {
        cy.fixture('QuoteFlowData').then((data) => {
            location.performLocationsFlow(data.locations[0].street, data.locations[0].city, data.locations[0].state, data.locations[0].zipCode, data.locations[0].buildingType.type4, data.locations[0].suppression[0], data.locations[0].deductible.by5000, data.locations[0].propertyAndEquipment, data.locations[0].buildingCoverege);
        })
    })

    it('TC004 Verify the functionality of deduction amount process after selecting deductible amount of "$7500" and selecting the suppression system option (Yes)', () => {
        cy.fixture('QuoteFlowData').then((data) => {
            location.performLocationsFlow(data.locations[0].street, data.locations[0].city, data.locations[0].state, data.locations[0].zipCode, data.locations[0].buildingType.type7, data.locations[0].suppression[0], data.locations[0].deductible.by7500, data.locations[0].propertyAndEquipment, data.locations[0].buildingCoverege);
        })
    })

    it('TC005 Verify the functionality of deduction amount process after selecting deductible amount of "$2500" and selecting the suppression system option (Yes)', () => {
        cy.fixture('QuoteFlowData').then((data) => {
            location.performLocationsFlow(data.locations[0].street, data.locations[0].city, data.locations[0].state, data.locations[0].zipCode, data.locations[0].buildingType.type8, data.locations[0].suppression[0], data.locations[0].deductible.by72500, data.locations[0].propertyAndEquipment, data.locations[0].buildingCoverege);
        })
    })

    it('TC006 Verify the functionality of deduction amount process after selecting deductible amount of "$10000" and selecting the suppression system option (Yes)', () => {
        cy.fixture('QuoteFlowData').then((data) => {
            location.performLocationsFlow(data.locations[0].street, data.locations[0].city, data.locations[0].state, data.locations[0].zipCode, data.locations[0].buildingType.type8, data.locations[0].suppression[0], data.locations[0].deductible.by10000, data.locations[0].propertyAndEquipment, data.locations[0].buildingCoverege);
        })
    })

    // afterEach(() => {
    //     globalObjects.checkNextButtonIsEnabled();
    //     globalObjects.clickNextButton();
    //     globalObjects.verifyPageURL('/gl');
    // })


})


// describe('Delete Test Suite', () => {

//     const industry = new IndustryPage()
//     const businessInfo = new BusinessInformationPage()
//     const globalObjects = new GlobalTestObjectsPage()
//     const policy = new PoliciesPage()
//     const finance = new FinanceBasicPage();
//     const location = new LocationsPage();



//     beforeEach(() => {

//          globalObjects.navigateTo('Quote Flow');

//         cy.fixture('QuoteFlowData').then(data => {
//             industry.performIndustryFlow(data.industryData.businessType);
//         })

//         globalObjects.clickNextButton()

//         businessInfo.performBusinessInformationFlow("Business Test", "0 - 3", "11-20", "15", "KY", "41008", "yes", "$10,000", "Total Loss");

//         globalObjects.clickNextButton();

//         policy.selectPolicy("BOP");

//         globalObjects.clickNextButton();

//         cy.fixture('MyData').then(data => {
//             finance.performFinanceBasicsFlow(data.AnnuallySalesAmount, data.AnnuallyPayrollAmount);
//         })

//         globalObjects.clickNextButton();
//     })

//     it('Verify that the user is able to delete the address information when adding the location manually.', () => {
//         cy.fixture('QuoteFlowData').then((data) => {
//             location.performDeleteFlow(data.StreetAddress, data.City, data.State, data.ZipCode);
//             globalObjects.checkNextButtonIsDisabled();
//         })
//     })

// })