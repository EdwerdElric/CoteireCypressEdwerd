/// <reference types="Cypress" />

import GlobalTestObjectsPage from "../../Pages/QuoteFlow/GlobalTestObjectsPage";
import IndustryPage from "../../Pages/QuoteFlow/IndstryPage";
import BusinessInformationPage from "../../Pages/QuoteFlow/BusinessInformationPage";
import PoliciesPage from "../../Pages/QuoteFlow/PoliciesPage";

describe('Business Information Test Suite', () => {

    const industryPage = new IndustryPage()
    const globalObjects = new GlobalTestObjectsPage();
    const infoPage = new BusinessInformationPage()
    const policy = new PoliciesPage();

    beforeEach(() => {

        //Navigate to Quote Flow application
        globalObjects.navigateTo('Quote Flow');

        //perform industry flow
        cy.fixture('QuoteFlowData').then(data => {
            industryPage.performIndustryFlow(data.industryData.businessType)
        })

        //click on next button
        globalObjects.clickNextButton()

    })

    it("TC001 Verify that the user is able to complete submitting the 'Business Information' form by selecting '0-3 years' as number of years and '10 or fewer' as number of employees", () => {

        cy.fixture('QuoteFlowData').then(data => {
            infoPage.performBusinessInformationFlow(data.businessInfoData.businessName, "0 - 3", "10 or fewer", "5", data.businessInfoData.state, data.businessInfoData.zipCode, "yes", data.businessInfoData.claimAmount, "Total Loss");
        })
    })

    it("TC002 Verify that the user is able to complete submitting the 'Business Information' form by selecting '0-3 years' as number of years and '10 or fewer' as number of employees without adding claims history", () => {

        cy.fixture('QuoteFlowData').then(data => {
            infoPage.performBusinessInformationFlow(data.businessInfoData.businessName, "0 - 3", "10 or fewer", "5", data.businessInfoData.state, data.businessInfoData.zipCode, "no", "", "");
        })

    })

    it("TC003 Verify that the user is able to complete submitting the 'Business Information' form by selecting '0-3 years' as number of years and  '11-20' as number of employees", () => {

        cy.fixture('QuoteFlowData').then(data => {
            infoPage.performBusinessInformationFlow(data.businessInfoData.businessName, "0 - 3", "11-20", "15", data.businessInfoData.state, data.businessInfoData.zipCode, "yes", data.businessInfoData.claimAmount, "Total Loss");
        })

    })

    it("TC004 Verify that the user is able to complete submitting the 'Business Information' form by selecting '0-3 years' as number of years and  '11-20' as number of employees without adding claims history information", () => {

        cy.fixture('QuoteFlowData').then(data => {
            infoPage.performBusinessInformationFlow(data.businessInfoData.businessName, "0 - 3", "11-20", "15", data.businessInfoData.state, data.businessInfoData.zipCode, "no", "", "");
        })
    })

    it("TC005 Verify that the user is able to complete submitting the 'Business Information' form by selecting '0-3 years' as number of years and  'More than 20' as number of employees.", () => {

        cy.fixture('QuoteFlowData').then(data => {
            infoPage.performBusinessInformationFlow(data.businessInfoData.businessName, "0 - 3", "More than 20", "25", data.businessInfoData.state, data.businessInfoData.zipCode, "yes", data.businessInfoData.claimAmount, "Total Loss");
        })
    })

    it("TC006 Verify that the user is able to complete submitting the 'Business Information' form by selecting '0-3 years' as number of years and  'More than 20' as number of employees without adding claims history information", () => {

        cy.fixture('QuoteFlowData').then(data => {
            infoPage.performBusinessInformationFlow(data.businessInfoData.businessName, "0 - 3", "More than 20", "25", data.businessInfoData.state, data.businessInfoData.zipCode, "no", "", "");
        })
    })

    it("TC007 Verify that the user is able to complete submitting the 'Business Information' form by selecting '0-3 years' as number of years and '50' as number of employees", () => {

        cy.fixture('QuoteFlowData').then(data => {
            infoPage.performBusinessInformationFlow(data.businessInfoData.businessName, "0 - 3", "More than 20", "50", data.businessInfoData.state, data.businessInfoData.zipCode, "yes", data.businessInfoData.claimAmount, "Total Loss");
        })
    })

    it("TC008 Verify that the user is able to complete submitting the 'Business Information' form by selecting '0-3 years' as number of years and '50' as number of employees without adding claims history information", () => {

        cy.fixture('QuoteFlowData').then(data => {
            infoPage.performBusinessInformationFlow(data.businessInfoData.businessName, "0 - 3", "More than 20", "50", data.businessInfoData.state, data.businessInfoData.zipCode, "no", "", "");
        })
    })

    it("TC009 Verify that the user is able to complete submitting the 'Business Information' form by selecting '3-5 years' as number of years and '10 or fewer' as number of employees", () => {

        cy.fixture('QuoteFlowData').then(data => {
            infoPage.performBusinessInformationFlow(data.businessInfoData.businessName, "3-5", "10 or fewer", "5", data.businessInfoData.state, data.businessInfoData.zipCode, "yes", data.businessInfoData.claimAmount, "Total Loss");
        })
    })

    it("TC010Verify that the user is able to complete submitting the 'Business Information' form by selecting '3-5 years' as number of years and '10 or fewer' as number of employees without adding claims history", () => {

        cy.fixture('QuoteFlowData').then(data => {
            infoPage.performBusinessInformationFlow(data.businessInfoData.businessName, "3-5", "10 or fewer", "5", data.businessInfoData.state, data.businessInfoData.zipCode, "no", "", "");
        })
    })

    it("TC011 Verify that the user is able to complete submitting the 'Business Information' form by selecting '3-5 years' as number of years and '11-20' as number of employees", () => {

        cy.fixture('QuoteFlowData').then(data => {
            infoPage.performBusinessInformationFlow(data.businessInfoData.businessName, "3-5", "11-20", "15", data.businessInfoData.state, data.businessInfoData.zipCode, "yes", data.businessInfoData.claimAmount, "Total Loss");
        })
    })

    it("TC012 Verify that the user is able to complete submitting the 'Business Information' form by selecting '3-5 years' as number of years and '11-20' as number of employees without adding claims history information", () => {

        cy.fixture('QuoteFlowData').then(data => {
            infoPage.performBusinessInformationFlow(data.businessInfoData.businessName, "3-5", "11-20", "15", data.businessInfoData.state, data.businessInfoData.zipCode, "no", "", "");
        })
    })

    it("TC013 Verify that the user is able to complete submitting the 'Business Information' form by selecting '3-5 years' as number of years and 'More than 20' as number of employees", () => {

        cy.fixture('QuoteFlowData').then(data => {
            infoPage.performBusinessInformationFlow(data.businessInfoData.businessName, "3-5", "More than 20", "25", data.businessInfoData.state, data.businessInfoData.zipCode, "yes", data.businessInfoData.claimAmount, "Total Loss");
        })
    })

    it("TC014 Verify that the user is able to complete submitting the 'Business Information' form by selecting '3-5 years' as number of years and 'More than 20' as number of employees without adding claims history information", () => {

        cy.fixture('QuoteFlowData').then(data => {
            infoPage.performBusinessInformationFlow(data.businessInfoData.businessName, "3-5", "More than 20", "25", data.businessInfoData.state, data.businessInfoData.zipCode, "no", "", "");
        })
    })

    it("TC015 Verify that the user is able to complete submitting the 'Business Information' form by selecting '3-5 years' as number of years and '50' as number of employees", () => {

        cy.fixture('QuoteFlowData').then(data => {
            infoPage.performBusinessInformationFlow(data.businessInfoData.businessName, "3-5", "More than 20", "50", data.businessInfoData.state, data.businessInfoData.zipCode, "yes", data.businessInfoData.claimAmount, "Total Loss");
        })
    })

    it("TC016 Verify that the user is able to complete submitting the 'Business Information' form by selecting '3-5 years' as number of years and '50' as number of employees without adding claims history information", () => {

        cy.fixture('QuoteFlowData').then(data => {
            infoPage.performBusinessInformationFlow(data.businessInfoData.businessName, "3-5", "More than 20", "50", data.businessInfoData.state, data.businessInfoData.zipCode, "no", "", "");
        })
    })

    it("TC017 Verify that the user is able to complete submitting the 'Business Information' form by selecting 'over 5 years' as number of years and '10 or fewer' as number of employees", () => {

        cy.fixture('QuoteFlowData').then(data => {
            infoPage.performBusinessInformationFlow(data.businessInfoData.businessName, "over 5", "10 or fewer", "5", data.businessInfoData.state, data.businessInfoData.zipCode, "yes", data.businessInfoData.claimAmount, "Total Loss");
        })
    })

    it("TC018 Verify that the user is able to complete submitting the 'Business Information' form by selecting 'over 5 years' as number of years and '10 or fewer' as number of employees without adding claims history information", () => {

        cy.fixture('QuoteFlowData').then(data => {
            infoPage.performBusinessInformationFlow(data.businessInfoData.businessName, "over 5", "10 or fewer", "5", data.businessInfoData.state, data.businessInfoData.zipCode, "no", "", "");
        })
    })

    it("TC019 Verify that the user is able to complete submitting the 'Business Information' form by selecting 'over 5 years' as number of years and '11 - 20' as number of employees", () => {

        cy.fixture('QuoteFlowData').then(data => {
            infoPage.performBusinessInformationFlow(data.businessInfoData.businessName, "over 5", "11-20", "15", data.businessInfoData.state, data.businessInfoData.zipCode, "yes", data.businessInfoData.claimAmount, "Total Loss");
        })
    })

    it("TC020 Verify that the user is able to complete submitting the 'Business Information' form by selecting 'over 5 years' as number of years and '11 - 20' as number of employees without adding claims history information", () => {

        cy.fixture('QuoteFlowData').then(data => {
            infoPage.performBusinessInformationFlow(data.businessInfoData.businessName, "over 5", "11-20", "15", data.businessInfoData.state, data.businessInfoData.zipCode, "no", "", "");
        })
    })

    it("TC021 Verify that the user is able to complete submitting the 'Business Information' form by selecting 'over 5 years' as number of years and 'More than 20' as number of employees", () => {

        cy.fixture('QuoteFlowData').then(data => {
            infoPage.performBusinessInformationFlow(data.businessInfoData.businessName, "over 5", "More than 20", "25", data.businessInfoData.state, data.businessInfoData.zipCode, "yes", data.businessInfoData.claimAmount, "Total Loss");
        })
    })

    it("TC022 Verify that the user is able to complete submitting the 'Business Information' form by selecting 'over 5 years' as number of years and 'More than 20' as number of employees without adding claims history information", () => {

        cy.fixture('QuoteFlowData').then(data => {
            infoPage.performBusinessInformationFlow(data.businessInfoData.businessName, "over 5", "More than 20", "25", data.businessInfoData.state, data.businessInfoData.zipCode, "no", "", "");
        })
    })

    it("TC023 Verify that the user is able to complete submitting the 'Business Information' form by selecting 'over 5 years' as number of years and '50' as number of employees", () => {

        cy.fixture('QuoteFlowData').then(data => {
            infoPage.performBusinessInformationFlow(data.businessInfoData.businessName, "over 5", "More than 20", "50", data.businessInfoData.state, data.businessInfoData.zipCode, "yes", data.businessInfoData.claimAmount, "Total Loss");
        })
    })

    it("TC024 Verify that the user is able to complete submitting the 'Business Information' form by selecting 'over 5 years' as number of years and '50' as number of employees without adding claims history information", () => {

        cy.fixture('QuoteFlowData').then(data => {
            infoPage.performBusinessInformationFlow(data.businessInfoData.businessName, "over 5", "More than 20", "50", data.businessInfoData.state, data.businessInfoData.zipCode, "no", "", "");
        })
    })

    afterEach(() => {
        globalObjects.checkNextButtonIsEnabled();
        globalObjects.clickNextButton();
        policy.verifyPoliciesPageTitle();
    })


})