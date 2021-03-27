import { Given } from "cypress-cucumber-preprocessor/steps"
import { Page } from "../../support/PageObjects/HomePage"


Given("I visit a website", () => {
    // cy.visit("https://www.bbc.co.uk/");
    Page.visitPage("https://www.bbc.co.uk/");

});