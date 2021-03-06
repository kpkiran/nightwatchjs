var seleniumServer = require('selenium-server');
var chromedriver = require('chromedriver');

var SELENIUM_CONFIGURATION = {
    'start_process': true,
    'start_session': true,
    'server_path': seleniumServer.path,
    'host': '127.0.0.1',
    port: 4444
};

var CHROME_CONFIGURATION = {
    'browserName': 'chrome',
    'javascriptEnabled': true,
    'acceptSslCerts': true,
    'cli_args': {
        'webdriver.chrome.driver': chromedriver.path
    }
};

var DEFAULT_CONFIGURATION = {
    'launch_url': 'http://localhost',
    'selenium_port': 4444,
    'selenium_host': 'localhost',
    'desiredCapabilities': CHROME_CONFIGURATION
};

var ENVIRONMENTS = {
    'default': DEFAULT_CONFIGURATION
};

module.exports = {
    'src_folders': ['tests'],
    'page_objects_path': ['page'],
    'selenium': SELENIUM_CONFIGURATION,
    'test_settings': ENVIRONMENTS
};