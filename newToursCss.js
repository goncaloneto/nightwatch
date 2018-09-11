module.exports = {
  'Login Sales': function (client) {
      client
        .url('https://login.salesforce.com/?locale=in')
        .assert.visible('input[name="pw"]') //tagname[attributename=value]
        .assert.visible('img#logo') // if id is present tag#id
        .useXpath()
        .assert.visible('//input[@name="Login"]')
        .setValue('//input[@type="email"]','v')
        .useCss()
        .waitForElementVisible('input[name="pw"]' ,30000)
        .end();
    }
  };
