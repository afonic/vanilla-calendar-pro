import VanillaCalendar from 'vanilla-calendar-pro';
import 'vanilla-calendar-pro/build/vanilla-calendar.min.css';

const options = {
  settings: {
    iso8601: false,
  },
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();
