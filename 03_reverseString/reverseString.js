const reverseString = function(strin) {
    const array = strin.split("");
    let finalString = "";
    for (i=array.length - 1; i>=0; i--) {
        finalString = finalString + array[i];
    }
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
