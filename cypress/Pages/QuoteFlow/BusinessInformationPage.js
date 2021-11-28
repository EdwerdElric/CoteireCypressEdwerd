/// <reference types="Cypress" />


export default class BusinessInformationPage {


    enterBusinessName(businessName) {
        cy.get('[data-cy="business-name"]').type(businessName);
        cy.get('[data-cy="business-name"]').should('have.value', businessName);
    }

    selectBusinessYears(years) {
        cy.get('button[aria-label="Business is '.concat(years, " years old").concat('"]')).click();
        cy.get('button[aria-label="Business is '.concat(years, " years old").concat('"][aria-pressed="true"]')).should('be.visible');
    }
  

    selectNumberOfEmpRange(empRange) {
        switch (empRange) {
            case "10 or fewer":
                cy.get('[data-cy="multi-button-10-or-fewer"]').click();
                cy.get('a[class="sc-fhYwyz ebSoGt"]').should("be.visible");
                cy.get('div[class="sc-dymIpo iFhGBf"]').should("be.visible");
                break;
            case "11-20":
                cy.get('[data-cy="multi-button-11-20"]').click();
                cy.get('a[class="sc-fhYwyz ebSoGt"]').should("be.visible");
                cy.get('div[class="sc-dymIpo iFhGBf"]').should("be.visible");
                break;
            case "More than 20":
                cy.get('[data-cy="multi-button-More-than-20').click()
                cy.get('a[class="sc-fhYwyz ebSoGt"]').should("be.visible");
                cy.get('div[class="sc-dymIpo iFhGBf"]').should("be.visible");
                break;
        }
    }

    selectNumberOfEmp(numOfEmp) {
        let empTotalNo = "multi-button-";
        if (numOfEmp > 30) {
            cy.get('[data-cy="multi-button-custom"]').click();
            cy.get('[data-cy="multi-button-direct-input"]').should("be.enabled")
            cy.get('[data-cy="multi-button-direct-input"]').clear();
            cy.get('[data-cy="multi-button-direct-input"]').type(numOfEmp);
            cy.get('label[display="inline"][class="sc-eHgmQL dryvx"]').eq(0).click();
            cy.get('[data-cy="multi-button-direct-input"]').should('have.value', numOfEmp);
        } else {
            cy.get('[data-cy='.concat(empTotalNo, (numOfEmp).toString()).concat("]")).click();
            cy.get('button[class="sc-bnXvFD sc-gFaPwZ cwWcvl"]').should('be.visible');
        }
    }

    selectBusinessState(state) {
        cy.get('input[id="react-select-2-input"]').should('be.enabled');
        cy.get('input[id="react-select-2-input"]').type(state).type('{enter}');
        cy.get('[class=" css-1uccc91-singleValue"]').then(($state) => {
            const txt = $state.text();
            expect(txt).to.equal(state);
        })
    }

    enterZipCode(zipCode) {
        cy.get('[data-cy="zip-input"]').should('be.enabled');
        cy.get('[data-cy="zip-input"]').type(zipCode);
        cy.get('[data-cy="zip-input"]').should('have.value', zipCode);
    }

    selectClaimsHistory(hasClaims) {
        cy.get('[data-cy='.concat(hasClaims, "-previous-loss").concat("]")).click();
        if (hasClaims === "yes") {
            cy.get('button[data-cy="yes-previous-loss"][aria-pressed="true"]').should('be.visible');
            cy.get('button[data-cy="no-previous-loss"][aria-pressed="false"]').should('be.visible');
        } else {
            cy.get('button[data-cy="no-previous-loss"][aria-pressed="true"]').should('be.visible');
            cy.get('button[data-cy="yes-previous-loss"][aria-pressed="false"]').should('be.visible');
        }
    }

    enterClaimAmount(amount) {
        cy.get('[data-cy="claim-amount"]').clear();
        cy.get('[data-cy="claim-amount"]').type(amount);
        cy.get('[data-cy="claim-amount"]').should('have.value', amount);
    }

    enterClaimDescription(description) {
        cy.get('[data-cy="claim-description-input"]').clear();
        cy.get('[data-cy="claim-description-input"]').type(description);
        cy.get('[data-cy="claim-description-input"]').then(($description) => {
            const txt = $description.text();
            expect(txt).to.equal(description);
        })
    }

    clickSaveClaim() {
        cy.get('[data-cy="save-claim-button"]').should('not.have.a.property', 'disabled');
        cy.get('[data-cy="save-claim-button"]').click();
    }

    verifyAddedLossDescription() {
        cy.get('[data-cy="loss-description"]').should('be.visible');
    }

    verifyBusinessInfoURL() {
        cy.url().should('include', 'getquote/businessinfo');
    }



    performBusinessInformationFlow(businessName, businessYears, numOfEmpRange, numOfEmp, state,
        zipCode, hasClaims, claimAmount, claimDescription) {
        this.verifyBusinessInfoURL();
        this.enterBusinessName(businessName);
        this.selectBusinessYears(businessYears);
        this.selectNumberOfEmpRange(numOfEmpRange);
        this.selectNumberOfEmp(numOfEmp);
        this.selectBusinessState(state);
        this.enterZipCode(zipCode);
        if (hasClaims == "yes") {
            this.selectClaimsHistory(hasClaims);
            this.enterClaimAmount(claimAmount);
            this.enterClaimDescription(claimDescription);
            this.clickSaveClaim();
            this.verifyAddedLossDescription();
        } else {
            this.selectClaimsHistory(hasClaims);
        }

    }


}