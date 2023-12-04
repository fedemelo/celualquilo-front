require('@cypress/xpath')
describe('Testing CeluAlquilo', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3001')
      cy.wait(1000)
    })
    //Se comprueban HU1

    
    it('Visits CeluAlquilo,clicks on login button', () => {
  
      cy.contains('CeluAlquilo')
      cy.contains('Ingresar').click();
  
  
    })
    it('Enters information in text fields and clicks in create account', () => {
        
        cy.contains('CeluAlquilo')
        cy.contains('Ingresar').click();
        cy.get('[data-testid="name"]').type('Santiago Martínez');
        cy.get('[data-testid="email"]').type('alejo@gmail.com');
        cy.get('[data-testid="password"]').type('12345678');
        cy.get('[data-testid="verifyPassword"]').type('12345678');
    })
    it('Requires non empty text fields', () => {
          
          cy.contains('CeluAlquilo')
          cy.contains('Ingresar').click();
          cy.get('[data-testid="name"]').click();
          cy.get('[data-testid="email"]').click();
          cy.get('[data-testid="password"]').click();
          cy.get('[data-testid="verifyPassword"]').click();
          cy.get('[data-testid="nameError"]').should('be.visible');
          cy.get('[data-testid="nameError"]').should('contain', 'El nombre no puede estar vacío');
          cy.get('[data-testid="emailError"]').should('be.visible');
          cy.get('[data-testid="emailError"]').should('contain', 'El correo no puede estar vacío.');
          cy.get('[data-testid="passwordError"]').should('be.visible');
          cy.get('[data-testid="passwordError"]').should('contain', 'La contraseña no puede estar vacía');
          cy.get('[data-testid="verifyPasswordError"]').should('be.visible');
    })
  
    it('Notifies invalid email', () => {
            
        cy.contains('CeluAlquilo')
        cy.contains('Ingresar').click();
        cy.get('[data-testid="name"]').type('Santiago Martínez');
        cy.get('[data-testid="email"]').type('alejo');
        cy.get('[data-testid="password"]').type('12345678');
        cy.get('[data-testid="verifyPassword"]').type('12345678');
        cy.get('[data-testid="emailError"]').should('be.visible');
        cy.get('[data-testid="emailError"]').should('contain', "El correo debe contener el símbolo '@'.");
      })
  
    it('Notifies invalid password', () => {
        
        cy.contains('CeluAlquilo')
        cy.contains('Ingresar').click();
        cy.get('[data-testid="name"]').type('Santiago Martínez');
        cy.get('[data-testid="email"]').type('alejo@gmail.com');
        cy.get('[data-testid="password"]').type('123');
        cy.get('[data-testid="verifyPassword"]').type('123');
        cy.get('[data-testid="passwordError"]').should('be.visible');
        cy.get('[data-testid="passwordError"]').should('contain', 'La contraseña debe contener al menos una letra minúscula.');
    })
    it('Enters information in text fields and clicks in create account', () => {
        
        cy.contains('CeluAlquilo')
        cy.contains('Ingresar').click();
        cy.get('[data-testid="name"]').type('Santiago Martínez');
        cy.get('[data-testid="email"]').type('alejo@gmail.com');
        cy.get('[data-testid="password"]').type('12345678aA#');
        cy.get('[data-testid="verifyPassword"]').type('12345678aA#');
        cy.contains('Crear cuenta').click();
        cy.url().should('include', '/user');
    })
    it('Successfully creates account and clicks on favourite button', () => {
        
        cy.contains('CeluAlquilo')
        cy.contains('Ingresar').click();
        cy.get('[data-testid="name"]').type('Santiago Martínez');
        cy.get('[data-testid="email"]').type('alejo@gmail.com');
        cy.get('[data-testid="password"]').type('12345678aA#');
        cy.get('[data-testid="verifyPassword"]').type('12345678aA#');
        cy.contains('Crear cuenta').click();
        cy.contains('Ver favoritos').click();
        cy.url().should('include', '/Favourites');
    })
    //Se comprueban  HU2 - HU9
    it('Successfully creates account and clicks on history button', () => {
      cy.contains('CeluAlquilo')
        cy.contains('Ingresar').click();
        cy.get('[data-testid="name"]').type('Santiago Martínez');
        cy.get('[data-testid="email"]').type('alejo@gmail.com');
        cy.get('[data-testid="password"]').type('12345678aA#');
        cy.get('[data-testid="verifyPassword"]').type('12345678aA#');
        cy.contains('Crear cuenta').click();
        cy.contains('Ver historial').click();
        cy.url().should('include', '/RentHistory');
    })
    //Se comprueban HU7
    it('Renew phone', () => {
      cy.contains('CeluAlquilo')
        cy.contains('Ingresar').click();
        cy.get('[data-testid="name"]').type('Santiago Martínez');
        cy.get('[data-testid="email"]').type('alejo@gmail.com');
        cy.get('[data-testid="password"]').type('12345678aA#');
        cy.get('[data-testid="verifyPassword"]').type('12345678aA#');
        cy.contains('Crear cuenta').click();
        cy.contains('Ver historial').click();
        cy.contains('Renovar alquiler').click();
        cy.url().should('include', '/rent');
    })

    it('Goes to login instead of Create account', () => {
          
          cy.contains('CeluAlquilo')
          cy.contains('Ingresar').click();
          cy.get('[data-testid="loginInstead"]').click();
          cy.url().should('include', '/Login');
          cy.get('[data-testid="email"]').type('alejo@gmail.com');
          cy.get('[data-testid="password"]').type('12345678aA#');
          cy.get('[data-testid="submitButton"]').click();
          cy.url().should('include', '/user');
    })
    it('Goes to Create - Login - Create', () => {
            
            cy.contains('CeluAlquilo')
            cy.contains('Ingresar').click();
            cy.get('[data-testid="loginInstead"]').click();
            cy.url().should('include', '/Login');
            cy.get('[data-testid="registerInstead"]').click();
            cy.url().should('include', '/Register');
      })

    //Se comprueban HU8
    it('Leaves rating and reviews', () => {
              
      cy.contains('CeluAlquilo')
      cy.contains('Ingresar').click();
      cy.get('[data-testid="name"]').type('Santiago Martínez');
      cy.get('[data-testid="email"]').type('alejo@gmail.com');
      cy.get('[data-testid="password"]').type('12345678aA#');
      cy.get('[data-testid="verifyPassword"]').type('12345678aA#');
      cy.contains('Crear cuenta').click();
      cy.contains('Ver historial').click();
      cy.contains('Escribir reseña').click();
      cy.get('.MuiTextarea-root textarea').first().type('Tu reseña aquí');
      cy.get('.MuiButton-root.MuiButton-variantContained.MuiButton-colorPrimary').click();
      cy.url().should('include', '/review');
    }
  )
      
    //Se comprueban HU10
    it('Visits favourite Phones', () => {
              
      cy.contains('CeluAlquilo')
      cy.contains('Ingresar').click();
      cy.get('[data-testid="name"]').type('Santiago Martínez');
      cy.get('[data-testid="email"]').type('alejo@gmail.com');
      cy.get('[data-testid="password"]').type('12345678aA#');
      cy.get('[data-testid="verifyPassword"]').type('12345678aA#');
      cy.contains('Crear cuenta').click();
      cy.contains('Ver favoritos').click();
      cy.url().should('include', '/Favourites');
    })


    //Se comprueban HU12

    it('Visits phones by Brand', () => {
      cy.contains('CeluAlquilo');
      cy.xpath('/html/body/div[1]/div/div[2]/div[2]/div/div[1]/a').click();
      cy.url().should('include', '/Samsung');
    }
  )

  });