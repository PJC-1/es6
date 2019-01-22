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

    words.sort()

    const wordSet = new Set(words)

    let result = ''

    for (let word of words) {
        let isValid = true;
        let key = '';

        for (let i = 0; i < word.length - 1; i++) {
            key += word[i];
            if (!wordSet.has(key)) {
                isValid = false;
                break;
            }
        }

        if (isValid && word.length > result.length) {
            result = word;
        }
    }

    return result;
};

// Output: "world"
longestWord(["w","wo","wor","worl", "world"]);
// Output: "apple"
longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"]);
