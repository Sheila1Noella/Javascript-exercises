const student = {
    name: 'Sheila',
    age: 23,
    isActive: true
}
//convert this object into a string to be stored in a local storage
const studentObjToString = JSON.stringify(student)
console.log(typeof studentObjToString);
//localStorage.setItem('student', studentObjToString)

//convert into JSON 
const toJSONStudent = JSON.parse(studentObjToString) 
console.log(typeof toJSONStudent);
console.log(toJSONStudent.age);