// 1 byte = 8 bits.
var buffer = new ArrayBuffer(/*byteLength:*/ 8);
// we can store on the buffer/array two 32bit numbers.
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;

// it doesn't throw exception, but array have 2 places only, so this code doesn't work.
//view[2] = 30;
console.log(view);
console.log(buffer);
