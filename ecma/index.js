// function Animal(type, name) {
//   this.type = type;
//   this.name = name;
//   this.eat = function () {
//     console.log("HUM HUM");
//   };
// }

// function Cat(name, color) {
//   this.color = color;
//   const animal = new Animal("CAT", name);

//   this.__proto__ = animal;
// }

// const babri = new Cat("Babri", "Orange");

// console.log(babri);

// babri.eat();

// class Animal {
//   constructor(type, name) {
//     this.type = type;
//     this.name = name;
//   }

//   eat() {
//     console.log("HUM HUM");
//   }
// }

// class Cat extends Animal {
//   constructor(name, color) {
//     super("CAT", name);
//     this.color = color;
//   }

//   speack() {
//     console.log("MEU MEU");
//   }

//   eat() {
//     console.log("HOOM HOOM");
//     super.eat();
//   }
// }

// class Tiger extends Cat {
//   constructor(name, weight) {
//     super(name, "Orange zebra");
//     this.weight = weight;
//   }

//   speack() {
//     console.log("Qorresh");
//   }

//   attack() {
//     console.log("ATTACK");
//   }
// }

// const babri = new Tiger("Babri", 10);

// // babri.eat();
// // babri.speack();
// // babri.attack();

// console.log(babri);

// const khan = new Tiger("Khan", 30);
// console.log(khan instanceof Tiger);
// console.log(khan instanceof Cat);
// console.log(khan instanceof Animal);
// console.log(khan instanceof Object);

// const babri = new Cat("Babri", "Orange zebra");

// console.log(babri);
// babri.speack();
// babri.eat();

// const animal = new Animal("CAT", "Babri");

// console.log(animal.name);
// console.log(animal.type);
// animal.eat();

// function Person(name, family) {
//   this.name = name;
//   this.family = family;
//   this.getFullname = function () {
//     return `${this.name} ${this.family}`;
//   };
// }

// class Person {
//   constructor(name, family) {
//     this.name = name;
//     this.family = family;
//   }

//   getFullname() {
//     return `${this.name} ${this.family}`;
//   }

//   get fullname() {
//     return `${this.name} ${this.family}`;
//   }

//   set fullname(value) {
//     const arr = value.split(" ");
//     this.name = arr[0];
//     this.family = arr[1];
//   }
// }

// const ali = new Person("Ali", "Mousavi");

// console.log(ali);
// console.log(ali.getFullname());
// console.log(ali.fullname);

// ali.fullname = "Hasan Hasani";

// console.log(ali);

// const url = "https://jsonplaceholder.typicode.com";

// async function getData() {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getData();

// const delay = (t) => new Promise((resolve) => setTimeout(resolve, t * 1000));

// async function func() {
//   for (let i = 0; i < 5; i++) {
//     await delay(1);
//     console.log(i);
//   }
// }

// console.log(func());

// function prom() {
//   return new Promise((resolve) => {
//     resolve("ali");
//   });
// }

// async function prom() {
//   return "Ali";
// }

// console.log(prom());

// async function func() {
//   const result = await prom();
//   console.log(result);
//   console.log("salam");
// }

// func();

// function prom(value) {
//   return new Promise((resolve, reject) => {
//     if (value) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
// }

// console.log(1);

// prom()
//   .then(() => console.log("then"))
//   .catch(() => console.log("error"))
//   .finally(() => console.log("finally"));

// console.log(2);

// console.log("start");

// const a = new Promise((resolve, reject) => {
//   console.log("start promise");
//   resolve();
//   console.log("end promise");
// });

// a.then(() => console.log("then"));

// console.log("end");

// const url = "https://jsonplaceholder.typicode.com/users/1";
// // const url = "https://jsonplaceholder.typicode.com";

// function request(url, options = {}) {
//   return new Promise((resolve, reject) => {
//     const { method = "GET" } = options;

//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url);

//     xhr.send();

//     xhr.onload = function () {
//       resolve({
//         json: () => {
//           return new Promise((resolve, reject) => {
//             try {
//               resolve(JSON.parse(xhr.response));
//             } catch (e) {
//               reject(e);
//             }
//           });
//         },
//         text() {
//           return new Promise((resolve) => resolve(xhr.response));
//         },
//       });
//     };

//     xhr.onerror = function () {
//       reject(new Error("Request Error"));
//     };
//   });
// }

// request(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

// function myAxios(url, options) {
//   return new Promise((resolve, reject) => {
//     fetch(url, options)
//       .then((response) => response.json())
//       .then((data) => resolve({ data }))
//       .catch(reject);
//   });
// }

// myAxios(url).then((response) => console.log(response.data));

// setTimeout(() => {
//   console.log("Ali");
//   setTimeout(() => {
//     console.log("Qoli");
//     setTimeout(() => {
//       console.log("Eli");
//     }, 1000);
//   }, 2000);
// }, 1000);

// function prom() {
//   return new Promise((resolve) => resolve());
// }

// setTimeout(() => {
//   console.log("timeout");
// }, 0);

// prom().then(() => console.log("Promise"));

// console.log("Sync");

// function prom(time, number) {
//   console.log("func");
//   const promise = new Promise((resolve, reject) => {
//     console.log("promise");
//     if (!time) {
//       return reject(new Error(number));
//     }
//     setTimeout(() => {
//       console.log("resolve");
//       return resolve(number ** 2);
//       console.log("After resolve");
//     }, time * 1000);
//     console.log("After timeout");
//   });

//   return promise;
// }

// prom(3, 7).then((result) => console.log(result));

// prom()
//   .then(() => console.log("salam"))
//   .catch((error) => console.log(error));

