function timeConversion(s) {
  // Write your code here
  const textFindPm = s.includes("PM");
  const hour = s.substring(0, 8);
  const textHourComplete = s.substring(2, 8);
  const intHour = parseInt(s.substring(0, 2)) + 12;
  const answer = intHour + textHourComplete;
  const ceroHour = "00" + textHourComplete;
  if (textFindPm == true) {
    if (s.substring(0, 2) < "12") {
      return answer;
    } else {
      return s.substring(0, 8);
    }
  } else if (textFindPm === false && s.substring(0, 2) == "12") {
    return ceroHour;
  } else {
    return hour;
  }
}

const test = "12:45:54PM";
console.log(timeConversion(test));
