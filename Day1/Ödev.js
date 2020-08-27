// Ödev - 1 

// const names = [1, 2, 3, 3, 3, 4 , 4, 5];

// let unique = [...new Set(names)];
// console.log(unique);


// Ödev - 2 
// const myBody = document.body
// const newButton = document.createElement("BUTTON");

// newButton.innerHTML = "Press Me"

// myBody.appendChild(newButton)


// newButton.addEventListener("click", run);
// function run(e){
    
//     console.log(e.type);
//     const newDiv = document.createElement("div")
//     const newButton = document.createElement("BUTTON");
    
//     newButton.innerHTML = "Press Me"
//     myBody.appendChild(newDiv)
//     myBody.appendChild(newButton)
    
// }


// Ödev - 3 

// function isPerfectNumber(){
//     var myNumber = prompt("Give me your favourite number?");
//     const divisors = []
    
//     for(let div_num = 1; div_num < myNumber; div_num++){
//         if (myNumber % div_num == 0){
//             divisors.push(div_num);
//             }
//         }
        
//     total = divisors.reduce((a, b) => a + b, 0);
    
//     if(myNumber == total){
//         alert("It is a perfect number!");
//     }
//     else if(myNumber !== total){
//         alert("It is not a perfect number!");
//     }

// }
// isPerfectNumber();

// Ödev - 4 

// function fibonacci(){
//     var myNumber = prompt("Which fibonacci number do you want darling?");
//     myNumber = myNumber - 1;
    
//     const fibo = [1,1];
//     if(myNumber >= 3){
//         for(let i = 2; i <= myNumber;i++){
//             fibo.push(fibo[i-2]+fibo[i-1]);
//         }
//     }

//     alert(fibo[myNumber])
//     return fibo[myNumber]
// }

// fibonacci();

// 1 1 2 3 5 8 13