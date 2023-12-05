require('@cypress/xpath')
describe('Testing CeluAlquilo', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001')
    cy.wait(1000)
    cy.contains('CeluAlquilo')
    cy.contains('Ingresar').click();
    cy.get('[data-testid="name"]').type('Santiago Martínez');
    cy.get('[data-testid="email"]').type('alejo@gmail.com');
    cy.get('[data-testid="password"]').type('12345678aA#');
    cy.get('[data-testid="verifyPassword"]').type('12345678aA#');
    cy.contains('Crear cuenta').click();
    cy.wait(1000);
    cy.xpath('/html/body/div[1]/div/div[1]/header/div[1]/div[1]/a').click()
    cy.wait(1000);
  })
  //Se comprueban HU3 -HU4 - HU5 - HU6
  it('Prueba alquiler exitoso', () => {
    //HU3
    cy.get('button').contains('Descubrir').click()
    //HU4
    cy.get('button').contains('Alquilar').click()
    //HU5
    cy.get('input#outlined-required').type('0')
    //HU6
    cy.get('button').contains('Continuar pago').click()
    cy.xpath('/html/body/div/div/div[3]/div[1]/div[1]/div/div[1]/div[1]/div/div/input').type('Calle 152 # 7-51')
    cy.xpath('/html/body/div/div/div[3]/div[1]/div[1]/div/div[1]/div[2]/div/div/input').type('Bogotá')
    cy.xpath('/html/body/div/div/div[3]/div[1]/div[1]/div/div[2]/div/div/div/input').type('3321894322')
    cy.get('button').contains('Finalizar compra').click()
})

  it('Prueba días de alquiler inválidos', () => {
    cy.get('button').contains('Descubrir').click()
    cy.get('button').contains('Alquilar').click()
    cy.get('input#outlined-required').type('000')
    cy.get('p').contains('No puedes alquilar un celular por más de 6 meses.').should('be.visible')
  })

  it('Prueba dirección inválida', () => {
    cy.get('button').contains('Descubrir').click()
    cy.get('button').contains('Alquilar').click()
    cy.get('input#outlined-required').type('0')
    cy.get('button').contains('Continuar pago').click()
    cy.xpath('/html/body/div/div/div[3]/div[1]/div[1]/div/div[1]/div[1]/div/div/input').type('dsadsa')
    cy.get('p').contains('La dirección debe empezar por: Carrera, Calle, Transversal, Diagonal, Circular, Avenida o Autopista.').should('be.visible')
  })

  it ('Prueba dirección vacía', () => {
    cy.get('button').contains('Descubrir').click()
    cy.get('button').contains('Alquilar').click()
    cy.get('input#outlined-required').type('0')
    cy.get('button').contains('Continuar pago').click()
    cy.xpath('/html/body/div/div/div[3]/div[1]/div[1]/div/div[1]/div[1]/div/div/input').type('1{backspace}')
    cy.get('p').contains('Debes ingresar una dirección.').should('be.visible')
  })

  it ('Prueba ciudad inválida', () => {
    cy.get('button').contains('Descubrir').click()
    cy.get('button').contains('Alquilar').click()
    cy.get('input#outlined-required').type('0')
    cy.get('button').contains('Continuar pago').click()
    cy.xpath('/html/body/div/div/div[3]/div[1]/div[1]/div/div[1]/div[1]/div/div/input').type('Calle 152 # 7-51')
    cy.xpath('/html/body/div/div/div[3]/div[1]/div[1]/div/div[1]/div[2]/div/div/input').click()
    cy.get('p').contains('Debes ingresar una ciudad.').should('be.visible')
  })

  it ('Prueba número de teléfono inválido', () => {
    cy.get('button').contains('Descubrir').click()
    cy.get('button').contains('Alquilar').click()
    cy.get('input#outlined-required').type('0')
    cy.get('button').contains('Continuar pago').click()
    cy.xpath('/html/body/div/div/div[3]/div[1]/div[1]/div/div[1]/div[1]/div/div/input').type('Calle 152 # 7-51')
    cy.xpath('/html/body/div/div/div[3]/div[1]/div[1]/div/div[1]/div[2]/div/div/input').type('Bogotá')
    cy.xpath('/html/body/div/div/div[3]/div[1]/div[1]/div/div[2]/div/div/div/input').type('1234')
    cy.get('p').contains('El número de contacto debe consistir de 10 dígitos contiguos.').should('be.visible')
  })

  it ('Prueba número de teléfono vacío', () => {
    cy.get('button').contains('Descubrir').click()
    cy.get('button').contains('Alquilar').click()
    cy.get('input#outlined-required').type('0')
    cy.get('button').contains('Continuar pago').click()
    cy.xpath('/html/body/div/div/div[3]/div[1]/div[1]/div/div[1]/div[1]/div/div/input').type('Calle 152 # 7-51')
    cy.xpath('/html/body/div/div/div[3]/div[1]/div[1]/div/div[1]/div[2]/div/div/input').type('Bogotá')
    cy.xpath('/html/body/div/div/div[3]/div[1]/div[1]/div/div[2]/div/div/div/input').type('1{backspace}')
    cy.get('p').contains('Debes ingresar un número de contacto.').should('be.visible')
  })

})


