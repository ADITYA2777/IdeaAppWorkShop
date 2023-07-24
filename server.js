const express = require("express");
const configServer = require("./config/configserveruser.js");
const mongoose = require("mongoose");
const dbconfig = require("./config/db.config.js");
const userModel = require("./moduel/moduelUser.js");

const app = express();

/**
 * logic to connected to mongoose and create admin user
 * if u need to have the mongoose up and running in ypor local host
 */

mongoose.connect(dbconfig.DB_URL);
const db = mongoose.connection;

db.on("Error", () => {
  console.log("ERROR while connecting to db");
});
db.once("open", () => {
  console.log("db is successfully connected");

  init();
});

async function init() {

    /**
     * check if the admin user is already present 
     */

    let admin = await userModel.findOne({
        userID: "admin"
    })
    if (admin) {
        console.log("admin user is already present");
        return;
    }

   admin = await userModel.create({
    name: "adityajain",
    userID: "admin",
    email: "aditya@qqq",
    userType: "ADMIN",
    password: "welcome1",
  });
console.log(admin);

}

app.listen(configServer.PORT, () => {
  console.log(
    `server starte on the port number localhost:${configServer.PORT}`
  );
});
