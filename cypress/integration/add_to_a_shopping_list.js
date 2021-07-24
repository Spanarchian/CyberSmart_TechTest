describe('Add an Item to a new Shopping list', () => {
    it('When on the landing page', () => {
        cy.visit('https://cmh-dat-shopping-list.herokuapp.com/')
        cy.contains("Create a new Shopping List")
        cy.contains("Have a Link? Paste it Here")
    })
    it('Should link to the create Shopping list page', () => {
        cy.contains("Create a new Shopping List").click();
        cy.contains("Enter a name for your new shopping list")
    })
    it('Should enter name for the Shopping list page', () => {
        cy.get('[type="text"]').type('Link2')
        cy.contains("Submit").click();
    })
    it('Should see the Shopping list open to edit - Add Peanuts', () => {
        cy.get("h1").contains('Link2')
        cy.get('form > [type="text"]').type("Peanuts")
        cy.get('form > ._2abd6af1').click();
    })
  
    it('Should see the Shopping list has peanuts listed', () => {
      cy.get("h1").contains('Link2')
      cy.get("div").contains("Peanuts")
    })
  })