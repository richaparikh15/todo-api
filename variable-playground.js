var person = {
    name: 'Richa',
    age: 33
}

function updatePerson(obj) {
    obj.age = 24
}

updatePerson(person);
console.log(person);

var grades = [25, 50]

function addGrade(grade){
    // grade.push(100)
    grade = [100]
}

addGrade(grades);
console.log(grades)