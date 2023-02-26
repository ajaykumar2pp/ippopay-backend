const Value = require('../model/value');
const logger = require('../../utils/logger')
function valueController() {
    return {
        myName(req, resp) {
            resp.send("My name is ajay kumar")
        },
         async getAllValues(req,resp){
            try {
                const data = await Value.find();
                logger.info(`Fetched all Previous from DB - ${data}`);
                resp.json(data);
              } catch (err) {
                logger.infor("Error: " + err.message);
                return resp.status(400).json({ message: err });
              }
        },
        async storeAllValues(req,resp){
            try {
                const { values, answers } = req.body;
                logger.info("Received values from Frontend");
                const valueObject = { values, answers };
            
                const value = await Value.create(valueObject);
            
                if (value) {
                  logger.info("Stored all Values to DB");
            
                  return resp.status(200).json({ message: `Value Stored` });
                } else {
                  return resp.status(400).json({ message: "Something Went wrong" });
                }
              } catch (err) {
                logger.infor("Error: " + err.message);
                return resp.status(400).json({ message: err });
              }
        }
    }
}

module.exports = valueController;