// A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.
//
// We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)
//
// The rules of Goat Latin are as follows:
//
// If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
// For example, the word 'apple' becomes 'applema'.
//
// If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
// For example, the word "goat" becomes "oatgma".
//
// Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
// For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
// Return the final sentence representing the conversion from S to Goat Latin.
//
//
//
// Example 1:
//
// Input: "I speak Goat Latin"
// Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
// Example 2:
//
// Input: "The quick brown fox jumped over the lazy dog"
// Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"

var toGoatLatin = function(S) {
  // array of vowels
  const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  // cached the character 'a'
  const aChar = 'a';
  // split the passed in string
  const splitStr = S.split(' ');

  // iterate over the split string
  const reformat = splitStr.map((item, index) => {
    // check if the current item in the array exists in the vowels array
    if(vowels.indexOf(item[0]) !== -1) {
      // if yes, then return the item concatinate the string 'ma' and add 'a' based on the position of its index
      return item + 'ma' + aChar.repeat(index + 1);
    } else {
      // if no, then cache the first character of the current item
      const firstChar = item[0];
      // use substring to get the word leaving out the first character
      const restOfWord = item.substring(1, item.length);
      // return the formatted word
      return restOfWord + firstChar + 'ma' + aChar.repeat(index + 1);
    }
  });

  // return the mapped array joined by a space
  return reformat.join(' ');

};

// returns "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
toGoatLatin("I speak Goat Latin");
