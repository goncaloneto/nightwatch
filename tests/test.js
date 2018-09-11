module.exports = {
  'Test': function (client) {
    var loginPage = client.page.loginPage();

    loginPage.navigate();
    loginPage.login();
    client.pause(10000);
    client.frame('home.prespective');
    client.click('#btnCreateNew');
    client.pause(10000);
    client.end();
  }
};