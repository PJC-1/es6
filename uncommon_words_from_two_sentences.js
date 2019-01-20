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
    // emtpy array used to store the final results
    var result = [];

    // split the string arguments into arrays
    var splitA = A.split(' ');
    var splitB = B.split(' ');

    // concatinate the two arrays
    var concatAB = splitA.concat(splitB);

    // iterate over the concatinated array of words
    // if the iterated word doesn't exists in the map then set the word as the key and set the value to 1
    // else increment the existing word key's value by 1
    concatAB.forEach(word => !map.hasOwnProperty(word) ? map[word] = 1 : map[word] += 1);

    // iterate over the map
    for(key in map) {
        // for each key, if the value equals 1, then the key is considered "uncommon" by definition of the problem description
        if(map[key] === 1) {
            // add the key to the result array
            result.push(key);
        }
    }

    // return the result array
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
