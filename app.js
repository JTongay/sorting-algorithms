require('locus');
console.log(process.env.NODE_ENV + "is the environment");

var algorithms = {
  bubbleSort: function(arr){
    var swapped;
    var temp;
    do {
        swapped = false;
        for (var i=0; i < arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
  },

  insertionSort: function(arr){
    var length = arr.length;
    var count = 0;
    console.log('booyah');
    for(var i = 1; i < length; ++i) {
      console.log(i, "i Index");
      var temp = arr[i];
      console.log(temp, "temp");
      for(var j = i - 1; j >= 0 && arr[j] > temp; --j) {
        console.log(j, "j Index");
        count++;
        arr[j+1] = arr[j];
      }
      if(process.env.NODE_ENV !== 'test'){
        eval(locus);
      }
      arr[j+1] = temp;
    }
    console.log(count, "times swapped");
  }
};

module.exports = algorithms

algorithms.insertionSort([6,3,8,2,6,9,0,3,4,7,2,2]);
