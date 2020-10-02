const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.players.renderIndex);
router.get('/signup', ctrl.players.renderSignUp);
router.get('/profile/:index', ctrl.players.renderProfile);
router.get('/login', ctrl.players.renderLogin);

router.post('/login', ctrl.players.loginAction);
router.post('/signup', ctrl.players.createPlayer);

router.put('/profile/:index', ctrl.players.editProfile);

router.delete('/profile/:index', ctrl.players.deletePlayer);

module.exports = router;