describe('Dashboard', () => {
  beforeEach(() => {
    // cy.interceptAdvice()
    cy.visit('/')
  });

  it('should render a header component containing the app\'s name and a nav bar', () => {
    cy.get('.header > h1').contains('Paw-some')
    cy.get('.header > h1').contains('Advice')
    cy.get('.to-favorites').contains('View Favorites')
  });

  it('should render the dashboard component',() => {
    cy.get('.advice').should('have.value', '')
    cy.get('.default-cat').should('have.attr', 'src').should('include', 'cat')
    cy.get('.advice-button').should('be.visible')
    cy.get('.add-favorite').should('be.visible')
  })

  // it('should not see the home button', () => {
  //   cy.get('.fa-paw')
  //     .should('not.be.visible') 
  // })

  // it('should intercept the network request', () => {
  //   cy.wait('@getAdviceStub')
  //   .its('response.statusCode')
  //   .should('eq', 200)
  // });

})

