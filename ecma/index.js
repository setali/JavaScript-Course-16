var myName = "Eli";

function func() {
  //   console.log(this);
  return {
    myName: "Ali",
    norm: function () {
      console.log(this.myName);
    },
    arrow: () => {
      console.log(this.myName);
    },
  };
}

const nikta = {
  myName: "Nikta",
};

const obj = func.call(nikta);

const saeed = {
  myName: "Saeed",
  norm: obj.norm,
  arrow: obj.arrow,
};

saeed.norm();
saeed.arrow();

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
