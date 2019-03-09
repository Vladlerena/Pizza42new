var QSTester = require("auth0-quickstarts-tester");

//Change the values below to match an existing database user on the Test Client
var testParameters = {
    url: "https://vladlerena.herokuapp.com/",
    user: "vllerena@cisco.com",
    password: "Lovecraft1+"
  };
new QSTester().runOnPath(".", testParameters)
  .then(() => process.exit());
