const {test} = require('@playwright/test')
const fs = require('fs')
const path = require('path')

module.exports = async () => {
    // set up code 
    
    if (fs.existsSync('testlogs.log')) {
        fs.unlink('testlogs.log', (err) => {
            if (err) {
                console.error('Error deleting a file: ',err)
                return;
            }
            console.log(`log file deleted`)
        })
    } else {
        console.log('log file does not exist')
    }
}