const expect = require('expect');
const utils = require('./utils');


//////////////////////
//////////////////////
//////////////////////
describe('Utils', () => {

  describe('#Add', () => {
    // test add function
    it('should add two numbers', () => {
      let res = utils.add(5, 10);

      expect(res).toBe(15).toBeA('number');
      // if(res !== 15) {
      //   throw new Error(`Expected 15. But, got ${res}!`);
      // }
    });

    // testing asynchronous assertions
    it('sould add numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBeA('number').toBe(7);
        done();
      });
    });
  });

  describe('#Square', () => {
    // test square function
    it('should multiple a number by itself', () => {
      let res = utils.square(2);

      expect(res).toBe(4).toBeA('number');
      // if(res != 4) {
      //   throw new Error('It did not work');
      // }
    });

    it('multiply by itself', (done) => {
      utils.asyncSquare(2, (sqr) => {
        expect(sqr).toBeA('number').toBe(4);
        done();
      });
    });
  });
  });

//////////////////////
//////////////////////
//////////////////////
it('should set firstName and lastName', () => {
  let user = {
    location: 'Austin',
    age: 26
  };
  let res = utils.setName(user, 'Anderson Cardoso');

  expect(user).toEqual(res);
  expect(res).toBeA('object').toInclude({
    firstName: 'Anderson',
    lastName: 'Cardoso'
  });
});

//////////////////////
//////////////////////
//////////////////////
// Assertion examples
it('should test various assertion examples', () => {
  expect(666).toBe(666);
  expect({
    name: 'Anderson'
  }).toEqual({
    name: 'Anderson'
  }).toNotEqual({
    name: 'Other dude'
  });
  expect([1, 2, 3]).toInclude(2).toExclude(0);
  expect({
    name: 'Anderson',
    age: 26,
    location: 'Austin'
  }).toInclude({
    age: 26
  }).toExclude({
    location: 'Cidade Ocidental'
  });
});
