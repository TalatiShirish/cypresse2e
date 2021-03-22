class HomePage{
visitPage(webpage){
    return cy.visit("https://www.bbc.co.uk/");
}
} 
export default HomePage