class loginPage {
  username = "#user-name";
  password = "#password";
  login_btn = ".submit-button.btn_action";
  error_msg = '[data-test="error"]';

  //tambah function
  inputPassword(pass) {
    cy.get(this.password).type(pass);
  }

  //tambah custom command ketik di function pom
  inputUsername(usernm) {
    cy.ketik(this.username, usernm);
  }
}

module.exports = new loginPage();
