// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.
//
// given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cba" can be written as "-.-..--...", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.
//
// Return the number of different transformations among all words we have.
//
// Example:
// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation:
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
//
// There are 2 different transformations, "--...-." and "--...--.".
var uniqueMorseRepresentations = function(words) {
  // alphabet in morse code
  const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  // letters of the alphabet stored in a variable as a string
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  // split string into an array of the letters
  const alphaArr = alphabet.split("");
  // emty object that will contain the letter to morse code mapping
  let obj = {};
  // empty object that will be used to store the converted morse code and the number of times we see that sequence
	let morseMap = {};
  // a counter which will be returned at the end of the function
	let result = 0;

  // iterate over the array of letters and map them to the corresponding index in the morse code array
	alphaArr.forEach((letter, index) => {
		obj[letter] = morse[index];
	});

  // helper function that will convert the word into morse code
	function convertToMorse(word) {
    // storage arrary to hold the converted morse code
    const arr = [];
    // split the passed in word into an array of characters
		const splitWord = word.split("");
    // iterate through the array of characters
		for(let letter of splitWord) {
      // set storage variable to the morse code
			let morse = obj[letter];
      // push the morse code character into the storage array
			arr.push(morse);
		}
    //return the array converted back into a string
		return arr.join("");
	}

  // iterate over the passed in words array
	words.forEach(word => {
    // get morse code for each word
		let morseWord = convertToMorse(word);
    // check the morseMap object to see if it contains that word, if yes then increment, if no then set the key and value to 1
		morseMap.hasOwnProperty(morseWord) ? morseMap[morseWord] += 1 : morseMap[morseWord] = 1;
	});

  // loop through the object
	for(let item in morseMap) {
    // increment result counter by 1
    result++;
	}

  // return the result counter because is the total number of unique words passed into the function
	return result;
};

// returns 3
uniqueMorseRepresentations(["a", "aa", "aaa", "a", "a"]);
