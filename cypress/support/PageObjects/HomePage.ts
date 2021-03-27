// export class HomePage{
// visitPage(webpage){
//     return cy.visit("https://www.bbc.co.uk/");
// }
// } 
export class Page {
    public static visitPage(webpage: string): Cypress.Chainable {
        return cy.visit(webpage);
    }
}
