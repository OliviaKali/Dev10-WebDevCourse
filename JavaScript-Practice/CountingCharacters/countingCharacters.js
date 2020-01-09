//counting each character within the string
function countingCharacters (stringToCount) {
    console.log(stringToCount + " has " + stringToCount.length + " characters.")
}

var portalString = "The cake is a lie";

//looking for a specific character and
//counting how many times it appears in the string
function countingCharacters2 (stringToCount, characterToFind) {
    var characterCount = 0;
    for (var characterPosition = 0; 
        characterPosition < stringToCount.length;
        characterPosition++) {
            if (stringToCount[characterPosition] == characterToFind) {
                characterCount++;
            }
        }
        console.log("String to search in: " + stringToCount);
        console.log("Character to find " + characterToFind);
        console.log("Number of times the character appears: " + characterCount);
}

//looking for a series of characters within a string
//and counting how many times it appears in the string
function countingCharacters3 (str, search) {
    var count = 0;
    var numChars = search.length;
    var lastIndex = str.length - numChars;

    for (var index = 0; index <= lastIndex; index++) {
        var current = str.substring(index, index + numChars);
        if (current == search) {
            count++;
        }
    }
    return count;
    // console.log("String to search in: " + str);
    // console.log("Character to find: " + search);
    // console.log("Number of times the character appears: " + count);
}