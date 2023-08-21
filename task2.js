// const firstNum = 2;
// let secondNum = 4;


// const fun = (a, b) => {
//     console.log(a * b);
// }

// fun(firstNum,secondNum);

// const student = {
//     name: 'Varma',
//     age: 24,
//     university: 'Centurion University',
//     details: function() {
//         console.log('Hi, this is ' + this.name+', completed my graduation in '+ this.university)
//     }
// }
// student.details();

const fun = async() => {
    console.log('a');
    console.log('b')
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('c');
            resolve();
        })
    })
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('d')
            resolve()
        })
    })
    console.log('e')
}
fun();

