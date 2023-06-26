Describe: vowelFunction()

<!-- Test: "It recognizes a single vowel regardless of case"
Code: pigLatin("A");
Expected output: 1

Test: "It recognizes a single vowel."
Code: pigLatin("a");
Expected Output: 1 -->

<!-- Test: "It recognizes multiple vowels in a single word."
Code: pigLatin("cater");
Expected Output: 2 -->

<!-- Test: "It recognizes a single vowel in a word with multiple characters."
Code: pigLatin("cat");
Expected Output: 1 -->

Describe wayFunction() -->

<!-- Test: "It will add 'way' to the end of words that begin with a vowel."
Code: wayFunction("a");
Expected Output: "away" -->

Describe: consenants()
<!-- 
Test: "it will add 'ay' to the end of a words that start with a consenants"
Code: consenants("day");
Expected Output: "dayay"; -->

<!-- Test: "It will move all consecutive consenants to the end of words with one or more consenant and add 'ay'."
Code: consenants("process");
Expected: "odecay" -->

Describe: wordsQu()

<!-- Test: "It will move q, and u to the end of words that begin with 'qu' and add an ay to the end of the word"
Code: wordsQu("quick");
Expected: "ickquay" -->