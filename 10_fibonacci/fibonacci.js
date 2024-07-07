const fibonacci = function(number) {
    if(parseInt(number)<0){
        return "OOPS";
    }
    let newNumber = parseInt(number);
    let original = [0,1];
    for(let i=1;i<newNumber;i++){
        original.   push(original[i]+original[i-1]);
    }
    return original[newNumber];

};

// Do not edit below this line
module.exports = fibonacci;
