var expect = require('chai').expect
var sort = require('../app');

describe('Bubble Sort', function () {
 it('Should sort the array', function () {

   var testing = [3,5,7,6,8,4,9,45];
   sort.bubbleSort(testing);
   var result = [3,4,5,6,7,8,9,45];
   expect(testing).to.deep.equal(result)

 })

 it('Should sort the array with duplicates', function () {

   var testing = [3,5,9,7,6,7,8,4,9,45];
   sort.bubbleSort(testing);
   var result = [3,4,5,6,7,7,8,9,9,45];
   expect(testing).to.deep.equal(result)

 })

})

describe('Insertion Sort', function () {
  describe('Array no dupes', function () {

    it('Should sort the array', function () {

      var testing = [3,5,9,10,11,23,13];
      sort.insertionSort(testing);
      var result = [3,5,9,10,11,13,23];

      expect(testing).to.deep.equal(result)

    })

  })
  describe('Array with dupes', function () {
    it('Should sort the array with duplicates', function () {

      var testing = [3,5,9,7,6,7,8,4,9,45];
      sort.bubbleSort(testing);
      var result = [3,4,5,6,7,7,8,9,9,45];
      expect(testing).to.deep.equal(result)

    })
   })


describe('Almost Sorted', function () {

   it('Should sort the almost sorted array at the end', function () {

     var testing = [3,5,9,10,11,23,13];
     sort.bubbleSort(testing);
     var result = [3,5,9,10,11,13,23];
     expect(testing).to.deep.equal(result)

   })
 })

 describe('Almost Sorted The Sequal', function () {

    it('Should sort the almost sorted array at the beginning', function () {

      var testing = [5,3,9,10,11,23,13];
      sort.bubbleSort(testing);
      var result = [3,5,9,10,11,13,23];
      expect(testing).to.deep.equal(result)

    })
  })

})
