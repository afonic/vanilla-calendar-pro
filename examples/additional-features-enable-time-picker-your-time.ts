import { Calendar, type Options } from 'vanilla-calendar-pro';

import 'vanilla-calendar-pro/styles/vanilla-calendar-pro.min.css';

const options: Options = {
  selectionTimeMode: 12,
  selectedTime: '03:44 AM',
};

const calendar = new Calendar('#calendar', options);
calendar.init();
