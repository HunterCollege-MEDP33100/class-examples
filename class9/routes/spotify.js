var express = require('express');
var router = express.Router();

const SPOTIFY_CLIENT_ID = '5b8bbf91e8f94816ae6d4e00b886cdec';
const SPOTIFY_CLIENT_SECRET = '66c645437e614798835af718dab2688a';

/* GET home page. */
router.get('/token', async function (req, res, next) {
    try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `grant_type=client_credentials&client_id=${SPOTIFY_CLIENT_ID}&client_secret=${SPOTIFY_CLIENT_SECRET}`
        });
        const data = await response.json();
        res.json(data);
    } catch(error) {
        console.log('error', error);
    }
});

module.exports = router;
