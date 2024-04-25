/// <reference types="cypress" />

// reset the db: rails db:drop db:create db:migrate db:seed RAILS_ENV=test
// run dev server with test db: CYPRESS=1 bin/rails server -p 3000

describe('Checking maintenance form', () => {
  it('opens and clicks the date picker,and correct date shows successfully', () => {
    const todayYyyyMmDd = new Date().toISOString().substring(0,10) // ie, "2024-03-10"
    const tdSelectorToday = 'td[title="' + todayYyyyMmDd + '"]'
    cy.loginNonAdmin()
    cy.url().should('match', /http:\/\/localhost:3001\/users\/2/)
    cy.visit('http://localhost:3001/maintenances/new')
    cy.get('input[name=date]').click()
    cy.get(tdSelectorToday).click()
    cy.get('input[name=date]').should('have.value', todayYyyyMmDd)
  })
})
