module.exports = {
    url: 'http://abc.net.au',
    sections: {
        header: {
            selector: '//*[@id=\'header\']',
            locateStrategy: 'xpath',
            elements: {
                searchBar: {
                    selector: '//*[@id=\'searchQuery\']',
                    locateStrategy: 'xpath'
                },
                submit: {
                    selector: '//*[@id=\'search\']/input[2]',
                    locateStrategy: 'xpath'
                }
            }
        }
    }
};