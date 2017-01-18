'use strict';
var _ = require('lodash');

function FactHelper() {}

FactHelper.prototype.facts = [
  "This is test fact one", 
  "This is test fact two", 
  "This is test fact three", 
  "This is test fact four", 
  "This is test fact five", 
  "This is test fact six", 
];

FactHelper.prototype.requestFact = function() {
  return this.getFact();
};

FactHelper.prototype.getFact = function() {
  var factArr = this.facts;
  var factIndex = Math.floor(Math.random() * factArr.length);
  var randomFact = factArr[factIndex];
  return randomFact;
};

module.exports = FactHelper;
