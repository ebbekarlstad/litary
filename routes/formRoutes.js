const express = require('express');
const formController = require('../controllers/formController');

const router = express.Router();

router.get('/discussion', formController.form_index);

router.post('/form_action', formController.form_create_post);

router.get('/viewpost/:id', formController.form_details);

router.get('/create', formController.form_create_get);

module.exports = router;