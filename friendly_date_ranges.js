// FRIENDLY DATE RANGES
// Convert a date range consisting of two dates
// formatted as YYYY-MM-DD into a more readable format.
//
// The friendly display should use month names instead of
// numbers and ordinal dates instead of cardinal (1st instead of 1).
//
// Do not display information that is redundant or that can be inferred by the
// user: if the date range ends in less than a year from when it begins, do not display the ending year.
//
// Additionally, if the date range begins in the current year (i.e. it is
// currently the year 2016) and ends within one year, the year should not be displayed
// at the beginning of the friendly range.
//
// If the range ends in the same month that is begins, do not display the ending year or month.
//
// Examples:
// makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].
// makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st", "4th"]
function makeFriendlyDates(arr) {
  // Array to return
  var dateArray = [];
  // Split array into year, month, and day
  var date1 = arr[0].split("-");
  var date2 = arr[1].split("-");
  // Turn Strings into nums for month
  // subtract 1 because the months in the monthNames array are zero indexed (array)
  date1[1] = Number(date1[1]) - 1;
  date2[1] = Number(date2[1]) - 1;
  // day
  date1[2] = Number(date1[2]);
  date2[2] = Number(date2[2]);
  // year
  date1[0] = Number(date1[0]);
  date2[0] = Number(date2[0]);
  // Store name of months
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // check dates if year, month, and day are the same
  if((date1[0] === date2[0]) && (date1[1] === date2[1]) && (date1[2] === date2[2])) {
    // dateArray.push(monthNames[date1[1]] + " " + dayChange(date1[2]) + ", " + date1[0]);
       dateArray.push(monthNames[date1[1]] + ' ' + dayChange(date1[2]) + ", " + date1[0]);
    return dateArray;
  // check dates for different months, but within the same year
  } else if(date2[1] - date1[1] >= 1 && (date2[0] - date1[0] === 0)) {
    dateArray.push(monthNames[date1[1]] + ' ' + dayChange(date1[2]) + ", " + date1[0]);
    dateArray.push(monthNames[date2[1]] + ' ' + dayChange(date2[2]));
    return dateArray;
  // same month, same day, different year
  } else if((date1[1] === date2[1]) && (date1[2] === date2[2]) && (date2[0] - date1[0] >= 1)) {
    dateArray.push(monthNames[date1[1]] + ' ' + dayChange(date1[2]) + ", " + date1[0]);
    dateArray.push(monthNames[date2[1]] + ' ' + dayChange(date2[2]) + ", " + date2[0]);
    return dateArray;
  // same month, but different years
  } else if((date1[1] === date2[1]) && (date2[0] - date1[0] >= 1)) {
    dateArray.push(monthNames[date1[1]] + ' ' + dayChange(date1[2]) + ", " + date1[0]);
    dateArray.push(monthNames[date2[1]] + ' ' + dayChange(date2[2]));
    return dateArray;
  // check if the months are the same
  }else if(date1[1] === date2[1]) {
    dateArray.push(monthNames[date1[1]] + ' ' + dayChange(date1[2]));
    dateArray.push(dayChange(date2[2]));
    return dateArray;
  // if the years between the two dates are not the same then include the year in the output
  } else if (date2[0] - date1[0] > 1) {
    dateArray.push(monthNames[date1[1]] + ' ' + dayChange(date1[2]) + ", " + date1[0]);
    dateArray.push(monthNames[date2[1]] + ' ' + dayChange(date2[2]) + ", " + date2[0]);

    return dateArray;
  // else if the dates include years that are the same then do not include the year in the output
  } else {
    dateArray.push(monthNames[date1[1]] + " " + dayChange(date1[2]));
    dateArray.push(monthNames[date2[1]] + " " + dayChange(date2[2]));
    return dateArray;
  }
  // reformat the day
  function dayChange(day) {
    if(day === 1) {
      return day + 'st';
    } else if (day === 3) {
      return day + 'rd';
    } else {
      return day + 'th';
    }
  }
  // return storage array
  return dateArray;
}

// returns => [ 'July 1st', '4th' ]
makeFriendlyDates(['2016-07-01', '2016-07-04']);

// returns => [ 'March 1st, 2017', 'May 5th' ]
makeFriendlyDates(['2017-03-01', '2017-05-05']);

// returns => [ 'January 1st, 2018' ]
makeFriendlyDates(['2018-01-01', '2018-01-01']);

// returns => [ 'September 5th, 2022', "September 4th" ]
makeFriendlyDates(['2022-09-05', '2023-09-04']);

// returns => [ 'September 5th, 2022', "September 5th, 2023" ]
makeFriendlyDates(['2022-09-05', '2023-09-05']);
