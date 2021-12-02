import GlobalTestObjectsPage from "../Pages/GlobalTestObjectsPage";
import IndustryPage from "../Pages/IndustryPage";
import BusinessInformationPage from "../Pages/BusinessInformationPage";
import LocationsPage from "../Pages/LocationsPage";
import PoliciesPage from "../pages/PoliciesPage";
import FinanceBasicPage from "../Pages/FinanceBasicPage";
import GeneralLiability from "../Pages/GeneralLiabilityPage";
import AdditionalInsureds from "../Pages/AdditionalInsuredsPage";
import ContactInformation from "../Pages/ContactInformationPage";


describe('Additional innsured  Test Suite', () => {
    const global = new GlobalTestObjectsPage();
    const industry = new IndustryPage();
    const infopage = new BusinessInformationPage();
    const location = new LocationsPage();
    const policy = new PoliciesPage();
    const finance = new FinanceBasicPage();
    const general = new GeneralLiability();
    const AddIn = new AdditionalInsureds();
    const contact = new ContactInformation();

    beforeEach(() => {
        cy.clearLocalStorage();

        global.navigateToQuoteFlowApp();

        cy.fixture('MyData').then(data => {
            industry.performIndustryFlow(data.businessType);
        })

        //Click Next Button
        global.clickNextButton();

        //Apply business information
        infopage.performBusinessInformationFlow("Business Test", "0 - 3", "10 or fewer", "5", "KY", "41008", "yes", "10000", "Total Loss");

        //Click Next Button
        global.clickNextButton();

        //Apply Policy Flow
        policy.selectPolicy('BOP');

        //Click Next Button
        global.clickNextButton();

        //Apply Finance basics Flow

        cy.fixture('MyData').then(data => {
            finance.performFinanceBasicsFlow(data.AnnuallySalesAmount, data.AnnuallyPayrollAmount);

        })
        global.clickNextButton();



        cy.fixture('MyData').then(data => {
            location.performLocationsFlow(data.StreetAddress, data.City, data.State, data.ZipCode, data.BusinessPropertyAndEquipment, data.deductable.Deductable1000);
            cy.get('[data-cy="submit"]').click();
            
        })
        cy.fixture('MyData').then(data => {
            general.GeneralLiabilityFlow(data.GeneralLiabilityClaim.claim300000, data.GeneralDeductible.ductible2500)
            

        })

        global.clickNextButton();

    })


    it('Verify the functionality of Adding other people to the policy by using the existing Mailing Address ', () => {
        cy.fixture('MyData').then(data => {
            AddIn.PerformAdditionalInsuredsFlow(data.FirstName, data.LastName, data.Email);
            
              // 37-Click on the "Next" button .
        global.clickNextButton();

        })

    })

    it('Verify  the functionality of adding other people to the policy using the full address information manually', () => {
        cy.fixture('MyData').then(data => {
            AddIn.PerformAdditionalInsuredsFlowManually(data.FirstName, data.LastName, data.Email, data.ZipCode);
            
              // 37-Click on the "Next" button .
        global.clickNextButton();

        })

    })

    it('Verify that the user can choose an exist address button', () => {
        cy.fixture('MyData').then(data => {
            AddIn. PerformAdditionalInsuredsFlowSelectExistAddress(data.FirstName, data.LastName, data.Email);
            
              // 37-Click on the "Next" button .
        global.clickNextButton();

        })

   })

    it('Verify the functionality of  the "Delete" button under the contact information box.', () => {
        cy.fixture('MyData').then(data => {
            AddIn.PerformAdditionalInsuredsFlowDeleteBUtton(data.FirstName, data.LastName, data.Email)
        })

    })

  





   


    })
    

    




