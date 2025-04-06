const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();
    let oldestPerson;
    let oldestAge = 0;

    people.forEach(person => {
        let age;

        if("yearOfDeath" in person){
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            age = currentYear - person.yearOfBirth;
        }

        if (oldestPerson === undefined || age > oldestAge) {
            oldestPerson = person;
            oldestAge = age;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
