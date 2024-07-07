const getTheTitles = function(items) {
    /*const titles = []
    for(let item in items){
       titles.push(items[item].title); 
    }
    return titles;*/
    // More elegant:
    return items.map((item) => item.title);

};

// Do not edit below this line
module.exports = getTheTitles;
