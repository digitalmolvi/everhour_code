const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/Everhour")
        .then((res) => console.log("success"))
        .catch((e)=>console.log(e))
        ;
};

module.exports = connect;   
