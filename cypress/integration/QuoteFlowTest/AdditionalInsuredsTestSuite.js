import GlobalTestObjectsPage from "../../Pages/QuoteFlow/GlobalTestObjectsPage";
import BusinessInformationPage from "../../Pages/QuoteFlow/BusinessInformationPage";
import IndustryPage from "../../Pages/QuoteFlow/IndstryPage";
import PoliciesPage from "../../Pages/QuoteFlow/PoliciesPage";
import FinanceBasicPage from "../../Pages/QuoteFlow/FinanceBasicPage";
import LocationsPage from "../../Pages/QuoteFlow/LocationsPage";
import GeneralLiabilityPage from "../../Pages/QuoteFlow/GeneralLiabilityPage";
import ProfessionalLiabilityPage from "../../Pages/QuoteFlow/ProfessionalLiabilityPage";
import AdditionalInsuredsPage from "../../Pages/QuoteFlow/AdditionalInsuredsPage";


describe('Additional innsured  Test Suite', () => {
    const globalObjects = new GlobalTestObjectsPage();
    const industry = new IndustryPage();
    const businessInfo = new BusinessInformationPage();
    const location = new LocationsPage();
    const policy = new PoliciesPage();
    const finance = new FinanceBasicPage();
    const general = new GeneralLiabilityPage();
    const AddIn = new AdditionalInsuredsPage();
    const pl = new ProfessionalLiabilityPage();

    beforeEach(() => {
        

        globalObjects.navigateTo('Quote Flow');

        cy.fixture('QuoteFlowData').then(data => {
            industry.performIndustryFlow(data.industryData.businessType);
        })

        //Click Next Button
        globalObjects.clickNextButton();

        //Apply business information
        businessInfo.performBusinessInformationFlow("Business Test", "0 - 3", "11-20", "15", "KY", "41008", "no", "", "");

        //Click Next Button
        globalObjects.clickNextButton();

        //Apply Policy Flow
        cy.fixture('QuoteFlowData').then(data => {
            policy.selectPolicy("PL");
        })

        //Click Next Button
        globalObjects.clickNextButton();

        //Apply Finance basics Flow

        cy.fixture('QuoteFlowData').then(data => {
            finance.performFinanceBasicsFlow(data.financeBasics.annuallySalesAmount, data.financeBasics.annuallyPayrollAmount);

        })
        globalObjects.clickNextButton();



        cy.fixture('MyData').then(data => {
            location.performLocationsFlow(data.StreetAddress, data.City, data.State, data.ZipCode, data.BusinessPropertyAndEquipment, data.deductable.Deductable1000);
            cy.get('[data-cy="submit"]').click();
            
        })
        // cy.fixture('QuoteFlowData').then(data => {
        //     pl.performProfessionalLiabilityFlow(data.profissionalLiabilityData.claims[0], data.profissionalLiabilityData.plDeductible[0], data.profissionalLiabilityData.plCoveragePeriod[0], data.profissionalLiabilityData.plEndDate[0], data.profissionalLiabilityData.maintainedEXP[0], data.profissionalLiabilityData.requirmentEXP[0], data.profissionalLiabilityData.professionalExp[0]);
            

        // })

        globalObjects.clickNextButton();

    })

    it.only('Click on No Button', () => {
        AddIn.clickOnNoButton();
    })


//     it('Verify the functionality of Adding other people to the policy by using the existing Mailing Address ', () => {
//         cy.fixture('MyData').then(data => {
//             AddIn.PerformAdditionalInsuredsFlow(data.FirstName, data.LastName, data.Email);
            
//               // 37-Click on the "Next" button .
//         globalObjects.clickNextButton();

//         })

//     })

//     it.only('Verify  the functionality of adding other people to the policy using the full address information manually', () => {
//         cy.fixture('QuoteFlowData').then(data => {
//             AddIn.PerformAdditionalInsuredsFlowManually(data.FirstName, data.LastName, data.Email, data.ZipCode);
            
//               // 37-Click on the "Next" button .
//         globalObjects.clickNextButton();

//         })

//     })

//     it('Verify that the user can choose an exist address button', () => {
//         cy.fixture('MyData').then(data => {
//             AddIn. PerformAdditionalInsuredsFlowSelectExistAddress(data.FirstName, data.LastName, data.Email);
            
//               // 37-Click on the "Next" button .
//         global.clickNextButton();

//         })

//    })

   

    // it('Verify the functionality of  the "Delete" button under the contact information box.', () => {
    //     cy.fixture('MyData').then(data => {
    //         AddIn.PerformAdditionalInsuredsFlowDeleteBUtton(data.FirstName, data.LastName, data.Email)
    //     })

    // })

  





   


    })
    

    




