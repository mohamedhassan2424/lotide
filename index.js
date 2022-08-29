const head   = require('./head');
const tail   = require('./tail');
const assertArrayEqual=require('../assertArrayEqual');
const eqArrays=require('../eqArrays');
const countLetters = require('./countLetters ');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const findKey= require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map');
const assertEqual=require('../assertEqual');
const takeUntil = require('./takeUntil');
const without = require('./without');
const middle = require('./middle');
const middle = require('./middle');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle
  assertArrayEqual:assertArrayEqual,
  eqArrays : eqArrays,
  countLetters : countLetters ,
  countOnly : countOnly,
  eqObjects : eqObjects ,
  findKey : findKey,
  findKeyByValue : findKeyByValue,
  letterPositions : letterPositions,
  map : map,
  assertEqual :assertEqual,
  takeUntil : takeUntil,
  without : without
};