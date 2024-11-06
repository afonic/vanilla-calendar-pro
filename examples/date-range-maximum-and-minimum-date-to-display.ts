import { Calendar, type Options } from 'vanilla-calendar-pro';

import 'vanilla-calendar-pro/styles/vanilla-calendar-pro.min.css';

const options: Options = {
  dateMin: '1920-01-01',
  dateMax: '2038-12-31',
  displayDateMin: '2000-01-01',
  displayDateMax: '2024-12-31',
  displayDisabledDates: true,
};

const calendar = new Calendar('#calendar', options);
calendar.init();
