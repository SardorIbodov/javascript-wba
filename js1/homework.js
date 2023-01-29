let name = "Ilya";
console.log(`hello ${1}`); // hello 1
console.log(`hello ${"name"}`); // hello name
console.log(`hello ${name}`); // hello Ilya


// Number
// Bu barcha sonlarni (+- 9007199254740991 oralig'ida) o'z ichiga oladi

// BigInt
// 9007199254740992 dan katta va -9007199254740991 dan kichik bo'lgan raqamlarni o'z ichida oladi
// Raqamlar oldiga n harfi qo'shib yoziladi
// Example: let a = 9007199254740993n

// String
// 3 xil belgilar orqali yasasa bo'ladi: '', "", ``;
// `` -> yangi sintaksis hisoblanadi va ${} orqali turli xil o'zgaruvchilar qiymatlarini 
// qo'shib yozsa, qator va joy tashlasa bo'ladi

// Boolean 
// True, false 
// Haqiqat yoki yolg'on qiymatlarini o'z ichiga oladi
// True -> 1, false -> 0

// Null
// E'lon qilingan va bo'sh narsaga tenglashtiriladigan ma'lumot turi
// Ammo typeof orqali ko'rilganda "object" natija chiqadi

// Undefined
// E'lon qilingan, lekin hech nimaga tenglashtirilmagan tur
// Typeof orqali "undefined" natijasini olamiz

// Symbol  
// Yagona ID yasash uchun qo'llaniladi
// Sintaksis: Symbol(value);

// Object
// Bir necha turdagi ma'lumotlarning jamlanmasi
// Sintaksis: objectName = {key: value}

// Array
// Asosan, bir xil turdagi ma'lumotlarni(har doim emas) saqlaydi
// Sintaksis: arrayName = [value, value, value]

// Function
// Biror bir amal bajarish uchun yozilgan kodlar jamlanmasi
// Sintaksis: function functionName() {code}
