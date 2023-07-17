const express = require('express');
const router = express.Router();

const pitch_Controller = require('../controller/pitches_controller');
router.post('/pitches',pitch_Controller.newPitch);
router.post('/pitches/:id/makeOffer',pitch_Controller.newInvestor);
router.get('/pitches',pitch_Controller.allPitches);
router.get('/pitches/:id',pitch_Controller.oneSpecificPitch)
module.exports = router;