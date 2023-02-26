const array = [3, 8, 14, 5, 19, 25];
// array ichidan maximal sonni aniqlaydigan funksiya
const max = (arr) => {
  return arr.reduce((current, value) => {
    return current > value ? current : value;
  }, 0);
};
const task = (arr) => {
  if (arr.length <= 1) {
    return arr;
  } else {
    let m1 = max(arr); // Eng katta son
    arr.splice(arr.indexOf(m1), 1);
    let m2 = max(arr); // Eng katta sondan bitta kichik son
    arr.splice(arr.indexOf(m2), 1);
    if (m1 - m2 !== 0) arr.push(m1 - m2);
    return task(arr);
  }
};
