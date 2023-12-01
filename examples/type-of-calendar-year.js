import VanillaCalendar from 'vanilla-calendar-pro';
import 'vanilla-calendar-pro/build/vanilla-calendar.min.css';

const options = {
  type: 'year',
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();
