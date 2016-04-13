import './chai';
import * as log from './log';

/* global describe, it, expect, beforeEach, afterEach */
describe('Test log module', () => {
  describe('log function', () => {
    expect(() => log.log('hello', 'there', { a: 'dood' })).not.to.throw(Error);
  });
});
