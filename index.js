var a = 5

// var a = 5
// ;(function () {})
// ;[2,3,5].forEach(a => a)

// console.log(a)

// var obj = {
//   name: "Ali",
//   family: "Mousavi",
// };

// for (var a in obj) {
//   console.log(a, obj[a]);
// }

// console.log("age" in obj);

// obj.age = 35;

// console.log("age" in obj);

// delete obj.age;

// console.log("age" in obj);

// var friends = ["Ali", "Eli", "Qoli", "Fati", "Nik"];

// for (var f of friends) {
//   console.log(f);
// }

// for (var s of "salam") {
//   console.log(s);
// }

// setTimeout(() => console.log("Salam"), 2000);

// while (true) {
//   console.log(5);
// }

// setTimeout(() => console.log("Aleyk"), 4000);

// var a = 5;

// do {
//   console.log(a);
//   a++;
// } while (a < 5);

// var b = 5;

// while (b < 5) {
//   console.log(b);
//   b++;
// }

// var friends = ["Ali", "Eli", "Qoli", "Fati", "Nik"];

// for (var i = friends.length - 1; i >= 0; i--) {
//   if (friends[i].length !== 3) {
//     continue;
//   }

//   console.log(friends[i]);
// }

// var i = 1;
// for (;;) {
//   if (i > 5) {
//     break;
//   }

//   console.log("salam", i);
//   i++;
// }

// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }

// var a = 4;
// var b = 5;

// var temp = a;
// a = b;
// b = temp;

// a = a ^ b;
// b = a ^ b;
// a = a ^ b;

// a = a << 2;

// console.log(a, b);

// var a = 15;

// a % 2 ? console.log("Odd") : console.log("Even");

// console.log(a % 2 ? "Odd" : "Even");

// var a = "d";

// switch (a) {
//   case "a":
//   case "A":
//     console.log("Char is a");
//     break;

//   case "b":
//   case "B":
//     console.log("Char is b");
//     break;

//   default:
//     console.log("Char is not A and B");
// }

// var a = 0;

// if (a < 0) console.log("Negative");
// else if (a > 0) console.log("Positive");
// else if (a === 0) console.log("Zero");
// else console.log("Is NaN");

// var a = 19;

// if (a % 2) {
//   console.log("Odd");
// } else {
//   console.log("Even");
// }

// var obj = {
//   fullName: "Ali Mousavi",
// };

// {obj.fullName && <div>
//   Wellcome {obj.fullName}
// </div>}

// var result = obj.fullName ?? "Unknown";

// console.log(result);

// var name = "Ali";

// console.log(typeof name);

// name = 10;

// console.log(typeof name);

// console.log(name);

// var a = false;

// console.log(+a === 0);

// var friends = ["Ali", "Eli", "Qoli"];
// var friends2 = ["Ali", "Eli", "Qoli"];

// console.log(friends == friends2);

// var a = () => {};
// var b = a;

// console.log(a == b);

// var a = { name: "Ali" }; // #12ABC3
// var b = { name: "Ali" }; // #45BD85

// var c = a;

// console.log(a == b);

// console.log(c == a);

// console.log(("b" + "a" + +"a" + "a").toLowerCase());

// console.log(+3);
// console.log(+"3");
// console.log(+true);
// console.log(+false);
// console.log(+"ali");
// console.log(+undefined);

// console.log(Number(3));
// console.log(Number("3"));
// console.log(Number(true));
// console.log(Number(false));

// var a = 5;

// var b = +a;

// console.log(b);

// var a = 2;

// a -= -5;
// a = a - -5;

// console.log(a);

// var x = 5;

// x = x - 1;
// x--;
// x -= 1;

// console.log(x);

// var a = 2;

// var b = ++a;

// console.log(a);
// console.log(b);

// var friends = ["Ali", "Eli", "Qoli", "Fati"];

// console.log(friends);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends[4]);
// console.log(friends.length);

