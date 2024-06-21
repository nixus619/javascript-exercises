const repeatString = function(string, num) {
    if(num==0){
        return "";
    } else if (num<0) {
        return "ERROR";
    } else {
        let final = string;
        for(let i = 1;i<num;i++) {
            final = final + string;
        }
        return final;
    }
};

// Do not edit below this line
module.exports = repeatString;
