import LoginPage from "../pages/LoginPage";
import AppointmentPage from "../pages/AppointmentPage";


describe('User Appointment Suite', () => {

  const loginPage = new LoginPage();
  const appointmentPage =new AppointmentPage();

  beforeEach(()=>{

    loginPage.userLogin("John Doe","ThisIsNotAPassword");

  })

  it('Appointment booked successfully ', () => {

     appointmentPage.createAppointment();
     appointmentPage.validAssertion();
  })
})