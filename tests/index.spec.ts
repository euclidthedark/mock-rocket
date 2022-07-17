import { expect } from 'chai';
import { printF } from '../src';

describe('index', function () {
  it('hello world', function () {
    const hello = 'Hello World'; 
    return expect(printF(hello)).to.be.eql(`${hello} made it`);
  });
});
