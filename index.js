// var friends = ["Ali", "Eli", "Qoli", "Fati"];

// console.log(friends);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends[4]);
// console.log(friends.length);

// friends[0] = "Hasan";

// console.log(friends);

var arr = [1, "salam", true, () => {}, {}, []];

// console.log(typeof arr);

var nikta = {
  firstName: "Nikta",
  lastName: "Ghorbani",
  age: 24,
  family: {
    father: "Mahdi",
    mother: "Maryam",
    partner: {
      //   name: "Behnam",
      family: "Hoseini",
    },
    // children: [{ name: "Mohammad" }],
  },
};

// console.log(nikta.family.children[0].name);
console.log(nikta.family?.children?.[1]?.name);

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
