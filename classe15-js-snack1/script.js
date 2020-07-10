
function reverseStr() {

  var str = "str";
  var rev = "";
  for (var i=str.length-1;i>=0;i--) {
    rev += str[i];
  }

  console.log('str', str);
  console.log('rev', rev);
}
function combArray() {

  var size = 3;
  var arr1 = [1, 2, 3];
  var arr2 = ['a', 'b', 'c'];
  var arrRes = [];

  for (var i=0;i<size;i++) {
    arrRes.push(arr1[i]);
    arrRes.push(arr2[i]);
  }

  console.log(arrRes);
}
function subArr() {

  function getSubArr(arr, start, end) {

    var res = [];

    for (var i=start;i<=end;i++) {
      res.push(arr[i]);
    }

    return res;
  }

  var arr = [1, 2, 3, 4, 5, 6];
  var subArr = getSubArr(arr, 1, 3);

  console.log(subArr);
}

//Scrivi una funzione che fonda due array prendendo alternativamente gli elementi da uno e dall’altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
function combineArrays() {

  var size = 3;
  var arr1 = [1, 222, 3];
  var arr2 = ['a', 'ccc', 'c'];

  var arrRes = [];

  for (var i=0;i<size;i++) {

    arrRes.push(arr1[i]);
    arrRes.push(arr2[i]);
  }

  console.log(arrRes);
}

// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

function printLongestWord() {

  var word1 = prompt('give me first word');
  var word2 = prompt('give me second word');

  var lng1 = word1.length;
  var lng2 = word2.length;

  if (lng1 === lng2) {

    console.log('both length are ' + lng1);
    console.log('word1: ', word1);
    console.log('word2: ', word2);
  } else {

    if (lng1 > lng2) {

      console.log('longest word is', word1);
    } else {

      console.log('longest word is', word2);
    }
  }
}

function init() {

    // combineArrays();
    printLongestWord();
}

$(document).ready(init);
