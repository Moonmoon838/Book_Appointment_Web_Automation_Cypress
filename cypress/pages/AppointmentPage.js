class AppointmentPage{

  createAppointment(){
      cy.get('#combo_facility').select('Seoul CURA Healthcare Center');
      cy.get('#chk_hospotal_readmission').check();
      cy.get('#radio_program_medicaid').check();
      cy.get('#txt_visit_date').click();
      cy.get(':nth-child(6) > :nth-child(6)').click();
      cy.get('#txt_comment').type('I want to book a appointment.');
      cy.get('#btn-book-appointment').click();
  }

  validAssertion(){
      cy.get('h2').should('have.text','Appointment Confirmation').wait(1000);
  }
}

export default AppointmentPage;