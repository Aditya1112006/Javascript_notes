let studentinfo = {
    aditya :{
        grade : 'B',
        place : 'Sirmaur'
    },
    pratham : {
        grade : 'A+',
        place : 'Hamirpur'
    },
    khushbu : {
        grade : 'A',
        place : 'Solan'
    },
    nabanita : {
        grade : 'A',
        place : 'Delhi'
    },
    riya : {
        grade : 'O',
        place : 'Patiala'
    }
}

console.log(studentinfo)

console.log(studentinfo.aditya)
console.log(studentinfo.aditya.place)

studentinfo.pratham.grade = 'C';

console.log(studentinfo.pratham.grade)
console.log(studentinfo.pratham)
console.log(studentinfo)