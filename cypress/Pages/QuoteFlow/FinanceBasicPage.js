export default class FinanceBasicsPage {

    //Check if the user is able to see the default active link of "Finance Basics" under the left Main menu . 
    CheackFinanseBasicsLeftMenu() { cy.get(':nth-child(4) > .sc-dNLxif > .sc-hqyNC').should("be.visible") }

    //Check that the user is successfully redirected to the third page (Finance Basics). 
    VerifyFinanseBasicsPageTitle() {
        cy.get('.sc-gZMcBi').should("be.visible")
    }

    //Fill the "Annually, my business earns (before taxes)" box with a Valid data ex: 500000.
    FillAnnuallySalesAmount(AnnuallySalesAmount) {
        cy.get('[data-cy=sales]').type(AnnuallySalesAmount)
    }

    //Check the "Annually, my business earns (before taxes)" box is now successfully updated with the correct data (500000)
    AnnuallySalesBoxUpdated(AnnuallySalesAmoun) {
        cy.get('input[value="'.concat(AnnuallySalesAmoun).concat('"]')).should('be.visible');

    }

    //Check if the  "Annually, I pay myself and my employees a total of"  text box is enabled after fill "Annually, my business earns (before taxes)".
    AnnuallyPayrollBoxEnabeled() {
        cy.get('[data-cy=payroll]').should('be.enabled')
    }

    //Fill the "Annually, I pay myself and my employees a total of" box with a Valid data ex: 400000.
    FillAnnuallyPayrollAmount(AnnuallyPayrollAmount) {
        cy.get('[data-cy=payroll]').type(AnnuallyPayrollAmount)
    }

    //Check the "Annually, I pay myself and my employees a total of" box is now successfully updated with the correct data (400000)
    AnnuallyPayrollBoxUpdated(AnnuallyPayrollAmount) {
        cy.get('input[value="' + AnnuallyPayrollAmount + '"]').should('be.visible');
    }


    performFinanceBasicsFlow(AnnuallySalesAmount, AnnuallyPayrollAmount) {
        this.CheackFinanseBasicsLeftMenu();
        this.VerifyFinanseBasicsPageTitle();
        this.FillAnnuallySalesAmount(AnnuallySalesAmount);
        this.AnnuallySalesBoxUpdated(AnnuallySalesAmount);
        this.AnnuallyPayrollBoxEnabeled();
        this.FillAnnuallyPayrollAmount(AnnuallyPayrollAmount);
        this.AnnuallyPayrollBoxUpdated(AnnuallyPayrollAmount);
    }
}