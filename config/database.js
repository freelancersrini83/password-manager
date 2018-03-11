var crypto = require('crypto').randomBytes(256).toString();

module.exports = {
    
    uri:'mongodb://localhost:27017/accounts' ,
    secret: crypto,
    
};