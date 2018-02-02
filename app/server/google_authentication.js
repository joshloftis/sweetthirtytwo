const express = require("express");
const router = express();
const axios = require("axios");
require("dotenv").config();



router.get("/signin", (req, res) => {
    const google_url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=980881049225-igpfubgd5l6d325ika1c3lnkp4ehalgv.apps.googleusercontent.com&redirect_uri=http://localhost:4000/google/suite32&scope=https://www.googleapis.com/auth/calendar&access_type=offline&response_type=code`;
    res.redirect(google_url);
});



// Might need to refactor or put in the different file
// and bring it over here.
router.get("/suite32", (req, res) => {

    const code = req.param("code");
    axios({
        url: `https://www.googleapis.com/oauth2/v4/token?code=${code}&client_id=980881049225-igpfubgd5l6d325ika1c3lnkp4ehalgv.apps.googleusercontent.com&client_secret=${process.env.CLIENT_SECRET}&redirect_uri=http://localhost:4000/google/suite32&grant_type=authorization_code`,
        method: "POST"
    })
        .then((response) => {
        	// TOKEN
        	// response.data.access_token    # token
            console.log("Response: ", response.data);
            res.redirect("http://localhost:3000");
            // res.json({ msg: response.data });

        })
        .catch((err) => {
            console.log("Error: ", err.response.data);
            res.json({ error: "Error" });

        });
});


module.exports = router;