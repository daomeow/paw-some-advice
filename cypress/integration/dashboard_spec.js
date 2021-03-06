describe('Dashboard', () => {
  beforeEach(() => {
    cy.interceptAdvice()
    // cy.testTest()
    cy.visit('/')
  });

  it('should render a header component containing the app\'s name and nav bar', () => {
    cy.get('.header > h1').contains('Paw-some')
    cy.get('.header > h1').contains('Advice')
    cy.get('.to-favorites').contains('View Favorites')
  });

  it('should not display the home button when on the home page', () => {
    cy.get('go-home').should('not.exist')
  });

  it('should render the dashboard component\'s default view on inital load',() => {
    cy.get('.advice').should('have.value', '')
    cy.get('.default-cat').should('have.attr', 'src').should('include', 'cat')
    cy.get('.advice-button').should('be.visible')
    cy.get('.add-favorite').should('be.visible')
  });

  it('should intercept the advice network request', () => {
    cy.intercept('https://api.adviceslip.com/advice', {
      fixtures: 'advice.json',
      statusCode: 200
    })
  });

  it('should display advice and a cat after clicking the receieve advice button', () => {
    cy.get('.advice-button').click()
    cy.get('.advice').should('have.text', 'One of the top five regrets people have is that they didn\'t have the courage to be their true self.')
    cy.get('.cat-picture').should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
  });

  it('should intercept the cat network request', () => {
    cy.intercept('https://thatcopy.pw/catapi/rest/', {
      fixtures: 'cat.json',
      statusCode: 200
    })
  });

  it('should redirect the user when they access an invalid URL', () => {
    cy.intercept('https://api.adviceslip.com/advice', {
      statusCode: 200
    })
      .visit('http://localhost:3000/stay-PAWsitive')
      cy.url().should('eq', 'http://localhost:3000/' )
  });

  // it.only('should display a specific error message when fetch yields a 404 status', () => {
  //   cy.intercept('https://api.adviceslip.com/advice', {
  //     statusCode: 404
  //   })
  //     .visit('/')
  //     .get('h2')
  //     .contains('Something went wrong')
  // });

  // it('should display a specific error message when fetch yields a 500 status', () => {
  //   cy.intercept('https://api.adviceslip.com/advice', {
  //     statusCode: 500
  //   })
  //     .visit('http://localhost:3000/')
  //     .get('h2')
  //     .contains('Something went wrong')
  // });
})

