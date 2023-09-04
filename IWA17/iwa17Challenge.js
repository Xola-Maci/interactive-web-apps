const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

const createArray = (length) => {
    const result = []

    for (let  i =0 ; i < length; i++) {
        result.push(i)
    }

    return result
}

const createData = () => {
    const current = new Date();// object is for current date and time
    current.setDate(1); // Set the date to the first day of the month.
  
    const startDay = current.getDay(); // Finds the day of the week
    const daysInMonth = getDaysInMonth(current);
  
    const weeks = createArray(5); // Assuming there are at most 5 weeks in a month.
    const result = [];
  
    for (const weekIndex of weeks) {
      result.push({
        week: weekIndex + 1,
        days: []
      });
  
      for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
        const day = dayIndex + 1 + weekIndex * 7 - startDay;
        const isValid = day > 0 && day <= daysInMonth;
  
        result[weekIndex].days.push({
          dayOfWeek: dayIndex,
          value: isValid ? day : '',
        });
      }
    }
  
    return result;
  };

  /**existing is for the existing html content.
   *  ClassString creates a table with a CSS class called 'classString'
   * (&nbsp;${value}&nbsp;) places the value inside the table cell, makes spcace around the value.
  */
const addCell = (existing, classString, value) => {
    const result =`${existing}
      <td class="${classString}">
        &nbsp;${value}&nbsp;
      </td>
    `;
    return result;
  };

const createHtml = (data) => {
    let result = '';
  
    for (const { week, days } of data) {
      let inner = '';
  
      inner += addCell('', 'table__cell table__cell_sidebar', `Week ${week}`);
  
      for (const { dayOfWeek, value } of days) {
        const isToday = new Date().getDate() === value;
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // Sunday (0) and Saturday (6).
        const isAlternate = week % 2 === 0;
  
        let classString = 'table__cell';
  
        if (isToday) classString += ' table__cell_today';
        if (isWeekend) classString += ' table__cell_weekend';
        if (isAlternate) classString += ' table__cell_alternate';
  
        inner += addCell('', classString, value);
      }
  
      result += `<tr>${inner}</tr>`;
    }
  
    return result;
  };

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)