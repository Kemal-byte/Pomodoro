export function getWeekOfMonth(date) {
  // Clone the date object and set it to the first day of the month
  let startOfMonth = new Date(date.getTime());
  startOfMonth.setDate(1);

  // Get the day of week of the first day (0 for Sunday, 1 for Monday, etc.)
  let dayOfWeek = startOfMonth.getDay();

  // Get the date of the first Monday of the month
  let firstMonday = dayOfWeek === 0 ? 2 : 9 - dayOfWeek;

  // Get the date of the given date
  let currentDate = date.getDate();

  // Return the week number based on the difference between
  //the current date and the first Monday
  return Math.floor((currentDate - firstMonday) / 7) + 1;
}

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const WeekNames = ["firstWeek", "secondWeek", "thirdWeek", "fourthWeek"];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const d = new Date();
let year = d.getFullYear();

let dayObject = {};
for (let i = 0; i < days.length; i++) {
  dayObject = {
    ...dayObject,
    [days[i]]: {
      dailyTotal: 0,
    },
  };
}
let weeksObject = {};
for (let i = 0; i < WeekNames.length; i++) {
  weeksObject = {
    ...weeksObject,
    [WeekNames[i]]: {
      weeklyTotal: 0,
      categories: { holder: "" },
      ...dayObject,
    },
  };
}

let monthsObject = {};
for (let i = 0; i < months.length; i++) {
  monthsObject = {
    ...monthsObject,
    [months[i]]: {
      montlyTotal: 0,
      categories: { somethings: "" },
      ...weeksObject,
    },
  };
}

export const dbStructure = {
  [year]: monthsObject,
};

// console.log(dbStructure);
