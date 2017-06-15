const mocha = require('mocha');
const chai = require('chai');
const expect = require('chai').expect;

module.exports = {

    'Home Page': function(browser) {
        ///console.log(client)
        browser
            .url('http://abc.net.au')
            .assert.containsText('.news>a', 'NEWS')
            .assert.containsText('.iview>a', 'iview')
            .assert.containsText('.tv>a', 'TV')
            .assert.containsText('.radio>a', 'RADIO')
            .assert.containsText('.shop>a', 'SHOP')
            .assert.containsText('.more>a', 'MORE…')
            .end();
    },


    'News Page': function(browser) {
        browser
            .url('http://abc.net.au')
            .click('.news>a')
            .assert.containsText('#n-justin>a', 'Just In')
            .assert.containsText('#n-australia>a', 'Australia')
            .assert.containsText('#n-world>a', 'World')
            .assert.containsText('#n-donald-trumps-america>a', 'Trump\'s America')
            .assert.containsText('#n-business>a', 'Business')
            .assert.containsText('#n-sport>a', 'Sport')
            .assert.containsText('#n-arts-culture>a', 'Arts')
            .assert.containsText('#n-analysis-and-opinion>a', 'Analysis & Opinion')
            .assert.containsText('#n-programs>a', 'Programs')
            .assert.containsText('#n-more>a', 'More')
            .end();
    },

    'Sites icon': (browser) => {
        browser
            .useXpath()
            .url('http://abc.net.au')
            .click('//*[@id=\'nav\']/ul/li[1]/a')
            .assert.elementPresent('//*[@id=\'abcHeader\']/div[1]/a')
            .waitForElementVisible('.//*[@id=\'abcHeader\']/div[1]/a', 2000)
            .click('//*[@id=\'abcHeader\']/div[1]/a')
            .pause(1000)
            // .assert.containsText("//*[@id='abcNavSites']/ul/li[1]/a", 'ABC HOME')
            // .assert.containsText("//*[@id='abcNavSites']/ul/li[2]/a", 'NEWS')

        var expected = {
            1: 'ABC HOME',
            2: 'NEWS',
            3: 'IVIEW',
            4: 'TV',
            5: 'RADIO',
            6: 'KIDS',
            7: 'SHOP',
            8: 'MORE'
        }

        // Object.keys(expected).map(key => {
        //     browser.assert.containsText("//*[@id='abcNavSites']/ul/li[" + key + "]/a", expected[key])
        // })

        for (var key in expected) {
            if (expected.hasOwnProperty(key)) {
                browser.assert.containsText("//*[@id='abcNavSites']/ul/li[" + key + "]/a", expected[key])
                    //console.log(key + ' -> ' + expected[key]);
            }
        }
        browser.end();
    }
};


function getNumberOfItems(browser) {
    browser
        .elements('xpath', '//*[@id=\'abcHeader\']/div[1]/a/img', function(allValues) {
            allValues.value.forEach(function(myval) {
                console.log('Element value is ', myval.ELEMENT);
            })
        })

}