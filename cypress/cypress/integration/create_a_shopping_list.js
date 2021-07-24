describe('Create a Shopping list from Landing page', () => {
  it('When on the landing page', () => {
    cy.visit('https://cmh-dat-shopping-list.herokuapp.com/')
    cy.title().should('equal', "Dat Shopping List")
    cy.contains("Create a new Shopping List")
    cy.contains("Have a Link? Paste it Here")
    // cy.get('ui li').should('have.length', 0)
  })
  it('Should link to the create Shopping list page', () => {
    // cy.get('ul').childern().count().should('have.length', 0) //empty List of Lists
    cy.contains("Create a new Shopping List").click();
    cy.title().should('equal', "Dat Shopping List - Create")
  })
  it('Should enter name for the new  Shopping list', () => {
    // cy.title().should('equal', "Dat Shopping List - Create")
    cy.get("h2").contains("Enter a name for your new shopping list")
    cy.get('[type="text"]').type('Link1')
    // cy.get("h2").should('equal', "Enter a name for your new shopping list")
    // cy.get("h2").contains("Enter a name for your new shopping list")
    cy.contains("Submit").click();
  })
  it('Should open the Shopping list in edit mode', () => {
    cy.get("h1").contains('Link1')
    cy.contains("You created this document.");
    // cy.get('.okAuth').should('equal',"You are authorized to write to this document.")
  })

})

describe('Create a Shopping list from a valid url', () => {
    it('When on the landing page', () => {
      cy.visit('https://cmh-dat-shopping-list.herokuapp.com/')
      cy.contains("Create a new Shopping List")
      cy.contains("Have a Link? Paste it Here")
    //   cy.get('ui li').should('have.length', 1)
    })
    it('Should link to the Paste in a URL page', () => {
      cy.contains("Have a Link? Paste it Here").click();
      cy.get("h2").contains("Paste in a URL link or a hexadecimal key")
    })
    it('Should enter a valid URL', () => {
      cy.get('[type="text"]').type('https://cmh-dat-shopping-list.herokuapp.com/doc/9be94740a2b48a8649112e6c82054209efe2066cc96a325a06d3589b99bbc3e3')
      // cy.contains("Enter a name for your new shopping list")
      cy.contains("Submit").click();
    })
    it('Should see the Shopping list open to edit', () => {
        cy.get("h1").contains('Link2')
        cy.contains("You joined this document.");
      // cy.contains("You created this document.");
      // cy.contains("Enter a name for your new shopping list")
    })
  
  })