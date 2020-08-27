console.log(this);

// console.log(this.document);

//DOCUMENT ÖZELLİKLERİ

// console.log(document)
// console.log(document.all);
// console.log(document.all[6]);
// console.log(document.all[document.all.length - 1]);



// value = document.body;
// value = document.head;
// value = document.scripts;
// value = document.scripts[3];
// value = document.links;
// value = document.links[0];
// value = document.links[0].getAttribute("class");
// value = document.links[0].getAttribute("href");
// value = document.links[0].className;
// value = document.links[0].classList;


// value = document.forms;
// value = document.forms[0];
// value = document.forms[0].id;
// value = document.forms[0].name;


// ELEMENT SEÇME
// let value;
// //ID
// value = document.getElementById("todo-form");
// value = document.getElementById("tasks-title");
// //CLASS
// value = document.getElementsByClassName("list-group-item");
// value = document.getElementsByClassName("card-header");
// //TAG
// value = document.getElementsByTagName("div");

// //Query Selector

// value = document.querySelector("#todo-form");
// value = document.querySelector("#tasks-title");

// value = document.querySelector(".list-group-item");
// value = document.querySelector(".card-header");

// value = document.querySelector("li");

// //Query Selector All

// value = document.querySelectorAll(".list-group-item");
// value.forEach(function(el){
//     console.log(el);
// })

// console.log(value);


//ÖZELLİKLERİ GÖRME, DEĞİŞTİRME
// console.log(value.id);
// console.log(value.className);
// console.log(value.href);
// console.log(value.classList);
// console.log(value.classList[0]);
// console.log(value.classList[1]);
// console.log(value.textContent);
// console.log(value.innerHTML);
// console.log(value.style);

// value.className = "btn btn-primary";
// value.style.color = "red";
// value.style.marginLeft = "50px";
// value.href = "https://www.google.com.tr";
// value.target = "_blank";
// value.textContent = "Silin";



// console.log(value);

// let value;

// value = document.querySelector("li:first-child");
// value = document.querySelector("li:last-child");
// value = document.querySelector("li:nth-child(2)");
// value = document.querySelector("li:nth-child(4)");
// value = document.querySelectorAll("li:nth-child(even)");
// value.forEach(function(el){
//     console.log(el);
// });


// console.log(value);

//ÇOCUKLARINI ALMA
// let value;

// const todoList = document.querySelector(".list-group");
// // const todo = document.querySelector(".list-group-item:nth-child(2)");
// const cardrow = document.querySelector(".card.row");

// console.log(todoList, todo, cardrow);

// value = todoList.childNodes;

// value = todoList.children;
// value = todoList.children[todoList.children.length - 1];


// value = cardrow.children;
// value = cardrow.children[2];
// value = cardrow.children[2].children;
// value = cardrow.children[2].children[1].textContent;

// value = todoList;
// value = todoList.firstElementChild;
// value = todoList.lastElementChild;
// value = todoList.children.length;
// value = todoList.childElementCount;

// value = cardrow;
// value = cardrow.parentElement.parentElement.parentElement;

// const todo = document.querySelector(".list-group-item:nth-child(2)");

// value = todo;
// value = todo.previousElementSibling;
// value = todo.nextElementSibling.nextElementSibling;

// console.log(value);

// let value;

//ELEMENT EKLEME
// {/* <a id="clear-todos" class="btn btn-dark" href="#">Tüm Görevleri Temizleyin</a> */}

// const cardbody = document.getElementsByClassName("card-body")[1];
// const newLink = document.createElement("a");

// newLink.id = "clear-todos";
// newLink.className = "btn btn-danger";
// newLink.href = "https://www.google.com.tr";
// newLink.target = "_blank";
// newLink.textContent = "Google'a git!";

// cardbody.appendChild(newLink);
// // cardbody.insertBefore(newLink, cardbody.childNodes[0]);
// cardbody.prepend(newLink);

// value = newLink;
// console.log(value);

// let value;

// const todoList = document.querySelector(".list-group");
// const todos = document.querySelectorAll(".list-group-item");

// value = todos[1];
// value.remove();

// todoList.removeChild(todos[1]);
// todoList.removeChild(todoList.lastElementChild);

{/* <h5 class="card-title" id="tasks-title">Görevler</h5> */}

// const cardbody = document.querySelectorAll(".card-body")[1];

// const newElement = document.createElement("h3");

// newElement.className = "card-title";
// newElement.id = "tasks-title";
// newElement.textContent = "Yeni Görevler";

// const oldElement = document.querySelector("#tasks-title");

// cardbody.replaceChild(newElement, oldElement);

// value = newElement;
// console.log(value);


//EVENTLER

// const filterInput = document.getElementById("filter");
// const todoForm = document.getElementById("todo-form");

// filterInput.addEventListener("focus", function(e){
//     // console.log(e);
//     // console.log(e.type);
//     // console.log(e.target);
//     // console.log(e.target.placeholder);
//     // console.log(e.target.className);


//     console.log("Merhaba, focus eventi!");
// });

// todoForm.addEventListener("submit", function(e){

// });

// todoForm.addEventListener("submit", submitForm);

// function submitForm(e){
//     console.log("Submit Eventi!");


//     e.preventDefault();
// }


//KLAVYE EVENTLERİ

// console.log(document);

// document.addEventListener("keypress", run);

// function run(e){
//     console.log(e.key);
// }

// document.addEventListener("keydown", run);

// function run(e){
//     console.log(e.key);
// }

// document.addEventListener("keyup", run);
// function run(e){
//     console.log(e.key);
// }


//MOUSE EVENTLERİ

const cardbody = document.getElementsByClassName("card-body")[1];
const title = document.getElementById("tasks-title");

//TIKLAMA
// title.addEventListener("click", run);
// function run(e){
//     console.log(e.type);
// }
//ÇİFT TIKLAMA
// title.addEventListener("dblclick",run);
// function run(e){
//     console.log(e.type);
// }

//TIKLAMA
// title.addEventListener("mousedown",run);

// function run(e){
//     console.log(e.type);
// }
//BASILI TUTUP ÇEKME
// title.addEventListener("mouseup", run);

// function run(e){
//     console.log(e.type);
// }

//ELEMENT ALANINA GİRME
// title.addEventListener("mouseover", run);

// function run(e){
//     console.log(e.type);
// }
//ALANDAN ÇIKMA
// title.addEventListener("mouseout", run);

// function run(e){
//     console.log(e.type);
// }

//ELEMENT ALANINA GİRME
// cardbody.addEventListener("mouseenter", run);
// function run(e){
//     console.log(e.type);
// }
// cardbody.addEventListener("mouseover", run);
// function run(e){
//     console.log(e.type);
// }
//ELEMENT ALANINDAN ÇIKMA
// cardbody.addEventListener("mouseleave", run);
// function run(e){
//     console.log(e.type);
// }
// cardbody.addEventListener("mouseout", run);

// function run(e){
//     console.log(e.type);
// }

console.log("Merhaba");



// console.log(title);

