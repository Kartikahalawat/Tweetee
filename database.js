const mongoose=require("mongoose");

class Database {

    constructor() {
        this.connect();
    }

    connect(){
        mongoose.connect("mongodb+srv://kartikahalawat01:Kartik01*@tweetee.z6uj2gl.mongodb.net/?retryWrites=true&w=majority")
        .then(() => {
            console.log("database connection successful");
        })
        .catch((err) => {
            console.log("database connection error " + err);
        })
    }
}

module.exports = new Database();