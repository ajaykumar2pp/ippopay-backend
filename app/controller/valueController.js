const Value = require('../model/value');
const logger = require('../../utils/logger')
function valueController() {
    return {
        myName(req, resp) {
            resp.send("My name is ajay kumar")
        },
        getAllValues(req,resp){

        },
        storeAllValues(req,resp){

        }
    }
}

module.exports = valueController;