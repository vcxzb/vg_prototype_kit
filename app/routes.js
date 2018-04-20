var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

router.post('/vin-answer', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var vinqs = req.session.data['vin-qs']

  // Check whether the variable matches a condition
  if (vinqs == "Yes"){
    // Send user to next page
    res.redirect('/register-for-vin0')
  }
  else {
    // Send user to ineligible page
    res.redirect('/ineligible')
  }

})

// add your routes here

router.post('/vin-answer2', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var vinqs = req.session.data['vin-qs']

  // Check whether the variable matches a condition
  if (vinqs == "Under 5 years"){
    // Send user to next page
    res.redirect('/vin-expiry')
  }
  else {
    // Send user to ineligible page
    res.redirect('/ineligible')
  }

})

module.exports = router
