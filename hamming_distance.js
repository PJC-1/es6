// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
//
// Given two integers x and y, calculate the Hamming distance.
//
// Note:
// 0 ≤ x, y < 231.
//
// Example:
//
// Input: x = 1, y = 4
//
// Output: 2
//
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
//
// The above arrows point to positions where the corresponding bits are different.
var hammingDistance = function(x, y) {
  // cache x and y as bits, by using Number.prototype.toString()
  // and passing toString the argument 2 (to convert number to bits).
  let bitsX = (x).toString(2);
	let bitsY = (y).toString(2);
	// 32bit all zeros to start
	let defaultBits = '00000000000000000000000000000000';
	// format 32bit string
	bitsX = defaultBits.substr(0, defaultBits.length - bitsX.length) + bitsX;
	bitsY = defaultBits.substr(0, defaultBits.length - bitsY.length) + bitsY;

	// use filter to compare the bits and return a new array of bits that diff
	const diffBits = bitsX.split('').filter((bit, index, arr) => {
    // check if bit from bitX matches bitY, if they do not match return the bit
    // it doesn't matter if we return the bit from bitX or bitY, because the function
    // will only return the number different bits.
    if(arr[index] != bitsY[index]) {
			return bit;
		}
	});
	// return the length of diffBits array
	return diffBits.length;
};
// returns 2
hammingDistance(1, 4);
