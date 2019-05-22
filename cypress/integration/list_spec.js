describe('Website actually works', () => {
    it('Should load the page', () => {
        cy.visit('/')
    })
})
describe('Add Item Input Field', () => {
    it('Should be able to type in the input field', () => {
        cy.get('.new-item')
        .type('Create a React App')
        .should('have.value', 'Create a React App')
    })
    it('Should add something to the page when you click the button', () => {
        cy.get('.add-button')
        .click()

        cy.contains('Create a React App');
    })
})

describe('Check Functionality Should work', () => {
    it('Should be able to click the check button', () => {
        cy.get('button[name="create-a-react-app-check')
        .click()
    })
    it('Should have a strike-through class now', () => {
        cy.get("span[class='checked create-a-react-app']")
        .should('exist')
    })
})

describe('Delete functionality should work', () => {
    it('Should be able to delete a list item', () => {
        cy.get('button[name="create-a-react-app-delete"]')
        .click()
    }) 
    it('Should No Longer have Create a React App on the screen', () => {
        cy.get('button[name="create-a-react-app-delete"]')
        .should('not.exist')
    })
})

describe('Checked Page', () => {
    it('Should be able to check an item', () => {
        cy.get('button[name="get-eggs-check"]')
        .click();
    })
    it('Should be able to navigate to the checked page', () => {
        cy.contains('Checked').click();
    
        cy.url().should('include', '/checked')
    })
    it('Should have "Get Eggs" on the screen', () => {
        cy.contains('Get Eggs');
    })
    it('Should be able to navigate back to the overview', () => {
        cy.contains('Overview').click();

        cy.url().should('not.include', '/checked')
        cy.url().should('not.include', '/unchecked')
    })
})

describe('Unchecked Page', () => {
    it('Should be able to go to the unchecked page', () => {
        cy.contains('Unchecked').click();

        cy.url().should('include', '/unchecked');
    })
    it('Should show unchecked items', () => {
        cy.contains('Learn Cypress')
    })
    it('Should not show checked items', () => {
        cy.contains('Get Eggs').should('not.exist')
    })
    it('Should be able to navigate back to Overview', () => {
        cy.contains('Overview').click();

        cy.url().should('not.include', '/checked')
        cy.url().should('not.include', '/unchecked')
    })
})