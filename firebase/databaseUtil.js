export function getWeekOfMonth(date) {
  const startOfMonth = new Date(date.getTime());
  startOfMonth.setDate(1);

  const dayOfWeek = startOfMonth.getDay();

  const firstMonday = dayOfWeek === 0 ? 2 : 9 - dayOfWeek;

  const currentDate = date.getDate();

  const weeksInMonth = Math.ceil((currentDate - firstMonday + 1) / 7);

  // Limit the result to 0-3
  if (weeksInMonth > 3) {
    return 3;
  } else {
    return weeksInMonth;
  }
}

export const months = [
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
export const WeekNames = ["firstWeek", "secondWeek", "thirdWeek", "fourthWeek"];
export const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
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
