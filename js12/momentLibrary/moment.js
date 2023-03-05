const moment = (relativeDate, relativeFormat) => {
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

    startOf(string) {
      let result;
      switch (string) {
        case "day": {
          if (this.minute >= 30) {
            result = `${this.hour + 1} ${
              this.hour + 1 > 1 ? "hours" : "hour"
            } ago`;
          } else {
            result = `${this.hour} ${this.hour > 1 ? "hours" : "hour"} ago`;
          }
          break;
        }
        case "hour": {
          if (this.second >= 30) {
            result = `${this.minute + 1} ${
              this.minute + 1 > 1 ? "minutes" : "minute"
            } ago`;
          } else {
            result = `${this.minute} ${
              this.minute > 1 ? "minutes" : "minute"
            } ago`;
          }
        }
      }
      return {
        fromNow() {
          return result;
        },
      };
    },

    endOf(string) {
      let result;
      switch (string) {
        case "day": {
          if (this.minute >= 30) {
            result = `in ${24 - this.hour - 1} ${
              24 - this.hour - 1 > 1 ? "hours" : "hour"
            }`;
          } else {
            result = `in ${24 - this.hour} ${
              24 - this.hour > 1 ? "hours" : "hour"
            }`;
          }
        }
      }
      return {
        fromNow() {
          return result;
        },
      };
    },

    fromNow() {
      let relative = +relativeDate.slice(0, 4) * 12 + +relativeDate.slice(4, 6);
      let current = this.year * 12 + this.monthNumber + 1;
      let difference = Math.round((current - relative) / 12);
      return `${difference > 0 ? difference : difference * -1} ${
        difference > 1 && difference < -1 ? "years" : "year"
      } ${difference > 0 ? "ago" : "later"}`;
    },
  };
};
