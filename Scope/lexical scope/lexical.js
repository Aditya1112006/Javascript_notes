// lexical scope example

function outer() {
    let a = 10; // outer function scope

    function inner() {
        let b = 20; // inner function scope
        console.log(a + b); // can access variable 'a' from outer function
    }
    inner(); // call the inner function
}
outer(); // call the outer function

