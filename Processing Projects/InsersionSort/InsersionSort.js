let B = [];

function setup() {
  console.log(insersionSort([6, 2, 13, 14, 9, 17, 19, 11]).toString());
}

function draw() {
}

function insersionSort(A) {
  test = A.length;
  for (let j = 1; j < test ; j++) {
    let myKey = A[j];
    let i = j - 1;
    while(i >= 0 && A[i] > myKey) {
      A[i + 1] = A[i];
      i = i - 1; 
    }
    A[i + 1] = myKey;
  }
  return A;
}
