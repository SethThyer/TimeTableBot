let year = new Date().getFullYear;

const MonthDays = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
};

const Days = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    0: "Sunday"
};

if (year % 4) MonthDays[2] = 29;

let dayNumber = new Date().getDate(); // getday

for (let i = new Date().getMonth(); i >= 1; i --) {
    dayNumber += MonthDays[i];
}

let weekNumber = Math.round(dayNumber / 7); // Check when the week changes and then add the offset to day#
let weekSchool = 0;

if (weekNumber % 2 === 0) weekSchool = 2;
else weekSchool = 1;

let currentDay = Days[new Date().getDay()];
let nextDay = Days[new Date().getDay() + 1];

let weeSchoolNext = weekSchool;
if (nextDay == 'Monday') {
    if (weekSchool = 1) weeSchoolNext = 2;
    else weeSchoolNext = 1;
}

const dayInfo = {
    day: dayNumber,
    dayWeek: currentDay,
    dayWeekNext: nextDay,
    week: weekNumber,
    months: MonthDays,
    schoolWeek: weekSchool,
    schoolWeekNext: weeSchoolNext
};

module.exports = dayInfo;