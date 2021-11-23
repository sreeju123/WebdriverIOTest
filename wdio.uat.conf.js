// Merge parent conf object + new changes in uat conf  

const merge = require('deepmerge')
const wdioConf = require('./wdio.conf.js')

exports.config = merge(wdioConf.config, {

    baseUrl: 'https://www.rahulshettyacademy.com',

    waitforTimeout: 5000,
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        grep:'Sanity'
    }

})