var sentence = "I love learning software development";

for (var i=0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
        console.log(sentence[i]);
    }
}


// if (number % 2 == 0) numberIsEven
// if (number % 2 != 0) numberIsOdd

var n = 25;
var result = 0;


if (n % 2 === 0) {
    result = result + 10
}
else {
    result = result -n
}