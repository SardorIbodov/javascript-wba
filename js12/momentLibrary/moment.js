const moment = () => {
  let date = new Date();
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return {
    year: date.getFullYear(),
    monthNumber: date.getMonth(),
    currentDate: date.getDate(),
    day: date.getDay(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),

    format(string) {
      switch (string) {
        case "LT": {
          return `${this.hour >= 12 ? this.hour - 12 : this.hour}:${
            this.minute
          } ${this.hour >= 12 ? "PM" : "AM"}`;
          break;
        }
        case "LTS": {
          return `${this.hour >= 12 ? this.hour - 12 : this.hour}:${
            this.minute
          }:${this.second} ${this.hour >= 12 ? "PM" : "AM"}`;
          break;
        }
        case "l": {
          return `${this.monthNumber + 1}/${this.currentDate}/${this.year}`;
          break;
        }
        case "ll": {
          return `${monthNames[this.monthNumber].slice(0, 3)} ${
            this.currentDate
          }, ${this.year}`;
        }
        case "lll": {
          return `${monthNames[this.monthNumber].slice(0, 3)} ${
            this.currentDate
          }, ${this.year} ${this.hour >= 12 ? this.hour - 12 : this.hour}:${
            this.minute
          } ${this.hour >= 12 ? "PM" : "AM"}`;
          break;
        }
        case "llll": {
          return `${dayNames[this.day + 1].slice(0, 3)}, ${monthNames[
            this.monthNumber
          ].slice(0, 3)} ${this.currentDate}, ${this.year} ${
            this.hour >= 12 ? this.hour - 12 : this.hour
          }:${this.minute} ${this.hour >= 12 ? "PM" : "AM"}`;
          break;
        }
        case "L": {
          return `${
            this.monthNumber + 1 < 10
              ? `0${this.monthNumber + 1}`
              : this.monthNumber + 1
          }/${this.currentDate}/${this.year}`;
          break;
        }
        case "LL": {
          return `${monthNames[this.monthNumber]} ${this.currentDate}, ${
            this.year
          }`;
          break;
        }
        case "LLL": {
          return `${monthNames[this.monthNumber]} ${this.currentDate}, ${
            this.year
          } ${this.hour >= 12 ? this.hour - 12 : this.hour}:${this.minute} ${
            this.hour >= 12 ? "PM" : "AM"
          }`;
          break;
        }
        case "LLLL": {
          return `${dayNames[this.day + 1]}, ${monthNames[this.monthNumber]} ${
            this.currentDate
          }, ${this.year} ${this.hour >= 12 ? this.hour - 12 : this.hour}:${
            this.minute
          } ${this.hour >= 12 ? "PM" : "AM"}`;
          break;
        }

        case "MMMM Do YYYY, h:mm:ss a": {
          return `${monthNames[this.monthNumber]} ${this.currentDate}th ${
            this.year
          }, ${this.hour >= 12 ? this.hour - 12 : this.hour}:${
            this.minute < 10 ? `0${this.minute}` : this.minute
          }:${this.second < 10 ? `0${this.second}` : this.second} ${
            this.hour >= 12 ? "pm" : "am"
          }`;
          break;
        }
        case "dddd": {
          return `${dayNames[this.day]}`;
        }
        case "MMM Do YY": {
          return `${monthNames[this.monthNumber].slice(0, 3)} ${
            this.currentDate
          }${
            this.currentDate % 10 === 1 && this.currentDate % 100 !== 11
              ? "st"
              : this.currentDate % 10 === 2 && this.currentDate % 100 !== 12
              ? "nd"
              : this.currentDate % 10 === 3 && this.currentDate % 100 !== 13
              ? "rd"
              : "th"
          } ${this.year.toString().slice(2)}`;
        }
        default: {
          return `${this.year}-${
            this.monthNumber + 1 < 10
              ? `0${this.monthNumber + 1}`
              : this.monthNumber + 1
          }-${this.currentDate}T${
            this.hour < 10 ? `0${this.hour}` : this.hour
          }:${this.minute < 10 ? `0${this.minute}` : this.minute}:${
            this.second < 10 ? `0${this.second}` : this.second
          }`;
        }
      }
    },
  };
};
console.log(moment().format());
