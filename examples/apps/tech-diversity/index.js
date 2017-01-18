'use strict';
module.change_code = 1;
var _ = require('lodash');
var Alexa = require('alexa-app');
var app = new Alexa.app('techdiversity');
var FactHelper = require('./fact_helper');

app.launch(function(req, res) {
  var prompt = 'To learn more about diversity in the tech industry, ask me for a fact.';
  res.say(prompt).reprompt(prompt).shouldEndSession(false);
});

app.intent('techdiversity', {
  'utterances': ['{|tell|give} {|me|us|him|her|them|it} {|a|some} {-|information|something|trivia|fact}']
},
  function(req, res) {
    //get the slot
    // var airportCode = req.slot('AIRPORTCODE');
    // var reprompt = 'To learn more about diversity in the tech industry, ask me for a fact.';
    // if (_.isEmpty(airportCode)) {
    //   var prompt = 'I didn\'t hear an airport code. Tell me an airport code.';
    //   res.say(prompt).reprompt(reprompt).shouldEndSession(false);
    //   return true;
    // }
    // else {
      var factHelper = new FactHelper();
      factHelper.requestFact().then(function(response) {
        res.say(response).send();
      }).catch(function(err) {
        console.log(err.statusCode);
        var prompt = 'I didn\'t understand that fact request. Please ask me for another fact';
         //https://github.com/matt-kruse/alexa-app/blob/master/index.js#L171
        res.say(prompt).reprompt(prompt).shouldEndSession(false).send();
      });
      return false;
    // }
  }
);

//hack to support custom utterances in utterance expansion string
console.log(app.utterances().replace(/\{\-\|/g, '{'));
module.exports = app;