// friends[0] = "Hasan";

// console.log(friends);

// var arr = [1, "salam", true, () => {}, {}, []];

// console.log(typeof arr);

// var nikta = {
//   firstName: "Nikta",
//   lastName: "Ghorbani",
//   age: 24,
//   family: {
//     father: "Mahdi",
//     mother: "Maryam",
//     partner: {
//       //   name: "Behnam",
//       family: "Hoseini",
//     },
//     // children: [{ name: "Mohammad" }],
//   },
// };

// console.log(nikta.family.children[0].name);
// console.log(nikta.family?.children?.[1]?.name);

// console.log(nikta.family?.partner?.name);

// var nikan = Object.assign({}, nikta);

// nikan.firstName = "Nikan";
// nikan.age = 27;
// nikan.family.partner = "Somaye";

// console.log(nikta);
// console.log(nikan);

// nikta.family.partner = "Behnam";

// console.log(nikta);
// console.log(nikan);
// var ali = {
//   firstName: "Ali",
//   lastName: "Mousavi",
//   fullName: "Ali Mousavi",
//   age: 35,
//   iranian: true,
//   getFUllName: () => {},
//   family: {
//     father: "Mohammad",
//     mother: "Hajar",
//     partner: "Elham",
//     children: ["Mahsa", "Mohammad"],
//   },
// };

// var propertyName = "fullName";

// console.log(ali.propertyName);
// console.log(ali[propertyName]);

// console.log(ali.firstName);
// console.log(ali["firstName"]);

// console.log(ali.family.father);
// console.log(ali["family"]["father"]);

// var v = null;

// console.log(null);
// console.log(typeof null);

// var myName = "Ali";

// var a;

// var obj = {
//   name: "Ali",
// };

// console.log(obj.name);
// console.log(obj.family);

// console.log(a == undefined);

// console.log(typeof undefined);

// console.log(typeof myName[3] == "undefined");

// console.log("my name is \\ali");

// var myName = "Ali";
// var myName = "علی";

// console.log(myName.toUpperCase());

// console.log(myName);

// myName = myName.toUpperCase();

// console.log(myName);

// console.log(typeof myName);

// console.log(myName[0]);

// myName[0] = "E";

// console.log(myName);

// myName = "Eli";

// console.log(myName);

// console.log(myName.length);

// console.log(myName[myName.length - 1]);

// console.log(myName[0]);
// console.log(myName[1]);
// console.log(myName[2]);
// console.log(myName[3]);

// var n = 25465416484168464186n;

// console.log(typeof n, n);

// var a = 8 - "ali";

// if (Number.isNaN(a)) {
//   // incorrect = a == NaN
//   console.log("salam");
// }

// var variable;

// variable = 1;

// console.log(typeof variable);

// variable = "salam";

// console.log(typeof variable);

// variable = {};

// console.log(typeof variable);

// myFirstName     |   camelCaseNaming
// MyFirstName     |   PascalCaseNaming
// my-first-name   |   kebab-case-naming
// my_first_name   |   snake_case_naming
// MY_FIRST_NAME   |   UPPER_CASE_NAMING

// var myFirstName, MyLastName, MY_FULL_NAME; // Bad Code

// var my-first // Error

// var myName = "ali";

// var MyName = "Qoli";

// console.log(myName, MyName);

//   ` ~ ! @ # $ % ^ & * () - _ + = \ / | ?  [] {} ' " : ;

// var $myName;
// var _myName;

// var نام = "علی"

// console.log(نام)

// var myName,
//   family = "Mousavi";

// myName = "Qoli";

// console.log(myName, family);

/* console.log("External file js");

console.log("1");

console.log(2);

console.log(3n);
*/

// console.error("Qoli");

// // console.table({ name: "Ali", family: "mousavi" });

// console.time("ali");

// console.log(2n ** 1024n);

// console.timeEnd("ali");
