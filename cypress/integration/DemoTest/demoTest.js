import { Given } from "cypress-cucumber-preprocessor/steps"
import { HomePage } from "../../support/PageObjects/HomePage"


Given("I visit a website", () => {
    // cy.visit("https://www.bbc.co.uk/");
    const homePage = new HomePage();
    homePage.visitPage("https://www.bbc.co.uk/");

});