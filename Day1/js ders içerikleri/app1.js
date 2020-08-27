// let value;
// let arr = [1,2,3,4,5];

// console.log(arr[1]);
// value = arr[arr.length - 1];

// console.log(value)

// let value = "St"
// let value2 = 1
// value = true;
// let value;
// const arr = [1,2,3,4,"String",null,undefined];

// console.log(arr);

// arr.push("String");
// arr.push(null);

// arr.unshift(12);
// arr.shift();
// arr.pop();
// arr.pop();

// arr.splice(0, 4);

// arr.reverse();
// let value;
// let arr2 = [102, 1, 3, 98, 56, 982, 287];
// arr2.sort();

// value = arr2.sort(function(x,y){
//     return x-y;
// })
// value = arr2.sort(function(x,y){
//     return y-x;
// })

// console.log(value);

// let a = null;
// console.log(a);

// console.log(typeof a);

// let a = 12;
// let b;

// console.log(b);

// b=3.14;

// console.log(b);

// const c = "String";

// console.log(c);

// console.log(typeof true);
// console.log(typeof 1);
// console.log(typeof 3.13);
// console.log(typeof "true");
// console.log(typeof undefined);

// let a = true;
// let b = false;

// console.log(a);
// console.log(b);


// let value = true;
// console.log(typeof value);
// value = String(value);

// console.log(value)
// console.log(typeof value);

// let variable = "12";
// variable = Number(variable);
// console.log(typeof variable);

// let bool = "true";
// let a = bool.charAt(2);
// let b = bool[1];

// // bool = Boolean(bool);

// console.log(b);

// let b; 

// b = c = d = 2 + 2;



// b = b + 1;
// b++;
// b--;
// b = b - 1;

// console.log(b);

// let date = new Date();
// console.log(date);

// let tarih = new Date("2017-01-26")
// let tarih2 = new Date("03/25/2015");
// let tarih3 = new Date("2015-03-25T14:23:23Z");

// console.log(tarih.getFullYear());
// console.log(tarih.getMonth());
// console.log(tarih.getDate());
// console.log(tarih.getHours());
// console.log(tarih.getMinutes());
// console.log(tarih.getSeconds());
// console.log(tarih.getMilliseconds());

// tarih.setFullYear(2021)
// tarih.setMonth(11);
// tarih.setDate(12);
// console.log(tarih);

// console.log(tarih3);

// ==
// ===
// !=
// !==
// <
// >
// >=
// <=

// console.log("js" === "javascript");
// console.log(2 == "2");
// console.log(2 === "2");
// console.log(true == 1)
// // console.log(2 == true);
// console.log(false == 0)
// console.log(false === 0)
// console.log(false == "0");

// console.log(4 < 2);
// console.log( 2 >= 2);


// alert("Merhaba");
// alert(1);
// alert(true);

// console.log("String");

// let age = prompt("Kaç yaşındasın?");

// console.log(age);

// let value = confirm("Eğitim güzel mi?")

// console.log(value);

// if(true){

// }

// if(process == 1){
//     console.log("İşlem 1 gerçekleşti.");
// }else if(process == 2){
//     console.log("İşlem 2 gerçekleşti.");
// }else if(process == 3){
//     console.log("İşlem 3 gerçekleşti.");
// }else{
//     console.log("Hiçbir işlem gerçekleşmedi.");
// }

// let process = 5;

// switch(process){
//     case 1:
//         console.log("İşlem 1 gerçekleşti."); 
//         break;       
//     case 2:
//         console.log("İşlem 2 gerçekleşti.");
//         break;
//     case 3:
//         console.log("İşlem 3 gerçekleşti.");
//         break;
//     default:
//         console.log("İşlem gerçekleşmedi.");        
// }

//While
// let i = 0;

// while(i < -1){
//     console.log(i);
//     i++;
// }


// do{
//     console.log(i);
//     i++;
// }while(i<-1);

// for(let i = 0; i < 3; i++){
//     console.log(i);
// }


// let arr = ["Java", "Javascript", "C#"];

// // arr.forEach(element => {
// //     console.log(element);
// // })

// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// let sayi = Number(prompt("Bir sayı giriniz?"));
// let kosul = true;
// let sayac = 0;
// while(kosul){
//     if(sayi != "NaN" && sayi == 2){
//         console.log("Asaldır...");
//         kosul = false;
//     }else if(sayi != "NaN" && sayi == 1){
//         console.log("Asal değildir...");
//         kosul = false;
//     }else if(sayi != "NaN" && sayi > 2){
//         let variable = 2;        
//         for(let i = 2; i <= sayi/2; i++){
//             if(sayi % i == 0){
//                 sayac++;
//             }
//         }
//         if(sayac == 0){
//             console.log("Asaldır.");
//         }else{
//             console.log("Asal değildir");
//         }
//         kosul = false;
//     }else{
//         sayi = Number(prompt("Lütfen doğru bir sayı giriniz.."));
//     }
// }

// function mesajGoster(){
//     console.log("Merhaba");
// }

// mesajGoster();

// function mesajGosterAlert(){
//     alert("Hello")
// }
// mesajGosterAlert();

// let mesaj;
// function mesajGoster(){
//     mesaj = "Merhaba ben Javascript";
// }

// console.log(mesaj);

// mesajGoster();

// console.log(mesaj);

// function add(){
//     console.log("Eklenmiştir.");
// }

// function get(){
//     console.log("Elde edildi");
// }

// function update(){
//     console.log("Güncellendi");
// }

// function delete2(id){
//     console.log(id + " li değer silindi");
// }

//Object Literal
// const database = {
//     host: "localhost",
//     add: function(){
//         console.log("Eklenmiştir.");
//     },
//     get: function(){
//         console.log("Elde edildi");
//     },
//     update: function(parametre){
//         console.log(parametre);
//     },
//     delete: function(parametre){
//         console.log(parametre + " değer siliniştir.");
//     }
// }


// console.log(database);
// database.delete("Id'si 2 olan");

// delete2(23);

// function toplam(a,b){
//     return a+b;    
// }

// console.log(toplam(23,25));

// function ciktiAl(a){
//     console.log(a);
// }

// let ciktiAl = (a,b,c) => {
//     console.log(5);
//     return 5;
// }

// ciktiAl(2,3,4);

