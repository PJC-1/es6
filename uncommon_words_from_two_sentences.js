// We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)
//
// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
//
// Return a list of all uncommon words.
//
// You may return the list in any order.
//
//
//
// Example 1:
//
// Input: A = "this apple is sweet", B = "this apple is sour"
// Output: ["sweet","sour"]
// Example 2:
//
// Input: A = "apple apple", B = "banana"
// Output: ["banana"]
//

var uncommonFromSentences = function(A, B) {
    var map = {};
    var result = [];

    var splitA = A.split(' ');
    var splitB = B.split(' ');

    splitA.forEach(function(word) {
      if(!map.hasOwnProperty(word)) {
        map[word] = 1;
      } else {
        map[word] += 1;
      }
    });

    splitB.forEach(function(word) {
      if(!map.hasOwnProperty(word)) {
        map[word] = 1;
      } else {
        map[word] += 1;
      }
    });

    for(key in map) {
      if(map[key] === 1) {
        result.push(key);
      }
    }

    return result;

};

var A1 = "this apple is sweet";
var B1 = "this apple is sour";
//Output: ["sweet","sour"]
uncommonFromSentences(A1, B1);

var A2 = "apple apple";
var B2 = "banana";
//Output: ["banana"]
uncommonFromSentences(A2, B2);
