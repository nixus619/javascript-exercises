const palindromes = function (string) {
    let removePunc =  string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let removeSpaces = removePunc.replace(/\s/g, '');
    removeSpaces = removeSpaces.toLowerCase();
    console.log(removeSpaces);
    let array = removeSpaces.split("");
    let reverse = array.reverse();
    let finalStr = reverse.join("");
    if(removeSpaces === finalStr){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
