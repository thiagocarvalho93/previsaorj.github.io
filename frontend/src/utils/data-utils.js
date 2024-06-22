export function generateHourlyIntervals() {
  const intervals = [];
  for (let i = 0; i < 24; i += 3) {
    const hourString = i.toString().padStart(2, '0');
    intervals.push(hourString);
  }
  return intervals;
}

export function generateMonthAbbreviations() {
  const months = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
  ];
  return months;
}

export function getCurrentMonthAbbreviation() {
  const months = generateMonthAbbreviations();
  const today = new Date();
  const monthIndex = today.getMonth();
  return months[monthIndex];
}

export function getCurrentDayOfMonth() {
  const today = new Date();
  const dayOfMonth = today.getDate();
  return dayOfMonth;
}

export function getCurrentYear() {
  const today = new Date();
  const year = today.getFullYear();
  return year;
}