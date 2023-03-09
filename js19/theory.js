function getData() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
}

let user = {
  name: "users",
  getData() {
    return fetch(`https://jsonplaceholder.typicode.com/${this.name}`).then(
      (res) => res.json()
    );
  },
};

function getCached(func) {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let res = func.call(this);
    return cache.set(x, res);
  };
}

user.getData = getCached(user.getData);
