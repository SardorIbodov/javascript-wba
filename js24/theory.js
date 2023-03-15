//! Error handling, try{} catch{}
//* catch as an optional
// try {
// 	console.log(number);
// } catch {
// 	console.log("Something is wrong!!!");
// }
// try {
// 	throw new Error("Something went wrong!!!");
// } catch {
// 	console.log("Something went wrong!!!");
// }

//* catch with parameter
// try {
//   console.log(number);
// } catch (error) {
// console.log(error);
// console.log(error.message); // number is not defined
// console.log(error.name); // ReferenceError
// console.log(error.stack); // error
// }

// try {
// 	JSON.parse(`{name: "webbrain"}`);
// } catch(error) {
// 	console.log(error.name); // SyntaxError
// }

//* throw new Error()
// try {
// 	throw new Error("Something went wrong");
// } catch(error) {
// 	console.log(error.name); // Error
// 	console.log(error.message); // Something went wrong
// }

//! callback, promise
// const database = {
//   eshmat: {
//     name: "Eshmat",
//     login: "eshmat05",
//     password: 12345678,
//   },
//   toshmat: {
//     name: "Toshmat",
//     login: "toshmat05",
//     password: 87654321,
//   },
// };

// console.log("started...");
// const login = (lg, pw, callback) => {
//   setTimeout(() => {
//     if (database.eshmat.login === lg && database.eshmat.password === pw) {
//       callback(
//         `${database.eshmat.name}, Welcome to Facebook`,
//         `${database.eshmat.name}`
//       );
//     } else {
//       callback(`Login or password is wrong`);
//     }
//   }, 1000);
// };
// login("eshmat05", 12345678, (user, fullName) => {
//   console.log(user);
//   console.log(fullName);
//   console.log("finished...");
// });

// let user = new Promise((resolve, reject) => {
//   console.log("started...");
//   setTimeout(() => {
//     if (
//       database.eshmat.login === "eshmat05" &&
//       database.eshmat.password === 1234567
//     ) {
//       resolve(`Eshmat, Welcome to Facebook`);
//     } else reject(`Password is incorrect!`);
//   }, 1000);
// });
// user
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("finished"));

//! Promise.all([]);
// let all = Promise.all([
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (
//         database.eshmat.login === "eshmat05" &&
//         database.eshmat.password === 12345678
//       ) {
//         resolve(`Eshmat, Welcome to Facebook`);
//       } else reject(`Password is incorrect!`);
//     }, 1000);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (
//         database.eshmat.login === "eshmat05" &&
//         database.eshmat.password === 12345678
//       ) {
//         resolve(`Eshmat, Welcome to Facebook`);
//       } else reject(`Password is incorrect!`);
//     }, 1000);
//   }),
// ]);

// all
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("finished"));

//! async, await
// const database = {
//   eshmat: {
//     name: "Eshmat",
//     login: "eshmat05",
//     password: 12345678,
//   },
//   toshmat: {
//     name: "Toshmat",
//     login: "toshmat05",
//     password: 87654321,
//   },
// };
// let user = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (
//       database.eshmat.login === "eshmat05" &&
//       database.eshmat.password === 12345678
//     ) {
//       resolve(`Eshmat, Welcome to Facebook`);
//     } else reject(`Password is incorrect!`);
//   }, 1000);
// });

// const get = async () => {
//   try {
//     let result = await user;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// get();
