export default class LocationsPage {
    // Check if the user is able to see the default active link of "Locations" under the left Main menu . 
    CheackLocationLeftMenu() {
        cy.get('.sc-frDJqD > :nth-child(5)').should("be.visible")
    }
    //Check that the user is successfully redirected to the fifth page (Locations). 
    VerifyLocationsPageTitle() {
        cy.contains("Locations").should('be.visible')
    }

    // Check that "Estimated premium" is not under any calculation process.
    cheackPremiumIsNotCalculated() {
        cy.get('[data-cy=premium]').then(($premium) => {
            const txt = $premium.text();
            expect(txt).to.equal('$--');
        })
    }

    // Enter address manually
    enterAddressManually(streetAddress, city, state, zipCode) {
        cy.get('[data-cy=toggle-manual-address]').click();
        cy.get('[data-cy=manual-street-input]').type(streetAddress);
        cy.get('[data-cy=manual-city-input]').type(city);
        cy.get('[data-cy=manual-state-input]').type(state);
        cy.get('[data-cy=manual-zip-input]').type(zipCode);
        cy.get('input[value="'.concat(streetAddress).concat('"]')).should('be.visible');
        cy.get('input[value="'.concat(city).concat('"]')).should('be.visible');
        cy.get('input[value="'.concat(state).concat('"]')).should('be.visible');
        cy.get('[data-cy=save-manual-address]').click();
    }


    // Check if "Where is your business located?" textbox if already filled after entered address manually 
    checkLocationTextBox(streetAddress) {
        cy.get('[data-cy="location-button-'.concat(streetAddress).concat('"]')).should('be.visible');
    }

    // Click on the "Building leased"  button in Type of building menu
    selectBuildingType(buildingType) {
        cy.fixture('QuoteFlowData').then((data) => {
            cy.get('[data-cy="location-type-'.concat(buildingType).concat('"]')).click();
            if (buildingType === data.locations[0].buildingType.type3 || buildingType === data.locations[0].buildingType.type4 || buildingType === data.locations[0].buildingType.type5) {
                cy.get('[data-cy=buildingLimit]').should('be.visible');
            }
        })
    }

    // Check the "Estimated premium" is not under any calculation process.
    checkPremiumIsNotCalculated() {
        cy.get('[data-cy=premium]').then(($premium) => {
            const txt = $premium.text();
            expect(txt).to.equal('$--');
        })
    }

    // Check the "Building leased"  button in Type of building munu is now successfully updated with blue color.
    verifySelectedBuildingType() {
        cy.get('.dXtOFL').should('have.css', 'background-color', 'rgb(65, 35, 255)');
    }

    haveFireSuppressionSystem(suppression) {
        cy.get('[data-cy="'+suppression+'-sprinkler-system"]').click();
        if(suppression === 'yes'){
            cy.get('button[data-cy="yes-sprinkler-system"][aria-pressed="true"]').should('be.visible');
        }else{
            cy.get('button[data-cy="yes-sprinkler-system"][aria-pressed="true"]').should('be.visible');
        }
    }

    // Check the "Estimated premium" is now under new calculation process.
    checkPremiumIsCalculated() {
        cy.get('[data-cy=premium]').then(($premium) => {
            const txt = $premium.text();
            expect(txt).not.to.equal('$--');
        })
    }

    selecDeductibleValue(deductible) {
        cy.get('[data-cy="multi-button-'.concat(deductible).concat('"]')).click();
        cy.get('[data-cy="multi-button-'.concat(deductible).concat('"][aria-pressed="true"]')).should('be.visible');
    }

    // Fill the "business property and equipment" box with a Valid data ex: 150
    fillBusinessPropertyAndEquipment(propertyandequipment) {
        cy.get('[data-cy="bppLimit"]').type(propertyandequipment);
    }

    //33-Check the "Estimated premium" is now under new calculation process.
    cheackPremiumIsCalculated() {
        cy.get('[data-cy=premium]').then(($premium) => {
            const txt = $premium.text();
            // cy.log(txt);
            expect(txt).not.to.equal('$--');
        })
    }

    //34-Check the "business property and equipment" box is now successfully updated with the correct selected option (150)
    cheackBusinessPropertyAndEquipmentUpdated(propertyandequipment) {
        cy.get('input[value="'.concat(propertyandequipment).concat('"]')).should('be.visible');
    }

    fillBuildingCoverege(buildingType, BuildingCoverege) {
        cy.fixture('QuoteFlowData').then((data) => {
            if (buildingType === data.locations[0].buildingType.type3 || buildingType === data.locations[0].buildingType.type4 || buildingType === data.locations[0].buildingType.type5) {
                cy.wait(5000);
                cy.get('[data-cy=buildingLimit]').type(BuildingCoverege);
                cy.get('input[value="'.concat(BuildingCoverege).concat('"]')).should('be.visible');
                cy.get('[data-cy=premium]').then(($premium) => {
                    const txt = $premium.text();
                    expect(txt).not.to.equal('$--');
                })
            }
        })
    }

    // enterPtopertyAndEquipmentCoverage(propertyAndEquipment) {
    // cy.get('input[data-cy="bppLimit"]').type("500000")

    // }

    //22-Check if the "Delete" icon is clickable in "Where is your business located" textbox.
    clickonDeleteButton(StreetAddress) {
        cy.get('[data-cy=delete-location-'.concat(StreetAddress).concat(']')).click()
    }

    //23-Check if the system will redirect the user to add new address again.
    checkRedirectToAddNewAddress() {
        cy.get('[data-cy=toggle-manual-address]').should('be.visible')
    }


    performLocationsFlow(streetAddress, city, state, zipCode, buildingType, suppression, deductible, propertyandequipment, buildingCoverege) {
        // this.CheackLocationLeftMenu();
        // this.VerifyLocationsPageTitle();
        // this.cheackPremiumIsNotCalculated();
        this.enterAddressManually(streetAddress, city, state, zipCode);
        this.selectBuildingType(buildingType);
        this.haveFireSuppressionSystem(suppression);
        this.selecDeductibleValue(deductible);
        this.fillBusinessPropertyAndEquipment(propertyandequipment);
        this.fillBuildingCoverege(buildingType, buildingCoverege);

       
    }

    performDeleteFlow(StreetAddress, City, State, ZipCode,) {
        this.CheackLocationLeftMenu();
        this.VerifyLocationsPageTitle();
        this.cheackPremiumIsNotCalculated();
        this.clickonEnterAddressmanually();
        this.fillStreetAddress(StreetAddress);
        this.cheackStreetAddressUpdated(StreetAddress)
        this.fillCity(City);
        this.cheackCityUpdated(City);
        this.fillState(State);
        this.cheackStateUpdated(State);
        this.fillZipCode(ZipCode);
        this.cheackZipcodeUpdated(ZipCode)
        this.clickOnSaveAddress();
        this.cheackPremiumIsNotCalculated();
        this.checkLocationTextBox(StreetAddress);
        this.clickonDeleteButton(StreetAddress);
        this.checkRedirectToAddNewAddress();


    }
}