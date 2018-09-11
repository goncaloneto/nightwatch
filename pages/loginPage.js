var clickLogin = {
  login: function() {
    this.setValue('@inputUser','Admin');
    this.setValue('@inputPassword','password');
    this.click('@loginButton');
  }
};

module.exports = {
  url: 'http://172.20.43.145:8080/pentaho',
  commands: [clickLogin],
  elements: {
    inputUser: {
      selector: '#j_username'
    },
    inputPassword: {
      selector: '#j_password'
    },
    loginButton: {
      selector: '//button[text()=\'Login\']',
      locateStrategy: 'xpath'
    },
    test:{
      selector: '#test'
    }
  }
};

