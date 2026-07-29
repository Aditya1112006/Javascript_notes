const Student = {
    name : 'Aditya',
    rollno : 21,
    prop : this,
    marks:88,
    getName : function(){
        console.log(this);
        return this.name; // Student
    },
    getMarks : () => {
        console.log(this);
        return this.marks; // parent scope -> window
    },
    getInfo1 : function(){
        setTimeout( () => {
            console.log(this); // Student
        }, 2000);
    },
    getInfo2: function(){
        setTimeout( function(){ // Window
            console.log(this);
        },2000);
    }
}



console.log(Student.getName());
console.log(Student.getMarks());
console.log(Student.getInfo1());
console.log(Student.getInfo2());