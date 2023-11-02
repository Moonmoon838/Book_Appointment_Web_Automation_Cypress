import LoginPage from "../pages/LoginPage";


describe('User Login Suite', () => {

  const loginPage = new LoginPage();

  it('Login with invalid credentials', () => {
    loginPage.userLogin('John Doe', 'ThisIsAPassword');
    loginPage.invalidAssertion();
  })

  it('Login with valid credentials', () => {
    loginPage.userLogin('John Doe', 'ThisIsNotAPassword');
    loginPage.validAssertion();
  })

})