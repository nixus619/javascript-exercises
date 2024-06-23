const sumAll = function(num1,num2) {
    let sum=0;
    if(num1<0 || num2<0) {
        return "ERROR";
    }
    if(typeof(num1)!= 'number' || typeof(num2) != 'number'){
        return "ERROR";
    }
    if(num2>num1){
        while(num2!=num1){
            sum = sum + num2;
            num2--;
        }
        sum = sum + num1
    } else {
        while(num1!=num2){
            sum = sum + num1;
            num1--;
        }
        sum = sum + num2;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
