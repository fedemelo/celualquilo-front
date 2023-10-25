describe('Testing CeluAlquilo', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
      cy.wait(1000)
    })
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
  });