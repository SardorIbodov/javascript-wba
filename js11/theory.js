let students = [
  { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
  { id: 2, year: 2002, name: "Najmiddin Nazarov" },
  { id: 3, year: 2000, name: "Asilbek Tolipov" },
  { id: 4, year: 2002, name: "Mominov Abdulloh" },
  { id: 5, year: 1995, name: "Sardor Tursunboyev" },
  { id: 6, year: 2002, name: "Mohichehra Hudoyberdieva" },
  { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
  { id: 8, year: 2002, name: "Shohruh Shukurov" },
];

// CRUD

// Read
const sortByYear = (arr) => arr.sort((a, b) => b.year - a.year);
// console.log(sortByYear(students));
const sortByAlphabet = (arr) =>
  arr.sort((a, b) => a.name.localeCompare(b.name));
// console.log(sortByAlphabet(students));
const filterUser = (arr, input) => {
  return arr.filter((v) => v.name.toLowerCase().includes(input.toLowerCase()));
};
// console.log(filterUser(students, "eV"));

// Delete
const deleteUser = (arr, id) => arr.filter((v) => v.id !== id);
// console.log(deleteUser(students, 3));

// Create
const addUser = (arr, user) => [...arr, { id: arr.length + 1, ...user }];
// console.log(addUser(students, { year: 2003, name: "Eshmat Toshmatov" }));

// Update
const updateUser = (arr, {id, type, value}) =>
  arr.map((v) => (v.id === id ? { ...v, [type]: value } : v));
console.log(
  updateUser(students, { id: 2, type: "name", value: "Gulbashakar" })
);
