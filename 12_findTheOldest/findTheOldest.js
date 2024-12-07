function getAge(birth,death) {
    if(!death) {
        death = new Date().getFullYear();
        return death - birth;
    }
    else return death-birth;
}

const findTheOldest = function(people) {
    Oldest = people.reduce((oldest, current)=> {
        let oldest1 = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let current1 = getAge(current.yearOfBirth, current.yearOfDeath);
        return oldest1>current1?oldest:current;
    })
    return  Oldest;
    
};

// Do not edit below this line
module.exports = findTheOldest;
