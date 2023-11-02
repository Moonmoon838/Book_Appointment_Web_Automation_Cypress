class LoginPage{

    userLogin(username, password){
        cy.visit('https://katalon-demo-cura.herokuapp.com/');
        cy.get('#btn-make-appointment').click();
        cy.get('#txt-username').type(username);
        cy.get('#txt-password').type(password);
        cy.get('#btn-login').click();
        
        
    }

    invalidAssertion(){
        cy.get('h2').should('have.text','Login').wait(1000);
    }

    validAssertion(){
        cy.get('h2').should('have.text', 'Make Appointment').wait(1000);
    }


}

export default LoginPage;