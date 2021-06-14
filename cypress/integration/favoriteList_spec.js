describe('FavoriteList component', () => {
  beforeEach(() => {
    // cy.interceptAdvice()
    // cy.interceptCatPicture()
    cy.visit('/')
  })
  
  it('should render a header component containing the app\'s name and nav bar', () => {
    cy.get('.to-favorites').click()
    cy.get('.header > h1').contains('Paw-some')
    cy.get('.header > h1').contains('Advice')
    cy.get('.go-home').contains('Go Home')
  });

  it('should display an error message if nothing has been added as a favorite', () => {
    cy.get('.to-favorites').click()
    cy.get('h2').contains('I knead you to go home and add your favorites')
  }); 
})