var config = require('../../nightwatch.conf.BASIC.js');

module.exports = { // adapted from: https://git.io/vodU0
  'Guinea Pig Assert Title': function(browser) {
    browser
      .url('https://hyper2.z16.web.core.windows.net/')
      .waitForElementVisible('body')
      .assert.title('Hypertime')
      .setValue("#username", "oscarljungberg")
      .keys("\uE007")
      .saveScreenshot('hypertime.png')
      .end();
  }
};