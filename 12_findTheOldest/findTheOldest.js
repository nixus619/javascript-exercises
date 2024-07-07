const findTheOldest = function(people) {
    let currentOldest = 0;
    let oldestPerson;
    let currentAge;
    const d = new Date()
    for(let person in people){
        if(people[person].yearOfDeath===undefined)
            {
                currentAge = d.getFullYear() - people[person].yearOfBirth;
            } else {
                currentAge = people[person].yearOfDeath - people[person].yearOfBirth;
            }
        if(currentAge > currentOldest){
            oldestPerson=people[person];
            currentOldest=currentAge
        }
    }
    return oldestPerson;
    /*const titles = []
    for(let item in items){
       titles.push(items[item].title); 
    }
    return titles;*/
    // More elegant:
    return items.map((item) => item.title);

};

// Do not edit below this line
module.exports = findTheOldest;
