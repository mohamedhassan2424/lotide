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
  assertArrayEqual,
  eqArrays ,
  countLetters ,
  countOnly ,
  eqObjects  ,
  findKey ,
  findKeyByValue ,
  letterPositions ,
  map ,
  assertEqual ,
  takeUntil ,
  without
};