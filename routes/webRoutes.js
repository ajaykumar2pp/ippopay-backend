const router = require('express').Router();

const valueController = require('../app/controller/valueController')

function initRoutes(app){
    app.get('/',valueController().myName)
    app.get('/all',valueController().getAllValues);
    app.post('/store',valueController().storeAllValues);
}

module.exports = initRoutes

// router.get("/",(req,resp)=> {
//     resp.send("My name is ajay kumar")
// })
// module.exports = router;