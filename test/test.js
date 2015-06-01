'use strict';

var assert = require('assert');
var bEM = require('./../index');

describe('Insert underscores', function(){
  it('Should replace — with double underscores', function(){
    assert.equal(bEM('block—element'), 'block__element');
  })
})

describe('Insert dashes', function(){
  it('Should replace – with double dashes', function(){
    assert.equal(bEM('element–modifier'), 'element--modifier');
  })
})
