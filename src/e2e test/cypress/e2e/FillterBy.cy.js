require('@cypress/xpath')

describe('Testing CeluAlquilo Filtros', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3001')
    cy.wait(1000)
  })
  //Se comprueba HU11
  it("llegar a filtros", () => {

    cy.get('button').contains('Descubrir').click()
    cy.url().should('include', '/products')

  })

  it("Abrir y cerrar filtros", () => {
    cy.get('button').contains('Descubrir').click()
    cy.get('h3').contains("Filtros").should('be.visible')
    cy.get('h3').contains('Filtros').click()
    cy.get("h4").contains("por marca").should('be.visible')
    cy.get("h4").contains("por precio").should('be.visible')
    cy.get('h3').contains('Filtros').click()
  })

  it("Filtrar por marca", () => {
    cy.get('button').contains('Descubrir').click()
    cy.xpath("/html/body/div[1]/div/div[2]/div[3]/div/h3").click()
    cy.get('span').contains("Apple").click()
    cy.url().should('include', '/iphone');
    
  })

  it("Filtrar por precio", () => {
    cy.get('button').contains('Descubrir').click()
    cy.get('h3').contains('Filtros').click()
    cy.xpath("/html/body/div/div/div[2]/div[3]/div[2]/div[2]/div[1]/div/input").type("1000000")
    cy.xpath("/html/body/div/div/div[2]/div[3]/div[2]/div[2]/div[2]/div/input").type("2000000")
    cy.xpath("/html/body/div/div/div[2]/div[3]/div[2]/div[2]/div[1]/div/input").should('have.value', '1000000')
    cy.xpath("/html/body/div/div/div[2]/div[3]/div[2]/div[2]/div[2]/div/input").should('have.value', '2000000')
  })

  it("Filtrar por precio y cerrar", () => {
    cy.get('button').contains('Descubrir').click()
    cy.get('h3').contains('Filtros').click()
    cy.xpath("/html/body/div/div/div[2]/div[3]/div[2]/div[2]/div[1]/div/input").type("1000000")
    cy.xpath("/html/body/div/div/div[2]/div[3]/div[2]/div[2]/div[2]/div/input").type("2000000")
    cy.xpath("/html/body/div/div/div[2]/div[3]/div[2]/div[2]/div[1]/div/input").should('have.value', '1000000')
    cy.xpath("/html/body/div/div/div[2]/div[3]/div[2]/div[2]/div[2]/div/input").should('have.value', '2000000')
    cy.get('h3').contains('Filtros').click()
    cy.get('h3').contains('Filtros').click()
    cy.xpath("/html/body/div/div/div[2]/div[3]/div[2]/div[2]/div[1]/div/input").should('have.value', '1000000')
    cy.xpath("/html/body/div/div/div[2]/div[3]/div[2]/div[2]/div[2]/div/input").should('have.value', '2000000')
  })







})