// console.log("Ali");

// prom(2, 5).then((result) => console.log("after 2", result));

// setTimeout(() => {
//   console.log("Start timeout");
//   9999999n ** 9999999n;
//   console.log("salam");
// }, 500);

// const a = prom(1, 7).then((result) => {
//   console.log(result);
//   return prom(2, 5);
// });
// .then((value) => {
//   console.log(value);
//   return prom(2, 3);
// })
// .then((value) => {
//   console.log(value);
// })
// .catch((e) => console.log(e));

// console.log("Sync");

// console.log(a);

// let a = 4,
//   b = 5;

// // let temp = a;
// // a = b;
// // b = temp;

// // a = a ^ b;
// // b = a ^ b;
// // a = a ^ b;

// // [b, a] = [a, b];
// a = a + b;
// b = a - b;
// a = a - b;

// console.log(a, b);

// const arr = [1, 2, 3, 4, 5, 6];

// const [a, b, c, ...rest] = arr;

// console.log(a, b, c, rest);

// const person = {
//   // firstName: "Ali",
//   lastName: "Mousavi",
//   age: 35,
//   gender: "male",
//   family: {
//     // father: {
//     //   // name: "Mohmmad"
//     // },
//   },
// };

// // const name = person.firstName || "Qoli";
// // const fatherName = person.family.father.name;

// const {
//   firstName: name = "Qoli",
//   lastName: family = "Qoliyavi",
//   family: { father: { name: fatherName } = { name: "Mamad" } },
//   ...rest
// } = person;

// console.log("firstName", name);
// console.log("family", family);
// console.log("fatherName", fatherName);
// console.log(rest);

// function func(a, b, ...rest) {
//   console.log(a);
//   console.log(b);
//   console.log(rest);
// }

// func(1, 2, 3, 4);

// const sum = (...args) => args.reduce((acc, el) => acc + el);

// console.log(sum(2, 3, 4, 5));

// const obj = {
//   name: "Ali",
//   family: "Mousavi",
// };

// const arr = [...obj]; // incorrect

// const arr = [1, 2, 3];

// const obj = { ...arr };
// console.log(obj);

// const newArr = [...obj]; incorrect

// const numbers = [4, 2, 9, 3, 7];

// // const max = Math.max.apply(null, numbers);
// const max = Math.max(...numbers);

// console.log(max);

// const arr = [1, 2, 3, 4];

// const newArr = [6, 7, 8, ...arr, 9, 10];

// console.log(newArr);

// const newArr2 = [...arr];

// console.log(newArr2 === arr);

// const obj1 = {
//   a: 1,
//   b: 2,
//   c: {
//     d: 10,
//   },
// };

// // const obj2 = Object.assign({}, obj1);

// const obj2 = { f: 9, ...obj1, z: 6 };

// obj2.b = 50;
// obj2.c.d = 90;

// console.log(obj2);
// console.log(obj1);

// var myName = "Eli";

// function func() {
//   //   console.log(this);
//   return {
//     myName: "Ali",
//     norm: function () {
//       console.log(this.myName);
//     },
//     arrow: () => {
//       console.log(this.myName);
//     },
//   };
// }

// const nikta = {
//   myName: "Nikta",
// };

// const obj = func.call(nikta);

// const saeed = {
//   myName: "Saeed",
//   norm: obj.norm,
//   arrow: obj.arrow,
// };

// saeed.norm();
// saeed.arrow();

// const bita = {
//   myName: "Bita",
// };

// const alireza = {
//   myName: "Alireza",
// };

// // const obj = func.call(bita);
// // const obj = func();

// obj.norm.call(alireza);

// obj.arrow.call(alireza);

// const func = () => {
//   console.log(arguments);
// };

// function func1() {}

// console.log(func1.prototype);

// const arr = [1, 2, 3];

// const newArr = arr.map((el) => el ** 2);

// console.log(newArr);

// const pow2 = (a) => a ** 2;

// console.log(pow2(5));

// const b = true;

// const a = `salam ${b ? "Ali" : "Eli"}`;

// console.log(a);

// const obj = {
//   name: "Ali",
//   family: "Mousavi",
// };

// const a = "salam " + obj.name + " " + obj.family;
// const b = `sala' "
// m ${obj.name} ${obj.family}`;

// console.log(a);
// console.log(b);

// let a;
// const b

// a = 20;

// console.log(a);

// function func() {
//   const a = 1;
//   console.log(a);
// }

// func();

// func();

// function Component() {
//     const [count, setCount] = useState()
// }

// const arr = [1, 2, 3];

// arr[1] = 20;

// arr = [1, 20, 3]; // incorrect

// console.log(arr);

// const obj = {
//   name: "Ali",
// };

// obj.name = "Hasan";

// obj = {
//   name: "Qoli",
// };

// console.log(obj);

// const a = 20;

// a = 30;

// function func() {
//   for (const i = 0; i < 5; i = i + 1) {
//     setTimeout(function () {
//       console.log(i);
//     }, 1000);
//   }
// }

// func();

// function func() {
//   console.log(a);
//   let a = 20;
// }

// func();

// function func() {
//   let a = 20;

//   {
//     var a = 30;
//     console.log(a);
//   }

//   console.log(a);
// }

// func();

// function func() {
//   var a = 20;
//   let b = 10;

//   if (true) {
//     var a = 40;
//     let b = 30;
//     console.log(b);
//     // console.log(a);
//   }

//   console.log(b);
//   //   console.log(a);
// }

// func();

// let myName = "Salam";

// myName = "Ali";

// console.log(myName);

// console.log(window.myName);
