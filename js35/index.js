// let forms = document.forms;
//! Accessing the form elements
// console.log(forms);
// console.log(forms[0]);
// console.log(forms.bunkerForm);
// console.log(forms[1]);
// console.log(forms.standartForm);

// let bunkerForm = forms.bunkerForm;
// let elements = bunkerForm.elements;
//! Accessing the elements of form
// console.log(elements);
// console.log(elements[0]);
// console.log(elements.login);
// console.log(elements[1]);
// console.log(elements.parol);
// console.log(elements[2]);

//! Getting value of input
// console.log(elements.login.value);

//! Inputs with the same name => returns array
// console.log(elements.login);

//! Directly accessing
// console.log(bunkerForm.parol);

//! Select
// let select = bunkerForm.select;
// console.log(select);

//! Changing the value of select
//* 1
// select.value = "ru";
//* 2
// select.selectedIndex = 2;

//! Input validation
// login3.onblur = (e) => {
//   if (!e.target.value.includes("@")) {
//     loginError.innerHTML = "It is not an email!";
//     loginError.style.color = "red";
//   }
// };
// login3.onfocus = (e) => {
//   loginError.innerHTML = null;
// };

//! Submit
// console.log(bunkerForm.action);
// console.log(bunkerForm.select.value);
// bunkerForm.onsubmit = (e) => {
// e.preventDefault();
//   bunkerForm.action = `https://jsonplaceholder.typicode.com/todos/${bunkerForm.select.value}`;
//   console.log(bunkerForm.select.value);
// };
