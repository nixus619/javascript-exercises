const removeFromArray = function(array,...args) {
    args.forEach((arg) => {
        for(i=array.length-1;i>=0;i--) {
            if((arg===array[i])) {
                array.splice(i,1);
            }
        }
    });
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
