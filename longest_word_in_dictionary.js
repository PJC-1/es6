// Given a list of strings words representing an English Dictionary, find the longest word in words that can be built one character at a time by other words in words. If there is more than one possible answer, return the longest word with the smallest lexicographical order.
//
// If there is no answer, return the empty string.
// Example 1:
// Input:
// words = ["w","wo","wor","worl", "world"]
// Output: "world"
// Explanation:
// The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
// Example 2:
// Input:
// words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
// Output: "apple"
// Explanation:
// Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".

var longestWord = function(words) {
    // sort the passed in words array
    words.sort()

    // creating a set of the words array using the built in javascript Set data structure
    const wordSet = new Set(words)
    // storage variable
    let result = ''

    // iterate over the words array
    for (let word of words) {
        // boolean value to use for logic check
        let isValid = true;
        // an empty string that will store/build the word that will be used to check against the words Set
        let key = '';

        // nested loop to iterate over the word's characters
        for (let i = 0; i < word.length - 1; i++) {
            // add the current iterated character to the key storage string
            key += word[i];
            // check if the key string doesn't exists in the words Set
            if (!wordSet.has(key)) {
                // if true then set the boolean variable to false
                isValid = false;
                // and break out of the for-loop
                break;
            }
        }

        // check if boolean variable is true,
        // and the current iterated word's length is larger than the result string
        if (isValid && word.length > result.length) {
            // if condition is true, then set result to the current iterated word
            result = word;
        }
    }

    // after the initial loop has completed, return result
    return result;
};

// Output: "world"
longestWord(["w","wo","wor","worl", "world"]);
// Output: "apple"
longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"]);
