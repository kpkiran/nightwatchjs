//var HomePage = require('./../page/HomePage.js');

module.exports = {
    'Test': function(client) {
        var homePage = client.page.HomePage();
        homePage.navigate();
        homePage.expect.section('@header').to.be.visible;

        var headerSection = homePage.section.header;
        headerSection.expect.element('@searchBar').to.be.visible;

        client.end();
    },

    'Test Search': function(client) {
        var homePage = client.page.HomePage();
        var headerSection = homePage.section.header;
        homePage.navigate()
            .assert.title('ABC - Australian Broadcasting Corporation')
        headerSection.setValue('@searchBar', 'iview')
        headerSection.click('@submit');

        client.end();
    },

    'Links in page': function(client) {
        // var homePage = client.page.HomePage();
        // homePage.navigate();

        client.elements('css selector', 'a', function(links) {
            links.value.forEach(function(element, i) {
                client.elementIdAttribute(element.ELEMENT, 'href', function(result) {})
            });
        });
        client.end();
    }
}